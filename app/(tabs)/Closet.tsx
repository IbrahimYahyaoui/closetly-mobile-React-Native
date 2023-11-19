import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Image } from "expo-image";
import React, { useEffect, useState } from "react";
import { Tab } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { Dialog, TabView } from "@rneui/base";
import { FontAwesome } from "@expo/vector-icons";
// import ClosetComp from "../../screens/ClosetComp";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Salsa_400Regular } from "@expo-google-fonts/salsa";
import { AntDesign } from "@expo/vector-icons";
import Modal from "react-native-modal";
import AddCloth from "../../components/AddCloth";
import { Link } from "expo-router";
import Toast from "react-native-toast-message";
import { UseCloset } from "../../hooks/useCloset";
import { ClothType } from "../../types/types";

const Index = () => {
  const [index, setIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const { getAllCloth, isLoading, Categories, clothesList } = UseCloset();
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Pacifico_400Regular,
    Salsa_400Regular,
  });
  if (!fontsLoaded) {
    return null;
  }
  // this function will be passed to the useCloth to handel
  // the event of closing the modal after successful cloth upload
  const closeModalHandler = () => {
    setModalVisible(false);
    // Toast.show({
    //   type: "success",
    //   text1: "upload successes",
    //   text2: "Picture successfully added to your closet!",
    // });
  };
  const DATA = [
    { id: 1, name: "All" },
    { id: 2, name: "T-shirt" },
    { id: 3, name: "Jeans" },
    { id: 4, name: "Dress" },
    { id: 5, name: "Shoes" },
    { id: 6, name: "Hat" },
    { id: 7, name: "Jacket" },
    { id: 8, name: "Shorts" },
    { id: 9, name: "Sweater" },
    { id: 10, name: "Skirt" },
    { id: 11, name: "Coat" },
    { id: 12, name: "Pants" },
    { id: 13, name: "Socks" },
    { id: 14, name: "Blouse" },
    { id: 15, name: "Boots" },
    { id: 16, name: "Scarf" },
    { id: 17, name: "Gloves" },
    { id: 18, name: "Shirt" },
    { id: 19, name: "Sweatshirt" },
    { id: 20, name: "Belt" },
  ];
  //

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          fontFamily: "Salsa_400Regular",
        }}
        className=" text-3xl mt-6 mx-3 mb-2"
        onPress={() => {
          Toast.show({
            type: "error",
            text1: "Error: Category selection",
            text2:
              "You forgot to add a category, or the entered category is shorter than 3 characters.",
          });
        }}
      >
        Closet
      </Text>
      <View className="h-18 border-b  border-neutral-400">
        <FlatList
          data={Categories}
          renderItem={({ item }) => (
            <Text
              className={`p-2 text-neutral-600 ${
                index === Categories.indexOf(item)
                  ? "border-b-4  text-black font-bold "
                  : ""
              }`}
              onPress={() => {
                console.log(item);
                setIndex(Categories.indexOf(item));
                console.log(index);
              }}
            >
              {item}
            </Text>
          )}
          keyExtractor={(item: any) => item.id}
          horizontal={true}
          // contentContainerStyle={{ height: 50 }}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={1}
        />
      </View>
      <FlatList
        data={clothesList}
        renderItem={({ item }: { item: ClothType }) =>
          item.Category === Categories[index] ? (
            <TouchableOpacity
              className="p-2 w-50%" // Set the width to 50% for two columns
              onPress={() => {
                console.log(item.url);
              }}
            >
              <View className={`text-neutral-600  "border-b-4   font-bold `}>
                <Image
                  className="h-44 w-44" // Set the width to full for the image
                  source={item.url.replace(/["']/g, "")}
                  contentFit="cover"
                  transition={1000}
                />
                <Text>{item.Name}</Text>
              </View>
            </TouchableOpacity>
          ) : null
        }
        keyExtractor={(item) => item.url}
        numColumns={2}
        showsVerticalScrollIndicator={true}
        initialNumToRender={1}
      />
      {/* add btn */}
      <TouchableOpacity
        className="  w-12 rounded-xl bg-white self-center items-center justify-center h-12 bottom-8  absolute"
        onPress={() => {
          setModalVisible(true);
        }}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,

          elevation: 12,
        }}
      >
        <AntDesign name="plus" size={24} color="black" />
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        coverScreen={true}
        animationIn={"slideInUp"}
        hasBackdrop={true}
        onBackdropPress={() => {
          setModalVisible(false);
        }}
        // avoidKeyboard={true}
        scrollHorizontal={true}
        // style={{ zIndex: 999 }}
      >
        <ScrollView
          // style={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flexGrow: 1 }}
          className="bg-white rounded my-4  px-2 py-6 overflow-hidden "
        >
          <AddCloth closeModalHandler={closeModalHandler} />
        </ScrollView>
      </Modal>
      <Toast />
    </SafeAreaView>
  );
};

export default Index;
