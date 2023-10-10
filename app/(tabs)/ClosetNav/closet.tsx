import { View, Text } from "react-native";
import React from "react";
import { Tab } from "@rneui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { TabView } from "@rneui/base";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ClosetComp from "../../screens/ClosetComp";
const index = () => {
  const [index, setIndex] = React.useState(0);

  return (
    <SafeAreaView className="flex-1">
      <Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "white",
          height: 3,
        }}
        buttonStyle={{
          backgroundColor: "#121212",
        }}
        titleStyle={{}}
      >
        <Tab.Item
          title="Closet"
          titleStyle={{ fontSize: 12, color: "white" }}
          icon={{ name: "shirt", type: "ionicon", color: "white" }}
        />
        <Tab.Item
          title="Outfit"
          titleStyle={{ fontSize: 12, color: "white" }}
          icon={
            <MaterialCommunityIcons name="hanger" size={24} color="white" />
          }
        />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={{ width: "100%" }}>
          <ClosetComp />
        </TabView.Item>
        <TabView.Item style={{ width: "100%" }}>
          <Text>Outfit Item</Text>
        </TabView.Item>
      </TabView>
    </SafeAreaView>
  );
};

export default index;
