import React, { useState, useContext } from "react"
import { Context } from "../Context"

import CartItem from "../components/CartItem"
import { clear } from "@testing-library/user-event/dist/clear"

function Cart() {
    const PHOTO_PRICE = 5.99

    const [buttonText, setButtonText] = useState('Place Order')
    const { cartItems, clearCart } = useContext(Context)
    const totalCost = cartItems.length * PHOTO_PRICE

    function placeOrder(){
        setButtonText('Ordering...')
        setTimeout(() => {
            console.log('Order placed!')
            setButtonText('Place Order')
            clearCart()
        }, 3000)
    }

    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item}/>
    ))
    return (
        <div className="cart-page">
            {cartItemElements}
            {totalCost > 0 && <h2>Total Cost: {totalCost}</h2>}
            {cartItems.length < 1 
                ? <p>You have no items in cart.</p>
                : <button 
                    className="cart-button" 
                    onClick={placeOrder}
                >{buttonText}</button>
            }
        </div>
    )
}

export default Cart