import React from "react"
import { Link } from "react-router-dom"

import EmptyCart from "remixicon-react/ShoppingCartLineIcon"
import FullCart from "remixicon-react/ShoppingCartFillIcon"

function Header() {
    return (
        <header>
            <Link className="header-link header-link-l" to="/">Mini Shop</Link>
            <Link className="header-link header-link-r" to="/cart">
                <EmptyCart />
            </Link>
        </header>
    )
}

export default Header