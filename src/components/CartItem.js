import React from "react"

import useHover from "../hooks/useHover"

import BinEmpty from "remixicon-react/DeleteBinLineIcon"
import BinFull from "remixicon-react/DeleteBinFillIcon"

function CartItem({ item }){
    const [hovered, ref] = useHover()
    
    function binIcon(){
        return hovered ? <BinFull /> : <BinEmpty />
    }

    return (
        <div className="cart-item">
            <div className="cart-bin" ref={ref}>
                {binIcon()}
            </div>
            <img src={item.url} className="cart-image" />
            <h4 className="cart-price">$5.99</h4>
        </div>
    )
}

export default CartItem