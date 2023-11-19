import { Stack } from "expo-router";

import { AuthProvider } from "../context/AuthContext";
import Toast, { BaseToast, ErrorToast } from "react-native-toast-message";
import { Text, View } from "react-native";

const _layout = () => {
  return (
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="index"></Stack.Screen>
        <Stack.Screen name="Login"></Stack.Screen>
        <Stack.Screen name="Register"></Stack.Screen>
        <Stack.Screen
          name="modal"
          options={{
            // Set the presentation mode to modal for our modal route.
            presentation: "modal",
          }}
        />
      </Stack>
      <Toast />
    </AuthProvider>
  );
};

export default _layout;
