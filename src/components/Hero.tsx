import { createNavClickHandler } from "@/lib/navigation"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section id="inicio" className="border-b-[3px] border-border">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col justify-center border-b-[3px] border-border px-4 py-10 sm:px-6 sm:py-14 lg:border-b-0 lg:border-r-[3px] lg:px-10 lg:py-16">
          <div className="mb-6 flex items-center gap-2">
            <span className="inline-block h-3 w-3 bg-yellow" />
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-text/70">
              Estudiante ASIX · Técnico Informático
            </span>
          </div>

          <h1 className="font-display text-[clamp(2.8rem,7vw,5.8rem)] font-extrabold leading-[0.92] tracking-[-0.04em]">
            DISEÑAMOS
            <br />
            SOLUCIONES
            <br />
            SIN REGLAS.
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-text/80 sm:text-base">
            Convierto problemas complejos en sistemas que funcionan: webs, redes,
            seguridad y automatización para que tu negocio crezca sin fricción.
          </p>

          <div className="mt-5 flex flex-wrap gap-2 text-[11px] font-semibold uppercase tracking-wider text-text/60">
            <span>WEB</span>
            <span>·</span>
            <span>REDES</span>
            <span>·</span>
            <span>SEGURIDAD</span>
            <span>·</span>
            <span>AUTOMATIZACIÓN</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proyectos"
              onClick={createNavClickHandler("proyectos")}
              className={cn(
                "inline-flex items-center gap-2 border-[3px] border-border bg-text px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-bg",
                "shadow-brutal transition-all duration-150 hover:shadow-brutal-hover"
              )}
            >
              VER PROYECTOS
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contacto"
              onClick={createNavClickHandler("contacto")}
              className={cn(
                "inline-flex items-center gap-2 border-[3px] border-border bg-yellow px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-black",
                "shadow-brutal transition-all duration-150 hover:shadow-brutal-hover"
              )}
            >
              HABLEMOS
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        <div className="relative min-h-[260px] bg-muted lg:min-h-[420px]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#1a1a1a_0%,#0a0a0a_50%,#222_100%)]">
            <div className="absolute inset-0 opacity-40">
              <div className="absolute left-1/4 top-1/4 h-32 w-32 border-[3px] border-white/20" />
              <div className="absolute bottom-1/3 right-1/4 h-24 w-24 border-[3px] border-yellow/30" />
              <div className="absolute right-10 top-10 h-16 w-16 bg-yellow/20" />
              <div className="absolute bottom-16 left-10 h-2 w-40 bg-white/10" />
            </div>
          </div>

          <div className="absolute right-4 top-4 border-[3px] border-border bg-yellow px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-black">
            AVAILABLE
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between border-t-[3px] border-border bg-bg/95 px-4 py-3 text-[10px] font-medium uppercase tracking-wider backdrop-blur-sm sm:text-xs">
            <span className="font-display font-bold">DIEFER.ES</span>
            <span className="text-text/70">VALLIRANA · BARCELONA | 18 AÑOS</span>
          </div>
        </div>
      </div>
    </section>
  )
}
