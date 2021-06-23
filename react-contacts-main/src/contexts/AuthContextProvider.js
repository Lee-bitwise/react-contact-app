import {useState} from "react";
import { AuthContext } from './AuthContext';

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const loginUser = (username, password) => {
        if(username === "jacque" && password === "reactisawesome") {
            setUser(username);
        }
    }

    const logoutUser = () => setUser(null);
    return(
        <AuthContext.Provider value={{loginUser, logoutUser, user}}>
            {children}
        </AuthContext.Provider>
    );
}