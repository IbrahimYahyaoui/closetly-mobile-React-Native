import React, {
  Dispatch,
  ReactNode,
  createContext,
  useReducer,
  useEffect,
} from "react";
import { ClothType } from "../types/types";
import { useNavigation } from "expo-router";
import axios from "axios"; // Import axios for making API requests

type State = {
  Closet: ClothType[] | null;
};

type Action =
  | { type: "AddCloth"; payload: ClothType }
  | { type: "DeleteCloth"; payload: string };

// Create the context
export const ClosetContext = createContext<
  { state: State; dispatch: Dispatch<Action> } | undefined
>(undefined);

function closetReducer(state: State, action: Action): State {
  switch (action.type) {
    case "AddCloth":
      // Implement logic to add cloth to the state
      return state;
    case "DeleteCloth":
      // Implement logic to delete cloth from the state
      return state;
    default:
      return state;
  }
}

export function ClosetProvider({ children }: { children: ReactNode }) {
  const navigation = useNavigation();

  const [state, dispatch] = useReducer(closetReducer, {
    Closet: null,
  });

  // Fetch the entire closet from the database when the component mounts
  useEffect(() => {
    const fetchCloset = async () => {
      try {
        const response = await axios.get("/api/closet");
        dispatch({ type: "AddCloth", payload: response.data }); // Assuming the response is an array of ClothType
      } catch (error) {
        console.error("Error fetching closet:", error);
      }
    };

    fetchCloset();
  }, []); // Run the effect only once when the component mounts

  return (
    <ClosetContext.Provider value={{ state, dispatch }}>
      {children}
    </ClosetContext.Provider>
  );
}
