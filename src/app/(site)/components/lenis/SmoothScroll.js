"use client"

import { useEffect } from "react"
import Lenis from "lenis"

// Single switch to enable/disable Lenis smooth scrolling for the public site.
// When false, Lenis is never constructed and no RAF loop / listeners are added.
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
