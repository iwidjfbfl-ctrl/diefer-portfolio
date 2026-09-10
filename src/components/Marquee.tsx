import { brands } from "@/data/content"

export function Marquee() {
  // Duplicate enough times for seamless infinite scroll
  const items = [...brands, ...brands, ...brands]

  return (
    <div className="overflow-hidden border-b-[3px] border-border bg-muted py-4">
      <div className="flex w-max animate-marquee gap-3">
        {items.map((brand, i) => (
          <span
            key={`${brand}-${i}`}
            className="inline-flex shrink-0 items-center border-[2px] border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-wide whitespace-nowrap"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  )
}
