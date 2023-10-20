import {
  Button,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Salsa_400Regular } from "@expo-google-fonts/salsa";
const AddCloth = () => {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    console.log(typeof result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
  return (
    <View className="items-center">
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
        ></TextInput>
        <Text className="my-1" style={{ fontFamily: "Poppins_400Regular" }}>
          Category :
        </Text>
        <TextInput
          className="border-b-2 bg-slate-100 rounded  p-2"
          style={{ fontFamily: "Poppins_400Regular" }}
        ></TextInput>
        <TouchableOpacity className="w-full items-center h-12 border justify-center mt-4 bg-black rounded">
          <Text
            className="text-white capitalize"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            add to you Closet
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        className="absolute bottom-0 text-slate-200"
        style={{ fontFamily: "Salsa_400Regular" }}
      >
        Closetly
      </Text>
    </View>
  );
};

export default AddCloth;
