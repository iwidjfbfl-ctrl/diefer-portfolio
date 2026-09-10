import { useState, type FormEvent } from "react"
import { cn } from "@/lib/utils"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    if (!data.get("consent")) {
      setStatus("error")
      setMessage("Debes aceptar la política de privacidad.")
      return
    }

    setStatus("loading")
    setMessage("")

    // Mock success for v1 (no real backend)
    await new Promise((r) => setTimeout(r, 800))
    setStatus("success")
    setMessage("¡Mensaje recibido! Te responderé en menos de 24h.")
    form.reset()
  }

  return (
    <section id="contacto" className="border-b-[3px] border-border">
      <div className="mx-auto grid max-w-[1400px] lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col justify-between bg-red px-6 py-12 text-white sm:px-10 lg:py-16">
          <div>
            <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              LET'S CREATE
              <br />
              SOMETHING
              <br />
              DIFFERENT.
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/80">
              Cuéntame tu idea, problema o proyecto. Respondo en menos de 24h.
            </p>
          </div>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
            VALLIRANA · BARCELONA
          </p>
        </div>

        <div className="px-4 py-10 sm:px-8 lg:px-10 lg:py-16">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text/60">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                type="text"
                className="w-full border-[3px] border-border bg-card px-4 py-3 text-sm outline-none focus:border-yellow"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text/60">
                Email
              </label>
              <input
                id="email"
                name="email"
                required
                type="email"
                className="w-full border-[3px] border-border bg-card px-4 py-3 text-sm outline-none focus:border-yellow"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wider text-text/60">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full resize-none border-[3px] border-border bg-card px-4 py-3 text-sm outline-none focus:border-yellow"
                placeholder="Cuéntame qué necesitas..."
              />
            </div>

            <label className="flex items-start gap-3 text-sm text-text/70">
              <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-yellow" />
              <span>
                Acepto la política de privacidad y el tratamiento de mis datos para responder a esta consulta.
              </span>
            </label>

            <button
              type="submit"
              disabled={status === "loading"}
              className={cn(
                "inline-flex items-center gap-2 border-[3px] border-border bg-text px-6 py-3 text-xs font-bold uppercase tracking-wide text-bg",
                "shadow-brutal transition-all duration-150 hover:shadow-brutal-hover disabled:opacity-60"
              )}
            >
              {status === "loading" ? "ENVIANDO..." : "ENVIAR MENSAJE"}
              <span aria-hidden>→</span>
            </button>

            {message && (
              <p className={cn("text-sm", status === "success" ? "text-green-600 dark:text-green-400" : "text-red")}>
                {message}
              </p>
            )}
          </form>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="https://wa.me/34692048741" target="_blank" rel="noopener noreferrer" className="border-[2px] border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide hover:bg-muted">
              WhatsApp
            </a>
            <a href="mailto:tba@diefer.es" className="border-[2px] border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide hover:bg-muted">
              tba@diefer.es
            </a>
            <a href="https://www.linkedin.com/in/diefer-raúl-rodriguez-amaya-2b0359286" target="_blank" rel="noopener noreferrer" className="border-[2px] border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide hover:bg-muted">
              LinkedIn
            </a>
            <a href="https://www.instagram.com/dieferrrrr.sh" target="_blank" rel="noopener noreferrer" className="border-[2px] border-border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide hover:bg-muted">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
