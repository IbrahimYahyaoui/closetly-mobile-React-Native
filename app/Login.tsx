import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";
// Assets
import Shirt from "../assets/svg/welcome/shirt.svg";
import Line from "../assets/svg/welcome/Line.svg";
// Fonts
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Salsa_400Regular } from "@expo-google-fonts/salsa";
import { SafeAreaView } from "react-native-safe-area-context";

//
import { Input } from "@rneui/themed";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
//
import { useAuth } from "../hooks/useAuth";

const index = () => {
  const { signin, isLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const SigninHandler = () => {
    signin(username, password);
  };
  //
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Pacifico_400Regular,
    Salsa_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView className="  flex-1 items-center justify-start">
      <View className="absolute opacity-10">
        <Line width={1900} height={100} />
        <Line width={1800} height={100} />
      </View>

      <View className="w-11/12 items-center mt-60 ">
        <Text style={{ fontFamily: "Salsa_400Regular" }} className="text-4xl ">
          Welcome Back
        </Text>
        <Text
          className="text-center   my-4 mb-16"
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          Please enter your details below.
        </Text>
      </View>

      <KeyboardAvoidingView
        behavior="position"
        // style={{ flex: 1 }}
        className="w-full "
      >
        <Input
          placeholder="Username"
          style={{ fontFamily: "Poppins_400Regular" }}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <Input
          style={{ fontFamily: "Poppins_400Regular" }}
          placeholder="Password"
          onChangeText={(text) => {
            setPassword(text);
          }}
          secureTextEntry={isPasswordHidden}
          rightIcon={
            <TouchableOpacity>
              {isPasswordHidden ? (
                <FontAwesomeIcon
                  name="eye"
                  size={24}
                  color="black"
                  onPress={() => {
                    setIsPasswordHidden(!isPasswordHidden);
                  }}
                />
              ) : (
                <FontAwesomeIcon
                  name="eye-slash"
                  size={24}
                  color="black"
                  onPress={() => {
                    setIsPasswordHidden(!isPasswordHidden);
                  }}
                />
              )}
            </TouchableOpacity>
          }
        />
      </KeyboardAvoidingView>

      <View className="w-11/12">
        <TouchableOpacity
          className="bg-black  h-14 flex items-center justify-center rounded-md "
          onPress={() => {
            SigninHandler();
          }}
        >
          <Text
            className="  text-white w-full text-center  py-4 "
            style={{ fontFamily: "Poppins_400Regular" }}
          >
            {isLoading ? "loading..." : "Login"}
          </Text>
        </TouchableOpacity>
        <Text
          className=" text-center mt-2 "
          style={{ fontFamily: "Poppins_400Regular" }}
        >
          New to our platform ?
          <Link href="/Register" className="font-bold ">
            {" "}
            creating an account now.
          </Link>
        </Text>
      </View>

      <View className="rotate-45  fixed bottom-20 right-72  w-16 opacity-10">
        <Shirt width={"350"} height="450" />
      </View>
    </SafeAreaView>
  );
};

export default index;
