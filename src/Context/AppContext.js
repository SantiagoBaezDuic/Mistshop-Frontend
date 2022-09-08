import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }){
    const [admin, setAdmin] = useState(false);
    const [logged, setLogged] = useState(false);
    const [currentEmail, setCurrentEmail] = useState(undefined);

    return(
        <AppContext.Provider value={{ admin, setAdmin, logged, setLogged, currentEmail, setCurrentEmail }}>{children}</AppContext.Provider>
    )
}