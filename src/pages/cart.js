import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import CartItem from "../components/cart/cart-item"
import Checkout from "../components/cart/cart-checkout"

import { useSelector } from "react-redux";


const Cart = () => {
  const cart = useSelector(state => state.cart)  
  return (
    <Layout>
      <SEO title="Cart" />
      <h1>Cart</h1>
      {cart.length ? cart.map((item, index) => <CartItem key={index} item={item} />) :
        <div>Your cart is currently empty</div>
      }
      <Checkout />
    </Layout>
  )
}

export default Cart
