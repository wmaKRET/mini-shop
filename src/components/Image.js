import React from "react"

function Image({img}){
    return (
        <div className="img-container">
            <img src={img.url} className="img-image"/>
        </div>
    )
}

export default Image