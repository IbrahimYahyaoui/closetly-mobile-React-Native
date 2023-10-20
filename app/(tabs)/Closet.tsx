import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
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

const Index = () => {
  const [index, setIndex] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Pacifico_400Regular,
    Salsa_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
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
      >
        Closet
      </Text>
      <View className="h-18 border-b  border-neutral-400">
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Text
              className={`p-2 text-neutral-600 ${
                index === item.id ? "border-b-4  text-black font-bold " : ""
              }`}
              onPress={() => {
                console.log(item.name);
                setIndex(item.id);
              }}
            >
              {item.name}
            </Text>
          )}
          keyExtractor={(item: any) => item.id}
          horizontal={true}
          // contentContainerStyle={{ height: 50 }}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={1}
        />
      </View>
      <Text className=" flex-1">test</Text>
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
        avoidKeyboard={true}
        scrollHorizontal={true}
      >
        <ScrollView
          style={{ flex: 1 }}
          className="bg-white rounded my-4  p-4 overflow-hidden h-full"
        >
          <AddCloth />
        </ScrollView>
      </Modal>
    </SafeAreaView>
  );
};

export default Index;
