import { createNavClickHandler } from "@/lib/navigation"

export function StripBar() {
  return (
    <div className="border-b-[3px] border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-[auto_1fr_auto]">
        <div className="hidden items-center justify-center border-b-[3px] border-border px-3 py-2 sm:flex sm:border-b-0 sm:border-r-[3px] sm:px-4 sm:py-3">
          <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">(2026)</span>
        </div>
        <div className="flex items-center justify-center border-b-[3px] border-border px-4 py-3 text-center sm:border-b-0 sm:border-r-[3px] sm:px-6 sm:py-4">
          <p className="font-display text-xs font-bold uppercase leading-snug tracking-wide sm:text-sm md:text-base lg:text-lg">
            <span className="text-text/40 sm:hidden">2026 · </span>
            NO SEGUIMOS TENDENCIAS. DEFINIMOS DIRECCIONES.
          </p>
        </div>
        <a href="#contacto" onClick={createNavClickHandler("contacto")} className="flex items-center justify-center gap-2 bg-yellow px-4 py-3.5 text-[11px] font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90 sm:px-6 sm:py-4 sm:text-xs">
          DISPONIBLE PARA PROYECTOS
          <span className="inline-block h-2 w-2 shrink-0 rounded-full bg-black" />
        </a>
      </div>
    </div>
  )
}
