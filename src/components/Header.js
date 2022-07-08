import React from "react"
import {Link} from "react-router-dom"

function Header(){
    return (
        <header>
            <Link to="/">Mini Shop</Link>
            <Link to="/cart">Cart</Link>
        </header>
    )
}

export default Header