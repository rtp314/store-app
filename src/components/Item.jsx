import React from "react";

export default function Item({ item }) {
    return (
        <div className='item'>
            {item.imgSrc ? (
                <img className='item-image' src={item.imgSrc} />
            ) : (
                <div className='item-image' style={{ background: item.imgColor }}>
                    No Image
                </div>
            )}
            <div className='item-description'>
                <span className='item-name'>{item.name}</span>
                <span className='item-price'>${item.priceInCents / 100}</span>
            </div>
        </div>
    );
}
