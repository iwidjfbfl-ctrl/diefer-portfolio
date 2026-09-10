import { testimonials } from "@/data/content"
import { cn } from "@/lib/utils"

export function Testimonials() {
  return (
    <section className="border-b-[3px] border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-stretch border-b-[3px] border-border">
          <div className="flex items-center justify-center border-r-[3px] border-border px-3 py-6 sm:px-5">
            <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">
              CLIENTS
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-6 sm:px-8">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em]">
              TESTIMONIOS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className={cn(
                "border-b-[3px] border-border px-5 py-8 sm:px-8",
                i % 2 === 0 && "md:border-r-[3px]",
                i < 2 && "md:border-b-[3px]"
              )}
            >
              <p className="text-sm italic leading-relaxed text-text/80 sm:text-base">
                “{t.quote}”
              </p>
              <div className="mt-5">
                <div className="font-display text-sm font-bold">{t.author}</div>
                <div className="text-xs text-text/50">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
