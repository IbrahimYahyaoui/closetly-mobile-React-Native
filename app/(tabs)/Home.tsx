import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Badge } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Outfit_400Regular } from "@expo-google-fonts/dev";
import { useAuthContext } from "../../context/AuthContext";
const Home = () => {
  //
  const { state } = useAuthContext();
  //
  let [fontsLoaded] = useFonts({
    Outfit_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView>
      <View className="h-32  p-2 pt-6">
        <View className=" flex-row   justify-between ">
          <View className="flex-row">
            <View>
              {!state.user?.Avatar ? (
                <Avatar
                  size={52}
                  rounded
                  title={state.user?.username.slice(0, 2)}
                  containerStyle={{ backgroundColor: "purple" }}
                />
              ) : (
                <Avatar
                  size={52}
                  rounded
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/36.jpg",
                  }}
                />
              )}
              <Badge
                status="success"
                containerStyle={{
                  position: "absolute",
                  bottom: 5,
                  right: 0,
                }}
              />
            </View>
            <View className="  ml-2 text-lg ">
              <Text
                className="text-xl font-medium"
                style={{ fontFamily: "Outfit_400Regular" }}
              >
                {state.user?.username ? state.user?.username : "Hi!"}
              </Text>
              <Text
                style={{ fontFamily: "Outfit_400Regular" }}
                className="capitalize opacity-50"
              >
                good morning
              </Text>
            </View>
          </View>
          <View className="self-center border  p-2 rounded-full mr-2 bg-black">
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="white"
            />

            <Badge
              status="error"
              value={state.user?.Notification.length}
              containerStyle={{ position: "absolute", top: -6, right: -5 }}
            />
          </View>
        </View>
        <View></View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
