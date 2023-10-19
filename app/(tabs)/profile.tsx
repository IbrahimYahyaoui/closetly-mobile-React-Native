import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { useAuthContext } from "../../context/AuthContext";

const index = () => {
  const { dispatch } = useAuthContext();
  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <Pressable
        className="bg-emerald-600 p-2 rounded"
        onPress={() => {
          AsyncStorage.clear();
          router.replace("/");
          dispatch({ type: "LOG_OUT" });
        }}
      >
        <Text className="text-white">logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default index;
