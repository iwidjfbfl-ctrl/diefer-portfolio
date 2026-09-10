import type { MouseEvent } from "react"

export function scrollToSection(id: string, options?: { offset?: number }) {
  const targetId = id.replace(/^#/, "")
  const el = document.getElementById(targetId)
  if (!el) return
  const offset = options?.offset ?? 72
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: "smooth" })
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search)
  }
}

export function createNavClickHandler(id: string, onNavigate?: () => void) {
  return (e: MouseEvent) => {
    e.preventDefault()
    scrollToSection(id)
    onNavigate?.()
  }
}

export function initCleanNavigation() {
  if (typeof window === "undefined") return
  if (window.location.hash) {
    window.history.replaceState(null, "", window.location.pathname + window.location.search)
  }
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual"
  }
}
