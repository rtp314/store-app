import { createContext, useState } from "react";

export const BasketContext = createContext();

export default function BasketContextProvider({ children }) {
    const [basketItems, setBasketItems] = useState([]);
    const contextValue = { basketItems, setBasketItems };

    return <BasketContext.Provider value={contextValue}>{children}</BasketContext.Provider>;
}
