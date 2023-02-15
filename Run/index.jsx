import { useEffect } from "react"

export default function Axg() {
    useEffect(() => {
        setTimeout(() => {
            implementScripts()
        }, 2000)
    }, [])
    return <></>
}