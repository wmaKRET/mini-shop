import { useState, useEffect, useRef } from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    const mouseIsOverCard = () => setHovered(true)
    const mouseIsNotOverCard = () => setHovered(false)

    useEffect(() => {
        const node = ref.current
        if (node) {
            node.addEventListener("mouseenter", mouseIsOverCard)
            node.addEventListener("mouseleave", mouseIsNotOverCard)
    
            return () => {
                node.addEventListener("mouseenter", mouseIsOverCard)
                node.addEventListener("mouseleave", mouseIsNotOverCard)
            }
        }
    }, [])

    return [hovered, ref]
}

export default useHover