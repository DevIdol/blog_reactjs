import { createContext, useEffect, useReducer } from "react";
import LoginReducer from "./LoginReducer";

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};
export const RegisterContext = createContext(INITIAL_STATE);

export const RegisterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(LoginReducer, INITIAL_STATE);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);
  return (
    <RegisterContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
};
