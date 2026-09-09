"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export const ENABLE_LENIS = true

export default function SmoothScroll() {
  useEffect(() => {
    if (!ENABLE_LENIS) return

    const lenis = new Lenis({
      autoRaf: true,
    })

    return () => {
      lenis.destroy()
    }
  }, [])

  return null
}
