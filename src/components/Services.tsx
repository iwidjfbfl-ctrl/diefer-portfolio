import { services } from "@/data/services"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section id="servicios" className="border-b-[3px] border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-stretch border-b-[3px] border-border">
          <div className="flex items-center justify-center border-r-[3px] border-border px-3 py-6 sm:px-5">
            <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">
              OUR SERVICES
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-6 sm:px-8">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em]">
              SERVICIOS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={cn(
                "group flex items-center gap-4 border-b-[3px] border-border px-4 py-5 transition-colors hover:bg-muted sm:px-6",
                i % 2 === 0 && "md:border-r-[3px]"
              )}
            >
              <span className="font-display text-2xl font-extrabold text-text/30 sm:text-3xl">
                {s.number}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-lg font-bold tracking-tight sm:text-xl">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-text/70">{s.description}</p>
              </div>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center border-[2px] border-border text-lg font-bold transition-all group-hover:bg-text group-hover:text-bg">
                +
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
