import React, { useContext } from "react"
import { Context } from "../Context"

import CartItem from "../components/CartItem"

function Cart() {
    const PHOTO_PRICE = 5.99

    const { cartItems } = useContext(Context)
    const totalCost = cartItems.length * PHOTO_PRICE

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    return (
        <div className="cart-page">
            {cartItemElements}
            {totalCost > 0 && <h2>Total Cost: {totalCost}</h2>}
        </div>
    )
}

export default Cart