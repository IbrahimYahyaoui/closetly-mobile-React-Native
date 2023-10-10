import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link, Stack, useNavigation } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const _layout = () => {
  const navigation = useNavigation();
  return (
    <Stack
      screenOptions={{
        animation: "fade_from_bottom",
      }}
    >
      <Stack.Screen
        name="closet"
        options={{ headerShown: false }}
      ></Stack.Screen>
      <Stack.Screen
        name="UploadItem"
        options={{
          headerTitleAlign: "center",
          headerLeft: () => {
            return (
              <Link
                href="/(tabs)/ClosetNav/closet"
                className="bg-blue-400  rounded-xl  p-2"
              >
                <View className="flex-row items-center">
                  <Ionicons
                    name="ios-arrow-back-sharp"
                    size={24}
                    color="white"
                  />
                  <Text className="text-white font-semibold ">UNDO</Text>
                </View>
              </Link>
            );
          },
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default _layout;
