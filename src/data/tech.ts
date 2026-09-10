export interface TechItem {
  name: string
  percentage: number
  category: string
}

export const techStack: TechItem[] = [
  { name: "Astro", percentage: 90, category: "Frontend" },
  { name: "WordPress", percentage: 85, category: "CMS" },
  { name: "Docker", percentage: 80, category: "Infra" },
  { name: "Linux", percentage: 85, category: "OS" },
  { name: "pfSense", percentage: 70, category: "Network" },
  { name: "Nginx", percentage: 75, category: "Server" },
  { name: "Cloudflare", percentage: 80, category: "CDN" },
  { name: "Node.js", percentage: 75, category: "Backend" },
  { name: "SQL", percentage: 70, category: "Database" },
  { name: "Proxmox", percentage: 65, category: "Virtualization" },
]
