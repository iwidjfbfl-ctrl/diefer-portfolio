export interface Service {
  id: string
  number: string
  title: string
  description: string
}

export const services: Service[] = [
  { id: "01", number: "01", title: "Desarrollo Web", description: "Astro, WordPress o React. SEO, rendimiento, mantenimiento." },
  { id: "02", number: "02", title: "Infraestructura & Redes", description: "Servidores, firewalls, VLANs, VPNs, Docker, Proxmox." },
  { id: "03", number: "03", title: "Seguridad Informática", description: "Hardening, pfSense/OPNsense, vulnerabilidades, backups." },
  { id: "04", number: "04", title: "Automatización n8n", description: "Bots Telegram, AI agents, monitorización, self-hosted." },
  { id: "05", number: "05", title: "Reparación de Equipos", description: "PCs/portátiles, diagnóstico gratis, 24–48h." },
  { id: "06", number: "06", title: "Asistencia Remota", description: "Soporte a distancia sin desplazarte." },
  { id: "07", number: "07", title: "Digitalización de Empresas", description: "Webs, procesos, automatizaciones, presencia online." },
  { id: "08", number: "08", title: "Proyectos a Medida", description: "Paneles, integraciones, herramientas full-stack." },
]
