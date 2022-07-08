import React, { useContext } from "react"
import HeartAddLine from "remixicon-react/HeartAddLineIcon"
import HeartFill from "remixicon-react/HeartFillIcon"
import { Context } from "../Context"

function Image({ img }) {
    const { toggleFav } = useContext(Context)

    console.log(img.isFavorite)
    function favHeartIcon(){
        return img.isFavorite
            ? <HeartFill className="card-fav" onClick={() => toggleFav(img.id)}/>
            : <HeartAddLine className="card-fav" onClick={() => toggleFav(img.id)}/>
    }

    return (
        <div className="card">
            <img src={img.url} className="card-image" />
            {favHeartIcon()}
        </div>
    )
}

export default Image