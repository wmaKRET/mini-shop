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

    return (
        <Context.Provider
            value= {{
                photos
            }}
        >
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}