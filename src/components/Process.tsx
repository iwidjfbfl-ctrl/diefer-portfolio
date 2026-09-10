import { processSteps } from "@/data/content"
import { cn } from "@/lib/utils"

export function Process() {
  return (
    <section className="border-b-[3px] border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-stretch border-b-[3px] border-border">
          <div className="hidden items-center justify-center border-r-[3px] border-border px-3 py-5 sm:flex sm:px-5 sm:py-6">
            <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">PROCESS</span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-5 sm:px-6 sm:py-6 md:px-8">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.15em] text-text/50 sm:hidden">PROCESS</p>
            <h2 className="font-display text-[clamp(1.75rem,6vw,3rem)] font-extrabold tracking-[-0.03em]">CÓMO TRABAJO</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <div key={step.number} className={cn("border-b-[3px] border-border px-4 py-6 sm:px-5 sm:py-8", i < 3 && "lg:border-r-[3px]", i % 2 === 0 && "sm:border-r-[3px] lg:border-r-[3px]", i < 2 && "sm:border-b-[3px] lg:border-b-0")}>
              <span className="font-display text-2xl font-extrabold text-red sm:text-3xl">{step.number}</span>
              <h3 className="mt-2 font-display text-base font-bold tracking-tight sm:mt-3 sm:text-lg">{step.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text/70 sm:mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
