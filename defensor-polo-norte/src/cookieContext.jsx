import { createContext, useReducer, useEffect } from "react";
import { cookieReducer, initialState } from "./cookieReducer";

export const CookieContext = createContext();

export function CookieProvider({ children }) {
  const [state, dispatch] = useReducer(cookieReducer, initialState);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //       dispatch({ type: "AUTO_SHOOT" });
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, [state.caramels]);

  return (
    <CookieContext.Provider value={{ state, dispatch }}>
      {children}
    </CookieContext.Provider>
  );
}
