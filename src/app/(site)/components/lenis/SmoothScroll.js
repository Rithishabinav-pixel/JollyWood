"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import Lenis from "lenis"

export const ENABLE_LENIS = true

let lenisInstance = null

export function getLenisInstance() {
  return lenisInstance
}

export default function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    if (!ENABLE_LENIS) return

    const lenis = new Lenis({
      autoRaf: true,
    })

    lenisInstance = lenis

    return () => {
      lenis.destroy()
      lenisInstance = null
    }
  }, [])

  useEffect(() => {
    if (!ENABLE_LENIS) return
    if (!lenisInstance) return

    lenisInstance.scrollTo(0, { immediate: true })
  }, [pathname])

  return null
}
