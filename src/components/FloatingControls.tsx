import { useEffect, useState } from "react"
import { useTheme } from "@/hooks/useTheme"
import { cn } from "@/lib/utils"
import { Moon, Sun, ArrowUp } from "lucide-react"

export function FloatingControls() {
  const { theme, toggleTheme, mounted } = useTheme()
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 300)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2">
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
        className={cn(
          "flex h-11 w-11 items-center justify-center border-[3px] border-border bg-card",
          "shadow-brutal transition-all duration-150 hover:shadow-brutal-hover"
        )}
      >
        {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
      </button>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Volver arriba"
          className={cn(
            "flex h-11 w-11 items-center justify-center border-[3px] border-border bg-card",
            "shadow-brutal transition-all duration-150 hover:shadow-brutal-hover"
          )}
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  )
}
