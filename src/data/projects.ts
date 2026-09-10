export interface Project {
  id: number
  number: string
  title: string
  url: string
  type: "EMPRESA" | "PERSONAL" | "HERRAMIENTA" | "EMPRESA PROPIA"
  tags: string[]
  description: string
  result: string
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    title: "LabTec Informatics",
    url: "https://labtecinformatics.com",
    type: "EMPRESA",
    tags: ["SEO local", "Corporativo", "WordPress"],
    description: "Web corporativa con SEO local optimizado para empresa de informática.",
    result: "SEO local · Corporativo",
  },
  {
    id: 2,
    number: "02",
    title: "Hogar y Reforma",
    url: "https://hogar-reforma.com",
    type: "EMPRESA",
    tags: ["Lead generation", "SEO local", "WordPress"],
    description: "Sitio de captación de leads para reformas y hogar.",
    result: "Lead gen · SEO local",
  },
  {
    id: 3,
    number: "03",
    title: "José Luis Lama",
    url: "https://joseluislama.com",
    type: "EMPRESA",
    tags: ["Personal branding", "Astro", "SEO"],
    description: "Personal branding y presencia online con Astro.",
    result: "Branding · Astro",
  },
  {
    id: 4,
    number: "04",
    title: "Autoescuela Cruce",
    url: "https://cruce.agent4bizz.com",
    type: "EMPRESA",
    tags: ["Autoescuela", "Astro", "Local SEO"],
    description: "Web para autoescuela con SEO local y diseño moderno.",
    result: "Local SEO · Astro",
  },
  {
    id: 5,
    number: "05",
    title: "Formatges Molins",
    url: "https://formatges.agent4bizz.com",
    type: "EMPRESA",
    tags: ["Alimentación", "Producto", "Branding"],
    description: "E-commerce y branding para productor de quesos.",
    result: "Producto · Branding",
  },
  {
    id: 6,
    number: "06",
    title: "La Revolta Restaurant",
    url: "https://4101.agent4bizz.com",
    type: "EMPRESA",
    tags: ["Restaurante", "Hostelería", "Diseño"],
    description: "Sitio web para restaurante con menú y reservas.",
    result: "Hostelería · Diseño",
  },
  {
    id: 7,
    number: "07",
    title: "Kan · Agenda + Kanban",
    url: "https://kan.diefer.es",
    type: "PERSONAL",
    tags: ["Productividad", "React", "Personal"],
    description: "Herramienta personal de agenda y kanban construida con React.",
    result: "Productividad · React",
  },
  {
    id: 8,
    number: "08",
    title: "IP Check",
    url: "https://ipcheck.diefer.es",
    type: "HERRAMIENTA",
    tags: ["Herramienta", "API", "Node.js"],
    description: "Herramienta para consultar información de IPs y redes.",
    result: "API · Node.js",
  },
  {
    id: 9,
    number: "09",
    title: "OCHO",
    url: "https://ocho.agent4bizz.com",
    type: "PERSONAL",
    tags: ["Salud", "SaaS", "En desarrollo"],
    description: "SaaS de salud en desarrollo.",
    result: "SaaS · En desarrollo",
  },
  {
    id: 10,
    number: "10",
    title: "Agent4bizz",
    url: "https://agent4bizz.com",
    type: "EMPRESA PROPIA",
    tags: ["Agencia", "Branding", "Web"],
    description: "Agencia digital propia: branding, web y automatización.",
    result: "Agencia · Branding",
  },
]
