import React, { useContext, useRef, useState } from "react";
import BasketItem from "./BasketItem";
import { BasketContext } from "../lib/BasketContext";
import { ReactComponent as BasketIcon } from "../images/cart-svgrepo-com.svg";

export default function Basket() {
    const { basketItems, dispatch } = useContext(BasketContext);
    const [openBasket, setOpenBasket] = useState(false);
    const basketDetailsRef = useRef();
    const basketTotal = basketItems.reduce((total, item) => total + (item.quantity * item.priceInCents) / 100, 0);

    function openBasketDetails() {
        if (!openBasket) {
            setOpenBasket(true);
            function clickAway(e) {
                if (e.target !== basketDetailsRef.current) {
                    setOpenBasket(false);
                    window.removeEventListener("click", clickAway);
                }
            }
            setTimeout(() => {
                window.addEventListener("click", clickAway);
            }, 100);
        }
    }

    return (
        <>
            <div id='basket' className='flex-row' onClick={openBasketDetails}>
                Cart <BasketIcon id='basket-icon' />
            </div>
            {openBasket && (
                <div ref={basketDetailsRef} id='basket-details'>
                    {basketItems.length > 0 ? (
                        <div className='basket-grid'>
                            <span></span>
                            <span className='grid-title'>Item</span>
                            <span className='grid-title'>Quantity</span>
                            <span className='grid-title'>Price</span>
                            <span className='grid-title'>Remove</span>
                            {basketItems.map((item) => (
                                <BasketItem key={item.id} item={item} dispatch={dispatch} />
                            ))}
                            <span></span>
                            <span></span>
                            <span className='grid-title'>Total</span>
                            <span className='grid-title'>${basketTotal}</span>
                            <span></span>
                        </div>
                    ) : (
                        "No items in cart"
                    )}
                    <button className='btn' disabled={basketItems.length > 0 ? false : true}>
                        Checkout
                    </button>
                </div>
            )}
        </>
    );
}
