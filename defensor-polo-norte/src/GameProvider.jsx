import { createContext, useReducer, useEffect } from "react";
import { cookieReducer, initialState } from "./cookieReducer";


export const CookieContext = createContext();

export function CookieProvider({ children }) {
  const [state, dispatch] = useReducer(cookieReducer, initialState);


  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "GENERATE_COOKIES" });
    }, 1000);
 
    return () => clearInterval(timer);
  }, []);

  return (
    <GameProvider.Provider value={{ state, dispatch }}>
      {children}
    </GameProvider.Provider>
  );

}