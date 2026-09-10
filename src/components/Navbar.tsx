import { useState } from "react"
import { createNavClickHandler } from "@/lib/navigation"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

const links = [
  { id: "inicio", label: "INICIO" },
  { id: "sobre-mi", label: "SOBRE MÍ" },
  { id: "proyectos", label: "PROYECTOS" },
  { id: "servicios", label: "SERVICIOS" },
  { id: "contacto", label: "CONTACTO" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-border bg-bg">
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#inicio" onClick={createNavClickHandler("inicio", close)} className="font-display shrink-0 text-xl font-extrabold tracking-tight sm:text-2xl">DIEFER.</a>
        <div className="hidden items-center gap-5 md:flex lg:gap-8">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} onClick={createNavClickHandler(link.id)} className="text-[11px] font-medium uppercase tracking-[0.12em] text-text/80 transition-colors hover:text-text">{link.label}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a href="#contacto" onClick={createNavClickHandler("contacto", close)} className={cn("inline-flex items-center gap-1 border-[3px] border-border bg-yellow px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wide text-black sm:gap-1.5 sm:px-4 sm:text-xs", "shadow-brutal transition-all duration-150 hover:shadow-brutal-hover")}>
            <span className="hidden sm:inline">START A PROJECT</span>
            <span className="sm:hidden">PROYECTO</span>
            <span aria-hidden>↗</span>
          </a>
          <button type="button" className="flex h-10 w-10 items-center justify-center border-[3px] border-border bg-card md:hidden" onClick={() => setOpen((v) => !v)} aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t-[3px] border-border bg-bg md:hidden">
          <div className="flex flex-col">
            {links.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={createNavClickHandler(link.id, close)} className="border-b-[2px] border-border px-4 py-3.5 text-sm font-bold uppercase tracking-[0.1em] active:bg-muted">{link.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
