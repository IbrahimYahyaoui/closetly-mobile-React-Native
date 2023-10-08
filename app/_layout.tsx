import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";

const _layout = () => {
  return (
    <ToastProvider placement="top" offset={50}>
      <Stack
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <Stack.Screen name="index"></Stack.Screen>
        <Stack.Screen name="Login"></Stack.Screen>
        <Stack.Screen name="Register"></Stack.Screen>
        {/* <Stack.Screen name="Home/index"></Stack.Screen> */}
      </Stack>
    </ToastProvider>
  );
};

export default _layout;
