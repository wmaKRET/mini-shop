import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { Context } from "../Context"

import EmptyCart from "remixicon-react/ShoppingCartLineIcon"
import FullCart from "remixicon-react/ShoppingCartFillIcon"

function Header() {
    const {cartItems} = useContext(Context)

    return (
        <header>
            <Link className="header-link header-link-l" to="/">Mini Shop</Link>
            <Link className="header-link header-link-r" to="/cart">
                {cartItems.length > 0 && <FullCart />}
                {cartItems.length === 0 && <EmptyCart />}
            </Link>
        </header>
    )
}

export default Header