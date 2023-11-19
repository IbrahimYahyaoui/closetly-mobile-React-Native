import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Salsa_400Regular } from "@expo-google-fonts/salsa";
import { Dropdown } from "react-native-element-dropdown";
import { UseCloset } from "../hooks/useCloset";
//
import { FileType } from "../types/types";
import { useToast } from "react-native-toast-notifications";

import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
const AddCloth = ({ closeModalHandler }: { closeModalHandler: () => void }) => {
  //
  const { AddCloth, isLoading, getAllCloth } = UseCloset();
  //
  const [clothName, setClothName] = useState("");
  const [IsNewCategory, setIsNewCategory] = useState(true);
  const [catvalue, setCatValue] = useState("");
  const [isFocus, setIsFocus] = useState(false);

  const [image, setImage] = useState("");
  const [File, setFile] = useState<FileType>();

  const toast = useToast();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);

      if (!result.canceled) {
        const uri = result.assets[0].uri || "";
        const response = await fetch(uri);
        const blob = await response.blob();
        console.log(typeof blob);
        // Set an empty string as a default if uri is null or undefined
        setImage(uri);
        setFile({
          fileName: result.assets[0].fileName || "",
          type: result.assets[0].type,
          uri: result.assets[0].uri,
        });
      }
    }
  };
  //   add font
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Pacifico_400Regular,
    Salsa_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  // tmp data for test
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  // handel sent data
  const handelDataSend = () => {
    // toast.hideAll();
    if (!File) {
      Toast.show({
        type: "error",
        text1: "Error: No picture selected",
        text2: " You missed adding  your cloth picture",
      });
      return;
    }

    if (clothName.length < 3 || clothName.length > 10) {
      Toast.show({
        type: "error",
        text1: "Error: cloth Name",
        text2: "Cloth name must be between 3 and 8 characters in length.",
      });
      return;
    }
    if (catvalue.length < 3) {
      Toast.show({
        type: "error",
        text1: "Error: Category selection",
        text2:
          "You forgot to add a category, or the entered category is shorter than 3 characters.",
      });
      return;
    }

    if (File) {
      AddCloth(clothName, File, catvalue, closeModalHandler);
    }
  };
  return (
    <View className="items-center z-10">
      <Text
        className="uppercase font-bold text-xl "
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        Add your Cloth
      </Text>
      <Text
        className="uppercase text-xs text-slate-400 my-2"
        style={{ fontFamily: "Poppins_400Regular" }}
      >
        Please use a PNG picture for the best result.
      </Text>
      <TouchableOpacity
        onPress={pickImage}
        className="h-52 w-52 rounded  p-4 overflow-hidden  my-2 items-center justify-center"
        style={{ borderStyle: "dashed", borderWidth: 2 }}
      >
        {image ? (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        ) : (
          <>
            <MaterialCommunityIcons
              name="file-image-plus"
              size={26}
              color="black"
            />
            <Text
              style={{ fontFamily: "Poppins_400Regular" }}
              className="text-xs my-2"
            >
              Pick an image from Gallery
            </Text>
          </>
        )}
      </TouchableOpacity>
      <View className="mt-4 w-full mb-10">
        <Text className="my-1" style={{ fontFamily: "Poppins_400Regular" }}>
          Name :
        </Text>
        <TextInput
          className="border-b-2 bg-slate-100 rounded  p-2"
          style={{ fontFamily: "Poppins_400Regular" }}
          onChangeText={(Text) => {
            setClothName(Text);
          }}
        ></TextInput>
        <Text className="my-1" style={{ fontFamily: "Poppins_400Regular" }}>
          Category :
        </Text>
        {IsNewCategory ? (
          <>
            <TextInput
              className="border-b-2 bg-slate-100 rounded  p-2"
              style={{ fontFamily: "Poppins_400Regular" }}
              onChangeText={(Text) => {
                setCatValue(Text);
              }}
            ></TextInput>
            <View className="w-full h-1 bg-slate-400  items-center my-4 justify-center">
              <Text className="bg-white h-5 w-6 text-center rounded uppercase font-bold text-slate-400">
                or
              </Text>
            </View>
            <Text
              className="w-full text-center text-slate-400 text-base font-bold capitalize"
              onPress={() => {
                setIsNewCategory(false);
                setCatValue("");
              }}
            >
              select existing Category
            </Text>
          </>
        ) : (
          <>
            <View style={styles.container}>
              <Dropdown
                style={[styles.dropdown]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? "Select item" : "..."}
                searchPlaceholder="Search..."
                value={catvalue}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={(item: any) => {
                  setCatValue(item.value);
                  setIsFocus(false);
                }}
              />
            </View>
            <View className="w-full h-1 bg-slate-400  items-center my-2 justify-center">
              <Text className="bg-white h-5 w-6 text-center rounded uppercase font-bold text-slate-400">
                or
              </Text>
            </View>
            <Text
              className="w-full text-center text-slate-400 text-base font-bold capitalize"
              onPress={() => {
                setIsNewCategory(true);
                setCatValue("");
              }}
            >
              add new Category
            </Text>
          </>
        )}

        {!isLoading ? (
          <TouchableOpacity
            className="w-full items-center h-12 border justify-center mt-4 bg-black rounded"
            onPress={() => {
              Keyboard.dismiss();
              handelDataSend();
            }}
          >
            <Text
              className="text-white capitalize"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              add to you Closet
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            className="w-full items-center h-12 border justify-center mt-4 bg-black rounded"
            onPress={() => {
              handelDataSend();
              console.log("ssssss");
            }}
          >
            <Text
              className="text-white capitalize"
              style={{ fontFamily: "Poppins_400Regular" }}
            >
              loading...
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {/* toast must be here in the end of the tree */}
      <Toast />
    </View>
  );
};
export default AddCloth;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 16,
  },
  dropdown: {
    height: 50,
    borderBottomColorColor: "gray",
    borderBottomWidth: 3,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: "rgb(241 245 249)",
  },
  icon: {
    marginRight: 5,
  },

  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
