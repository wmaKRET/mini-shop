import React, { useContext } from "react"

import { Context } from "../Context"
import useHover from "../hooks/useHover"

import HeartAddLine from "remixicon-react/HeartAddLineIcon"
import HeartFill from "remixicon-react/HeartFillIcon"
import EmptyCart from "remixicon-react/ShoppingCartLineIcon"
import FullCart from "remixicon-react/ShoppingCartFillIcon"

function Image({ img }) {
    const [hovered, ref] = useHover()
    const { cartItems, toggleFav, addToCart, deleteFromCart } = useContext(Context)

    function favHeartIcon() {
        if (img.isFavorite) return <HeartFill className="card-fav fav-off" onClick={() => toggleFav(img.id)} />
        else if (hovered) return <HeartAddLine className="card-fav fav-on" onClick={() => toggleFav(img.id)} />
    }

    function cartIcon() {
        const photosInCart = cartItems.some(item => item.id === img.id)
        if (photosInCart) return <FullCart className="card-cart cart-full" onClick={() => deleteFromCart(img.id)} />
        else if (hovered) return <EmptyCart className="card-cart cart-empty" onClick={() => addToCart(img)} />
    }

    return (
        <div
            className="card"
            ref={ref}
        >
            <img src={img.url} className="card-image" />
            {favHeartIcon()}
            {cartIcon()}
        </div>
    )
}

export default Image