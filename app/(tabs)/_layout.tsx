import React from "react";
import { Text } from "react-native";
import { Tabs } from "expo-router";
import ClosetIconFocus from "../../assets/icon/ClosetFill.svg";
import ClosetIconNotFocus from "../../assets/icon/ClosetStroke.svg";
import HomeIconFocus from "../../assets/icon/homeFill.svg";
import HomeIconNotFocus from "../../assets/icon/homeOutline.svg";
import ProfileIconFocus from "../../assets/icon/profileFill.svg";
import ProfileIconNotFocus from "../../assets/icon/profileOutline.svg";
import ShirtIconFocus from "../../assets/icon/shirtFill.svg";
import ShirtIconNotFocus from "../../assets/icon/shirtOutline.svg";
import Toast from "react-native-toast-message";

const _layout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 65,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          if (route.name === "Home") {
            return focused ? (
              <>
                <HomeIconFocus width={25} height={25} />
                <Text className=" text-sm font-semibold ">{route.name}</Text>
              </>
            ) : (
              <>
                <HomeIconNotFocus width={25} height={25} />
                <Text className=" text-sm ">{route.name}</Text>
              </>
            );
          } else if (route.name === "Closet") {
            return focused ? (
              <>
                <ClosetIconFocus width={25} height={25} />
                <Text className=" text-sm font-semibold ">{route.name}</Text>
              </>
            ) : (
              <>
                <ClosetIconNotFocus width={25} height={25} />
                <Text className=" text-sm  ">{route.name}</Text>
              </>
            );
          } else if (route.name === "Profile") {
            return focused ? (
              <>
                <ProfileIconFocus width={25} height={25} />
                <Text className=" text-sm font-semibold ">{route.name}</Text>
              </>
            ) : (
              <>
                <ProfileIconNotFocus width={25} height={25} />
                <Text className=" text-sm  ">{route.name}</Text>
              </>
            );
          } else if (route.name === "Outfit") {
            return focused ? (
              <>
                <ShirtIconFocus width={25} height={25} />
                <Text className=" text-sm font-semibold ">{route.name}</Text>
              </>
            ) : (
              <>
                <ShirtIconNotFocus width={25} height={25} />
                <Text className=" text-sm  ">{route.name}</Text>
              </>
            );
          }
          return null;
        },
        // tabBarShowLabel: false,
        // headerPressOpacity: 50,
      })}
    >
      <Tabs.Screen name="Home" />
      <Tabs.Screen name="Closet" />
      <Tabs.Screen name="Outfit" />
      <Tabs.Screen name="Profile" />
    </Tabs>
  );
};

export default _layout;
