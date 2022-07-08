import React, {useState, useEffect} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error))
    }, [])

    function toggleFav(id){
        const updatedPhotos = photos.map(photo => photo.id === id
                                ? {...photo, isFavorite: !photo.isFavorite}
                                : photo)
        setPhotos(updatedPhotos)
    }

    return (
        <Context.Provider
            value= {{
                photos,
                toggleFav
            }}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}