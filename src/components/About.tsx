import { cn } from "@/lib/utils"

export function About() {
  return (
    <section id="sobre-mi" className="border-b-[3px] border-border bg-text text-bg">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between border-b-[3px] border-bg/20 px-4 py-10 sm:px-6 lg:border-b-0 lg:border-r-[3px] lg:px-10 lg:py-16">
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-bg/50">
              01 / INTRO
            </span>
            <h2 className="mt-3 font-display text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              SOBRE
              <br />
              MÍ
            </h2>
          </div>
          <p className="mt-8 max-w-xs text-sm text-bg/60 lg:mt-0">
            18 años · Estudiante ASIX · Vallirana (Barcelona)
          </p>
        </div>

        <div className="px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
          <blockquote className="border-l-[3px] border-yellow pl-4 text-lg font-medium leading-snug sm:text-xl">
            “No solo arreglo ordenadores: diseño infraestructura, protejo redes y
            creo soluciones que hacen crecer negocios.”
          </blockquote>

          <div className="mt-8 space-y-4 text-sm leading-relaxed text-bg/80 sm:text-base">
            <p>
              Soy Diefer Rodríguez, técnico informático y estudiante de ASIX. Trabajo
              con servidores cloud y locales, firewalls, Docker, Proxmox, desarrollo
              web full-stack, hardening y redes.
            </p>
            <p>
              Combino estrategia, diseño y tecnología para crear experiencias
              digitales y sistemas que desafían lo ordinario y entregan impacto real.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            <MetaBox label="Ubicación" value="Vallirana · 08759 · Barcelona" />
            <a href="https://wa.me/34692048741" target="_blank" rel="noopener noreferrer" className="block">
              <MetaBox label="WhatsApp" value="+34 692 04 87 41" interactive />
            </a>
            <a href="https://www.linkedin.com/in/diefer-raúl-rodriguez-amaya-2b0359286" target="_blank" rel="noopener noreferrer" className="block">
              <MetaBox label="LinkedIn" value="diefer-raúl-rodriguez" interactive />
            </a>
            <a href="https://www.instagram.com/dieferrrrr.sh" target="_blank" rel="noopener noreferrer" className="block">
              <MetaBox label="Instagram" value="@dieferrrrr.sh" interactive />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetaBox({ label, value, interactive }: { label: string; value: string; interactive?: boolean }) {
  return (
    <div className={cn("border-[3px] border-bg/20 px-4 py-3 transition-colors", interactive && "hover:border-yellow hover:bg-bg/5")}>
      <div className="text-[10px] font-semibold uppercase tracking-wider text-bg/50">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  )
}
