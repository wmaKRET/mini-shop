import React, { useContext } from "react"
import { Context } from "../Context"

import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems } = useContext(Context)

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    return (
        <div className="cart-page">
            {cartItemElements}
        </div>
    )
}

export default Cart