import { useEffect } from "react"

export default function Axg() {
    useEffect(() => {
        setTimeout(() => {implementScripts()}, 1000)
        setTimeout(() => {implementScripts()}, 2500)
    }, [])
    return <></>
}