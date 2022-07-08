import React from "react"
import {Link} from "react-router-dom"
import EmptyCart from "remixicon-react/ShoppingCartLineIcon"
import fullCart from "remixicon-react/ShoppingCartFillIcon"

function Header(){
    return (
        <header>
            <Link className="header-link" to="/">Mini Shop</Link>
            <Link className="header-link" to="/cart">
                <EmptyCart />
            </Link>
        </header>
    )
}

export default Header