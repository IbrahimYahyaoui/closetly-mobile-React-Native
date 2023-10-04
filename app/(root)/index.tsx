import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
// Assets
import Shirt from "../../assets/svg/welcome/shirt.svg";
import Line from "../../assets/svg/welcome/Line.svg";
// Fonts
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Salsa_400Regular } from "@expo-google-fonts/salsa";

const welcome = () => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Pacifico_400Regular,
    Salsa_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="  flex-1 items-center justify-start">
      <View className="absolute opacity-10">
        <Line width={1900} height={100} />
        <Line width={1800} height={100} />
      </View>

      <View className="w-11/12 items-center mt-60 ">
        <Text style={{ fontFamily: "Salsa_400Regular" }} className="text-4xl ">
          Closetly
        </Text>
        <Text
          className="text-center   my-4 mb-16"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          This is the perfect place for uploading, sharing, and creating
          outfits.
        </Text>
      </View>
      <View className="w-11/12">
        <TouchableOpacity className="bg-black  h-14 flex items-center justify-center rounded-md mb-5">
          <Link
            href={"/Auth/signup/"}
            className="  text-white w-full text-center  py-4"
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Create an Account
          </Link>
        </TouchableOpacity>
        <TouchableOpacity className="bg-black  h-14 flex items-center justify-center rounded-md ">
          <Link
            href={"/Auth/signin/"}
            className="  text-white w-full text-center  py-4 "
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            Login
          </Link>
        </TouchableOpacity>
      </View>

      <View className="rotate-45  absolute -bottom-10 -left-20  w-16 opacity-10">
        <Shirt width={"350"} height="450" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fontPoppins: {
    fontFamily: "Poppins_400Regular",
  },
});

export default welcome;
