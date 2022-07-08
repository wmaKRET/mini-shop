import React, { useState, useEffect } from "react"

const Context = React.createContext()

function ContextProvider({ children }) {
    const URL = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setPhotos(data))
            .catch(error => console.log(error))
    }, [])

    function toggleFav(id) {
        const updatedPhotos = photos.map(photo => photo.id === id
            ? { ...photo, isFavorite: !photo.isFavorite }
            : photo)
        setPhotos(updatedPhotos)
    }

    function addToCart(newItem){
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function deleteFromCart(itemID){
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemID))
    }

    return (
        <Context.Provider
            value={{
                photos,
                cartItems,
                toggleFav,
                addToCart,
                deleteFromCart
            }}
        >
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }