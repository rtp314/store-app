import React from "react";

export default function BasketItem({ item, setBasketItems }) {
    function removeItem() {
        setBasketItems((prev) => prev.filter((basketItem) => basketItem !== item));
    }

    return (
        <div className='basket-item'>
            {item.imgSrc ? (
                <img className='basket-image' src={item.imgSrc} />
            ) : (
                <div className='basket-image' style={{ background: item.imgColor }}>
                    No Image
                </div>
            )}
            <span className='basket-name'>{item.name}</span>
            <span className='basket-quantity'>{item.quantity}</span>
            <span className='basket-price'>{(item.quantity * item.priceInCents) / 100}</span>
            <span className='basket-remove' onClick={removeItem}>
                X
            </span>
        </div>
    );
}