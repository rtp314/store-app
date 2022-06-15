import React from "react";
import Basket from "./Basket";

export default function Navbar({ basketItems, setBasketItems }) {
    return (
        <nav id='navbar'>
            <span>E-Commerce</span>
            <Basket basketItems={basketItems} setBasketItems={setBasketItems} />
        </nav>
    );
}
