import { useEffect } from "react"

export default function Axg() {
    useEffect(() => {
        sessionStorage.setItem('axgRegisteredFunctionsDone', JSON.stringify([]))
        sessionStorage.setItem('axgRegisteredFunctions', JSON.stringify([]))
        
        setTimeout(() => {implementScripts()}, 1000)
        setTimeout(() => {implementScripts()}, 2500)
        setTimeout(() => {implementScripts()}, 3200)
    }, [])
    return <></>
}