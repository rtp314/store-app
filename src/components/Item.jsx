import React, { useContext } from "react";
import { BasketContext } from "../lib/BasketContext";

export default function Item({ item }) {
    const { dispatch } = useContext(BasketContext);

    return (
        <div className='item'>
            {item.imgSrc ? (
                <img className='item-image' src={item.imgSrc} />
            ) : (
                <div className='item-image' style={{ background: item.imgColor }}>
                    No Image
                </div>
            )}
            <div className='item-description flex-row'>
                <div className='flex-column'>
                    <span className='item-name'>{item.name}</span>
                    <span className='item-price'>${item.priceInCents / 100}</span>
                </div>
                <div className='flex-column'>
                    <button onClick={() => dispatch({ type: "add", item })} className='btn btn-primary'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}
