import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }){
    const [admin, setAdmin] = useState(false);
    const [logged, setLogged] = useState(false);
    const [catalogue, setCatalogue] = useState(null);
    const [cartUpdate, setCartUpdate] = useState(false);

    return(
        <AppContext.Provider value={{ admin, setAdmin, logged, setLogged, catalogue, setCatalogue, cartUpdate, setCartUpdate }}>{children}</AppContext.Provider>
    )
}