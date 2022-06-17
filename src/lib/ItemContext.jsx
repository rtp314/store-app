import { createContext, useEffect, useState } from "react";

const testItems = [
    {
        id: 1,
        name: "Thunderbird 1",
        priceInCents: 15000,
        imgColor: "blue",
        description: "Is it a rocket or is it a plane? Yes.",
    },
    {
        id: 2,
        name: "Thunderbird 2",
        priceInCents: 27500,
        imgColor: "green",
        description: "Totally the best Thunderbird. Iconic.",
    },
    {
        id: 3,
        name: "Thunderbird 3",
        priceInCents: 16000,
        imgColor: "red",
        description: "Criminally underutilized. Not that much happened in space.",
    },
    {
        id: 4,
        name: "Thunderbird 4",
        priceInCents: 9900,
        imgColor: "yellow",
        description: "Did you know its grippers were sensitive enough to pick up an egg without breaking it?",
    },
    {
        id: 5,
        name: "Thunderbird 5",
        priceInCents: 25000,
        imgColor: "grey",
        description: "Important, but not that interesting to be honest",
    },
    {
        id: 6,
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
