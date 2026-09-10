import { services } from "@/data/services"
import { cn } from "@/lib/utils"

export function Services() {
  return (
    <section id="servicios" className="border-b-[3px] border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-stretch border-b-[3px] border-border">
          <div className="hidden items-center justify-center border-r-[3px] border-border px-3 py-5 sm:flex sm:px-5 sm:py-6">
            <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">OUR SERVICES</span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-5 sm:px-6 sm:py-6 md:px-8">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text/50 sm:hidden">OUR SERVICES</p>
            <h2 className="font-display text-[clamp(1.75rem,6vw,3rem)] font-extrabold tracking-[-0.03em]">SERVICIOS</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {services.map((s, i) => (
            <div key={s.id} className={cn("group flex items-start gap-3 border-b-[3px] border-border px-4 py-4 transition-colors active:bg-muted hover:bg-muted sm:items-center sm:gap-4 sm:px-5 sm:py-5 md:px-6", i % 2 === 0 && "md:border-r-[3px]")}>
              <span className="font-display shrink-0 text-xl font-extrabold text-text/30 sm:text-2xl md:text-3xl">{s.number}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display text-base font-bold tracking-tight sm:text-lg md:text-xl">{s.title}</h3>
                <p className="mt-0.5 text-sm text-text/70 sm:mt-1">{s.description}</p>
              </div>
              <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center border-[2px] border-border text-lg font-bold transition-all group-hover:bg-text group-hover:text-bg sm:mt-0">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
