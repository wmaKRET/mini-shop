import React, { useContext } from "react"

import { Context } from "../Context"
import useHover from "../hooks/useHover"

import HeartAddLine from "remixicon-react/HeartAddLineIcon"
import HeartFill from "remixicon-react/HeartFillIcon"

function Image({ img }) {
    const [hovered, ref] = useHover()
    const { toggleFav } = useContext(Context)

    function favHeartIcon() {
        if (img.isFavorite) return <HeartFill className="card-fav fav-off" onClick={() => toggleFav(img.id)} />
        else if (hovered) return <HeartAddLine className="card-fav fav-on" onClick={() => toggleFav(img.id)} />
    }

    return (
        <div
            className="card"
            ref={ref}
        >
            <img src={img.url} className="card-image" />
            {favHeartIcon()}
        </div>
    )
}

export default Image