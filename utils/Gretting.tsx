import React from "react";
import { Text } from "react-native";

export function getGreeting(): JSX.Element {
  const now = new Date();
  const hour = now.getHours();
  let greetingText = "Good morning";

  if (hour >= 5 && hour < 12) {
    greetingText = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greetingText = "Good afternoon";
  } else if (hour >= 18 && hour < 24) {
    greetingText = "Good evening";
  } else {
    greetingText = "Good night";
  }

  return (
    <Text
      style={{ fontFamily: "Outfit_400Regular" }}
      className="capitalize opacity-50"
    >
      {greetingText}
    </Text>
  );
}
