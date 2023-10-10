import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  Dispatch,
  useEffect,
} from "react";

// Define the initial state and action types

import { UserData } from "../types/types";

type State = {
  user: UserData | null; // Change the user field to be of type UserData or null
};

type Action =
  | { type: "SIGN_IN"; payload: UserData }
  | { type: "SIGN_UP"; payload: UserData }
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
  const [state, dispatch] = useReducer(authReducer, {
    user: null, // Initialize user as null
  });

  useEffect(() => {
    console.log("this is the state", state);
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
