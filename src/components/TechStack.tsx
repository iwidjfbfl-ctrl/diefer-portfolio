import { useEffect, useRef, useState } from "react"
import { techStack } from "@/data/tech"
import { cn } from "@/lib/utils"

function TechBar({ item, inView }: { item: (typeof techStack)[0]; inView: boolean }) {
  return (
    <div className="p-4">
      <div className="flex items-baseline justify-between gap-2">
        <span className="font-display text-sm font-bold">{item.name}</span>
        <span className="text-[10px] font-medium uppercase tracking-wider text-text/50 shrink-0">
          {item.category}
        </span>
      </div>
      <div className="mt-3 h-2 w-full overflow-hidden border border-border/30 bg-muted">
        <div
          className="h-full bg-yellow transition-all duration-1000 ease-out"
          style={{ width: inView ? `${item.percentage}%` : "0%" }}
        />
      </div>
      <div className="mt-1 text-right text-xs font-semibold text-text/60 tabular-nums">
        {item.percentage}%
      </div>
    </div>
  )
}

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="border-b-[3px] border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-stretch border-b-[3px] border-border">
          <div className="flex items-center justify-center border-r-[3px] border-border px-3 py-6 sm:px-5">
            <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">
              STACK
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-6 sm:px-8">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em]">
              TECNOLOGÍAS
            </h2>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          {techStack.map((item, i) => (
            <div
              key={item.name}
              className={cn(
                "border-b-[3px] border-border sm:border-r-[3px]",
                (i + 1) % 5 === 0 && "lg:border-r-0",
                (i + 1) % 2 === 0 && "sm:border-r-0 lg:border-r-[3px]",
                i >= 5 && "lg:border-b-0"
              )}
            >
              <TechBar item={item} inView={inView} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
