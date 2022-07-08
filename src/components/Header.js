import React from "react"
import {Link} from "react-router-dom"

function Header(){
    return (
        <header>
            <Link className="header-link" to="/">Mini Shop</Link>
            <Link className="header-link" to="/cart">Cart</Link>
        </header>
    )
}

export default Header