import { useEffect } from "react"
import { loadScript, axgCdnHAndler } from "../../lib/script"

export default function ActivationHandler() {
  useEffect(() => {
    loadScript(`${process.env.LocalAxg}/layoutactivationJs`)
    .then(() => activationHandler.init())
  }, [])
  return '';
}