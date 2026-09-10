import { createNavClickHandler } from "@/lib/navigation"

export function StripBar() {
  return (
    <div className="border-b-[3px] border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 sm:grid-cols-[auto_1fr_auto]">
        <div className="flex items-center justify-center border-b-[3px] border-border px-4 py-3 sm:border-b-0 sm:border-r-[3px]">
          <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">
            (2026)
          </span>
        </div>

        <div className="flex items-center justify-center border-b-[3px] border-border px-4 py-4 text-center sm:border-b-0 sm:border-r-[3px] sm:px-8">
          <p className="font-display text-sm font-bold uppercase tracking-wide sm:text-base md:text-lg">
            NO SEGUIMOS TENDENCIAS. DEFINIMOS DIRECCIONES.
          </p>
        </div>

        <a
          href="#contacto"
          onClick={createNavClickHandler("contacto")}
          className="flex items-center justify-center gap-2 bg-yellow px-6 py-4 text-xs font-bold uppercase tracking-wider text-black transition-opacity hover:opacity-90"
        >
          DISPONIBLE PARA PROYECTOS
          <span className="inline-block h-2 w-2 rounded-full bg-black" />
        </a>
      </div>
    </div>
  )
}
