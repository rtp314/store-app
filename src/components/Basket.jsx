import React, { useContext, useState } from "react";
import BasketItem from "./BasketItem";
import { BasketContext } from "../lib/BasketContext";

export default function Basket() {
    const { basketItems, setBasketItems } = useContext(BasketContext);
    const [openBasket, setOpenBasket] = useState(false);

    return (
        <div id='basket' onClick={() => setOpenBasket((prev) => !prev)}>
            Basket Icon
            {openBasket && (
                <div id='basket-details'>
                    {basketItems.length > 0
                        ? basketItems.map((item) => <BasketItem item={item} setBasketItems={setBasketItems} />)
                        : "No items in basket"}
                    <button className={"basket-checkout"} disabled={basketItems.length > 0 ? "false" : "true"}>
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
}
