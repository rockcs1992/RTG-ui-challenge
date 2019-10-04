import React from 'react';
import { useSelector } from "react-redux";
import { calculateTaxAndTotal, calculateSubtotalAndQuantity } from '../../utils/checkout-helper'
import "../../assets/css/components/cart/cart-checkout.css"


const Checkout = () => {
    const cart = useSelector(state => state.cart)

    const { subtotal, quantity } = calculateSubtotalAndQuantity(cart)
    const { tax, shippingCost, fixedSubtotal, total } = calculateTaxAndTotal(subtotal, quantity)

    return cart.length > 0 && (
        <div id="cart-checkout-wrapper">
          <div>
            <div>subtotal: ${fixedSubtotal}</div>
            <div>tax: ${tax}</div>
            <div>delivery fee: ${shippingCost}</div>
            <div>total: ${total}</div>
          </div>
        </div>
    )
}

export default Checkout