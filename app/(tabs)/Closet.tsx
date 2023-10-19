import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { Tab } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView } from "@rneui/base";
import { FontAwesome } from "@expo/vector-icons";
// import ClosetComp from "../../screens/ClosetComp";
import { useFonts, Poppins_400Regular } from "@expo-google-fonts/poppins";
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import { Salsa_400Regular } from "@expo-google-fonts/salsa";

const Index = () => {
  const [index, setIndex] = useState(0);

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

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text
        style={{
          fontSize: 20,
          margin: 4,
          fontFamily: "Salsa_400Regular",
          marginBottom: 10,
        }}
      >
        Closet
      </Text>
      <View className="h-18 border-b">
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Text
              className={`p-2 ${
                index === item.id ? "border-b-4   font-bold " : ""
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
          initialScrollIndex={0}
        />
      </View>
      <Text className=" flex-1">test</Text>
    </SafeAreaView>
  );
};

export default Index;
