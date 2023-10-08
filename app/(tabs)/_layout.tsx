import React from "react";
import { Text } from "react-native";
import { Tabs } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: ({ focused }) => {
          if (focused) {
            // Display the label for the active tab
            switch (route.name) {
              case "index":
                return <Text className=" text-xs">Home</Text>;
              case "closet":
                return <Text className=" text-xs">Closet</Text>;
              case "new":
                return <Text className=" text-xs">New</Text>;
              case "profile":
                return <Text className=" text-xs">Profile</Text>;
              default:
                return null;
            }
          } else {
            // Hide labels for inactive tabs
            return null;
          }
        },
        tabBarActiveBackgroundColor: "#F0F0F0",
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => {
            return <AntDesign name="home" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="closet"
        options={{
          tabBarIcon: () => {
            return <Ionicons name="shirt-outline" size={24} color="black" />;
          },
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          tabBarIcon: () => {
            return (
              <Ionicons name="add-circle-outline" size={28} color="black" />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: () => {
            return <EvilIcons name="user" size={32} color="black" />;
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;
