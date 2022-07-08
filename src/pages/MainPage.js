import React, { useContext } from "react"

import { Context } from "../Context"
import Image from "../components/Image"

function MainPage() {
    const { photos } = useContext(Context)

    const photoElements = photos.map(photo => (
        <Image key={photo.id} img={photo} />
    ))

    return (
        <main className="main-page">
            {photoElements}
        </main>
    )
}

export default MainPage