import { createContext, useEffect, useState } from "react";

const testItems = [
    {
        name: "Thunderbird 1",
        priceInCents: 15000,
        imgColor: "blue",
        description: "Is it a rocket or is it a plane? Yes.",
    },
    {
        name: "Thunderbird 2",
        priceInCents: 27500,
        imgColor: "green",
        description: "Totally the best Thunderbird. Iconic.",
    },
    {
        name: "Thunderbird 3",
        priceInCents: 16000,
        imgColor: "red",
        description: "Criminally underutilized. Not that much happened in space.",
    },
    {
        name: "Thunderbird 4",
        priceInCents: 9900,
        imgColor: "yellow",
        description: "Did you know its grippers were sensitive enough to pick up an egg without breaking it?",
    },
    {
        name: "Thunderbird 5",
        priceInCents: 25000,
        imgColor: "grey",
        description: "Important, but not that interesting to be honest",
    },
    {
        name: "Mole",
        priceInCents: 13000,
        imgColor: "brown",
        description: `Yes, it's technically not a Thunderbird, but it was pretty important`,
    },
];

export const ItemContext = createContext();

export default function ItemContextProvider({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState([]);
    const store = { loading: isLoading, items: items };

    useEffect(() => {
        setTimeout(() => {
            setItems(testItems);
            setIsLoading(false);
        }, 500);
        // fetch("url")
        //     .then((res) => res.json())
        //     .then((fetchedItems) => setItems(fetchedItems))
        //     .catch((err) => console.log(err))
        //     .finally(setIsLoading(false));
    }, []);

    return <ItemContext.Provider value={store}>{children}</ItemContext.Provider>;
}
