import { projects } from "@/data/projects"
import { cn } from "@/lib/utils"

function ProjectRow({ project }: { project: (typeof projects)[0] }) {
  const screenshotUrl = `https://image.thum.io/get/width/900/crop/560/noanimate/${project.url}`
  const fallback = `https://placehold.co/900x560/18181b/ffffff?text=${encodeURIComponent(project.title)}`

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group grid border-b-[3px] border-border transition-colors hover:bg-muted/50",
        "grid-cols-1 md:grid-cols-[80px_1fr_minmax(240px,360px)]"
      )}
    >
      <div className="flex items-start border-b-[3px] border-border px-4 py-5 md:border-b-0 md:border-r-[3px] md:px-6">
        <span className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
          {project.number}
        </span>
      </div>

      <div className="flex flex-col justify-center border-b-[3px] border-border px-4 py-5 md:border-b-0 md:border-r-[3px] md:px-6">
        <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-text/50">
          {project.type}
        </span>
        <h3 className="mt-1 font-display text-xl font-bold tracking-tight sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-2 max-w-md text-sm text-text/70">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-border/40 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-text/60">
              {tag}
            </span>
          ))}
        </div>
        <span className="mt-3 inline-flex w-fit items-center border-[2px] border-border bg-yellow px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-black">
          {project.result}
        </span>
      </div>

      <div className="relative hidden overflow-hidden md:block min-h-[180px]">
        <img
          src={screenshotUrl}
          alt={`Captura de ${project.title}`}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          onError={(e) => {
            const img = e.currentTarget
            if (img.src !== fallback) img.src = fallback
          }}
        />
        <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center border-[2px] border-border bg-bg text-sm font-bold opacity-0 transition-opacity group-hover:opacity-100">
          ↗
        </span>
      </div>
    </a>
  )
}

export function Projects() {
  return (
    <section id="proyectos" className="border-b-[3px] border-border">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-stretch border-b-[3px] border-border">
          <div className="flex items-center justify-center border-r-[3px] border-border px-3 py-6 sm:px-5">
            <span className="vertical-label text-[10px] font-bold uppercase tracking-[0.2em] text-text/50">
              SELECTED WORK
            </span>
          </div>
          <div className="flex flex-1 flex-col justify-center px-4 py-6 sm:px-8">
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.03em]">
              PROYECTOS
            </h2>
            <p className="mt-1 text-sm text-text/60">Trabajos reales con resultados medibles.</p>
          </div>
        </div>

        <div>
          {projects.map((p) => (
            <ProjectRow key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
