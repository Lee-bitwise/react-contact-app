import { createContext, useContext } from "react";

export const AuthContext = createContext(null);
AuthContext.displayName = "AuthContext";

export const useAuth = () => useContext(AuthContext);