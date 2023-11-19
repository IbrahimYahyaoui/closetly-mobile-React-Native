import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router } from "expo-router";

import { UserAuth } from "../types/types";
import { useNavigation } from "expo-router";
import Toast from "react-native-toast-message";

//

//
// Define the initial state and action types
type State = {
  user: UserAuth | null; // Change the user field to be of type UserAuth or null
};

type Action =
  | { type: "SIGN_IN"; payload: UserAuth }
  | { type: "SIGN_UP"; payload: UserAuth }
  | { type: "LOG_OUT" };

// Create the context
export const AuthContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

// Define a reducer function
function authReducer(state: State, action: Action): State {
  switch (action.type) {
    case "SIGN_IN":
    case "SIGN_UP":
      return { user: action.payload }; // Update user and isAuthenticated
    case "LOG_OUT":
      return { user: null }; // Reset user and isAuthenticated
    default:
      return state;
  }
}

// Create the context provider
export function AuthProvider({ children }: { children: ReactNode }) {
  const navigation = useNavigation();
  const [state, dispatch] = useReducer(authReducer, {
    user: null, // Initialize user as null
  });

  useEffect(() => {
    getData().then((res) => {
      if (res) {
        console.log("user already here");
        router.replace("/(tabs)/Home");
        dispatch({ type: "SIGN_IN", payload: res });
      } else {
        console.log("no user found");
      }
    });
  }, []);

  useEffect(() => {
    console.log("st", state);
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
// Create a custom hook to access the context
export function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

const getData = async () => {
  try {
    const rawData = await AsyncStorage.getItem("user");
    return rawData ? JSON.parse(rawData) : null;
  } catch (e) {
    console.log("error while getting the user from local ");
  }
};
