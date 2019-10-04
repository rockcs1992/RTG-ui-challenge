import React from 'react';
import { useDispatch } from "react-redux";
import {
    removeCartItem,
    subtractItemQuantity,
    addItemQuantity
} from '../../state/action-creators'
import { toFixed } from '../../utils/checkout-helper'
import "../../assets/css/components/cart/cart-item.css"

const CartItem = ({
    item: {
        image,
        title,
        price,
        quantity,
        sku
    }
}) => {
    const dispatch = useDispatch()
    return (
        <div className="product cell small-12 grid-x grid-margin-x">
            <img src={ image } alt={ title } />
            <div className="product-title cell small-4">{ title }</div>
            <div className="product-price cell small-2">${ toFixed(price * quantity) }</div>
            <button className="product-price cell small-1 cart-quantity" onClick={() => dispatch(subtractItemQuantity(sku))}>-</button>
            <div className="product-price cell small-1 cart-quantity">{quantity}</div>
            <button className="product-price cell small-1 cart-quantity" onClick={() => dispatch(addItemQuantity(sku))}>+</button>
            <button className="cart-remove" onClick={() => dispatch(removeCartItem(sku))}>remove</button>
        </div>
    )
}

export default CartItem