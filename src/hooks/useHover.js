import { useState, useEffect, useRef } from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const mouseIsOverCard = () => setHovered(true)
    const mouseIsNotOverCard = () => setHovered(false)

    useEffect(() => {
        ref.current.addEventListener("mouseenter", mouseIsOverCard)
        ref.current.addEventListener("mouseleave", mouseIsNotOverCard)

        return () => {
            ref.current.addEventListener("mouseenter", mouseIsOverCard)
            ref.current.addEventListener("mouseleave", mouseIsNotOverCard)
        }
    }, [])

    return [hovered, ref]
}

export default useHover