import React from "react"

function Image({img}){
    return (
        <div className="card">
            <img src={img.url} className="card-image"/>
        </div>
    )
}

export default Image