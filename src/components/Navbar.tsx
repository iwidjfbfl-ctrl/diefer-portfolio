import { createNavClickHandler } from "@/lib/navigation"
import { cn } from "@/lib/utils"

const links = [
  { id: "inicio", label: "INICIO" },
  { id: "sobre-mi", label: "SOBRE MÍ" },
  { id: "proyectos", label: "PROYECTOS" },
  { id: "servicios", label: "SERVICIOS" },
  { id: "contacto", label: "CONTACTO" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-border bg-bg">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-4 sm:px-6">
        <a
          href="#inicio"
          onClick={createNavClickHandler("inicio")}
          className="font-display text-xl font-extrabold tracking-tight sm:text-2xl"
        >
          DIEFER.
        </a>

        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={createNavClickHandler(link.id)}
              className="text-[11px] font-medium uppercase tracking-[0.12em] text-text/80 transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contacto"
          onClick={createNavClickHandler("contacto")}
          className={cn(
            "inline-flex items-center gap-1.5 border-[3px] border-border bg-yellow px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-black",
            "shadow-brutal transition-all duration-150 hover:shadow-brutal-hover sm:px-4 sm:text-xs"
          )}
        >
          START A PROJECT
          <span aria-hidden>↗</span>
        </a>
      </nav>
    </header>
  )
}
