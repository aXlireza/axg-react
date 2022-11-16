import { useEffect } from "react"
import { loadScript } from "../../lib/script"

export default function ActivationHandler() {
  useEffect(() => {
    loadScript(`${process.env.BetaAxg}/layoutactivationJs`)
    .then(() => activationHandler.init())
  }, [])
  return '';
}