import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Avatar, Badge } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useFonts, Outfit_400Regular } from "@expo-google-fonts/dev";
import { useAuthContext } from "../../context/AuthContext";
import { getGreeting } from "../../utils/Gretting";
import Toast from "react-native-toast-message";
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
    <SafeAreaView className="bg-white flex-1">
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
                    uri: state.user.Avatar,
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
              {getGreeting()}
            </View>
          </View>
          <TouchableOpacity
            className="self-center border  p-2 rounded-full mr-2 bg-black"
            onPress={() => {
              Toast.show({
                type: "success",
                text1: "🚧🚧🚧🚧",
                text2: "under development",
              });
            }}
          >
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              color="white"
            />

            <Badge
              status="error"
              value={0}
              containerStyle={{ position: "absolute", top: -6, right: -5 }}
            />
          </TouchableOpacity>
        </View>
        <View className="">
          <Text>aa</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
