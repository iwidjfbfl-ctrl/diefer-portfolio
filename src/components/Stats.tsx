import { useEffect, useRef, useState } from "react"
import { stats } from "@/data/content"
import { cn } from "@/lib/utils"

function useCountUp(target: number, inView: boolean, duration = 1400) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let frame: number
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, target, duration])

  return count
}

function StatCard({ value, label, index }: { value: number; label: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)
  const count = useCountUp(value, inView)

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
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center border-[3px] border-border bg-card px-4 py-8",
        index > 0 && "border-t-0 sm:border-t-[3px] sm:border-l-0"
      )}
    >
      <span className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl tabular-nums">
        {count}
      </span>
      <span className="mt-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-text/60">
        {label}
      </span>
    </div>
  )
}

export function Stats() {
  return (
    <section className="border-b-[3px] border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 sm:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} value={s.value} label={s.label} index={i} />
        ))}
      </div>
    </section>
  )
}
