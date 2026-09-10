import { faqs } from "@/data/content"
import { cn } from "@/lib/utils"

export function FAQ() {
  return (
    <section className="border-b-[3px] border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-stretch border-b-[3px] border-border">
          <div className="flex items-center justify-center border-r-[3px] border-border px-3 py-6 sm:px-5">
            <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">
              FAQ
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-6 sm:px-8">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em]">
              PREGUNTAS
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className={cn(
                "border-b-[3px] border-border px-5 py-6 sm:px-8",
                i % 2 === 0 && "md:border-r-[3px]"
              )}
            >
              <h3 className="font-display text-base font-bold tracking-tight sm:text-lg">
                {faq.question}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
