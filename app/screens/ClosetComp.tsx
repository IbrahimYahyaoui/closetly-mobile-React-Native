import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";
const ClosetComp = () => {
  return (
    <View className="mx-4 my-2 flex-1  ">
      <Link
        href={"/(tabs)/ClosetNav/UploadItem"}
        className="bg-black   py-2 rounded w-full  items-center justify-center"
        asChild
      >
        <Pressable className="border  flex-row">
          <AntDesign name="pluscircleo" size={24} color="white" />
          <Text className="text-white font-bold capitalize pl-2">
            add new cloth
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default ClosetComp;
