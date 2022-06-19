import React, { useContext, useRef, useState } from "react";
import BasketItem from "./BasketItem";
import { BasketContext } from "../lib/BasketContext";
import { ReactComponent as BasketIcon } from "../icons/cart-svgrepo-com.svg";

export default function Basket() {
    // const fetchURL = "https://store-rtp314.herokuapp.com/items";
    const fetchURL = window.location.href + "/items";
    // const fetchURL = "http://localhost:8000/items"; for offline testing
    const { basketItems, dispatch } = useContext(BasketContext);
    const [openBasket, setOpenBasket] = useState(false);
    const basketDetailsRef = useRef();
    const basketTotal = basketItems.reduce((total, item) => total + (item.quantity * item.priceInCents) / 100, 0);
    const basketQuantity = basketItems.reduce((total, item) => total + item.quantity, 0);

    function openBasketDetails() {
        if (!openBasket) {
            setOpenBasket(true);
            function clickAway(e) {
                if (!basketDetailsRef.current.contains(e.target)) {
                    setOpenBasket(false);
                    window.removeEventListener("click", clickAway);
                }
            }
            setTimeout(() => {
                window.addEventListener("click", clickAway);
            }, 100);
        }
    }

    function handleCheckout() {
        const request = basketItems.map((item) => {
            return { id: item.id, quantity: item.quantity };
        });
        fetch(fetchURL, {
            method: "POST",
            body: JSON.stringify(request),
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((res) => (window.location = res))
            .catch((err) => console.log(err));
    }

    return (
        <>
            <div id='basket' className='flex-row' onClick={openBasketDetails}>
                Cart <BasketIcon id='basket-icon' />
                {basketQuantity > 0 && <div id='basket-quantity'>{basketQuantity}</div>}
            </div>
            {openBasket && (
                <div ref={basketDetailsRef} id='basket-details'>
                    {basketItems.length > 0 ? (
                        <div className='basket-grid'>
                            {/* HEADINGS (5 Columns)*/}
                            <span></span>
                            <span className='grid-title'>Item</span>
                            <span className='grid-title'>Quantity</span>
                            <span className='grid-title'>Price</span>
                            <span className='grid-title'>Remove</span>
                            {/* ITEMS */}
                            {basketItems.map((item) => (
                                <BasketItem key={item.id} item={item} dispatch={dispatch} />
                            ))}
                            {/* FOOTER */}
                            <span></span>
                            <span></span>
                            <span className='grid-title'>Total</span>
                            <span className='grid-title'>${basketTotal}</span>
                            <span></span>
                        </div>
                    ) : (
                        "No items in cart"
                    )}
                    <button className='btn' onClick={handleCheckout} disabled={basketItems.length > 0 ? false : true}>
                        Checkout
                    </button>
                </div>
            )}
        </>
    );
}
