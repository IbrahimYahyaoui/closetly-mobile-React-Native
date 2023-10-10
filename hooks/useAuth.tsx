import axios from "axios";
import { Redirect, router } from "expo-router";
import { useContext, useState } from "react";
import { useToast } from "react-native-toast-notifications";
import { useAuthContext } from "../context/AuthContext";

export const useAuth = () => {
  //
  const { dispatch } = useAuthContext();
  //
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const signup = async (username: string, password: string) => {
    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/signup`, {
        Username: username,
        password: password,
      });

      setIsLoading(false);

      dispatch({ type: "SIGN_UP", payload: response.data });
      toast.show(`welcome to closetly ${username}`, {
        type: "success",
      });
      router.replace("/(tabs)/Home");
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        toast.show(errorMessage, {
          type: "danger",
        });
      } else {
        console.error(error);
        toast.show("An error occurred while signing up.", {
          type: "danger",
        });
      }
      setIsLoading(false);
    }
  };
  //
  //
  const signin = async (username: string, password: string) => {
    setIsLoading(true);

    try {
      const response = await axios.post(`${apiUrl}/signin`, {
        Username: username,
        password: password,
      });

      setIsLoading(false);

      dispatch({ type: "SIGN_IN", payload: response.data });
      toast.show(`welcome to closetly ${username}`, {
        type: "success",
      });
      router.replace("/(tabs)/Home");
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        toast.show(errorMessage, {
          type: "danger",
        });
      } else {
        console.error(error);
        toast.show("An error occurred while signing in.", {
          type: "danger",
        });
      }
      setIsLoading(false);
    }
  };

  return { signup, isLoading, signin };
};
