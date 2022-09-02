import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }){
    const [admin, setAdmin] = useState(true);

    return(
        <AppContext.Provider value={{ admin, setAdmin }}>{children}</AppContext.Provider>
    )
}