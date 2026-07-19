const yearWork = new Date().getFullYear() - 2018;

export const nav = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Contacto", href: "#contact" },
];

export const facts = [
  { label: "Ubicación", value: "Jamundí, Colombia" },
  { label: "Experiencia", value: `+${yearWork} años` },
  { label: "Enfoque", value: "Web full stack" },
  { label: "Disponibilidad", value: "Freelance / full-time" },
];

export const skills = [
  { name: "Frontend", items: ["React", "Vue", "Astro", "Nextjs", "TypeScript", "Tailwind"] },
  { name: "Backend", items: ["Node.js", "Express", "Nestjs", "Laravel", "REST", "GraphQL"] },
  { name: "Datos", items: ["MySQL", "MongoDB", "Redis"] },
  { name: "Herramientas", items: ["Docker", "Git", "Cloud", "AWS"] },
];

export const projects = [
  {
    name: "Proyecto uno",
    description:
      "Breve descripción del proyecto, el problema que resolvió y el impacto que tuvo.",
    stack: ["React", "Node", "PostgreSQL"],
    link: "#",
    placeholder: "captura del proyecto",
  },
  {
    name: "Proyecto dos",
    description:
      "Breve descripción del proyecto, el problema que resolvió y el impacto que tuvo.",
    stack: ["Astro", "Tailwind"],
    link: "#",
    placeholder: "captura del proyecto",
  },
  {
    name: "Proyecto tres",
    description:
      "Breve descripción del proyecto, el problema que resolvió y el impacto que tuvo.",
    stack: ["Next.js", "MongoDB"],
    link: "#",
    placeholder: "captura del proyecto",
  },
];

export const experience = [
  {
    period: "2024 — hoy",
    role: "Full Stack Developer",
    company: "Empresa actual",
    description:
      "Desarrollo de features end-to-end, colaboración con diseño y producto, optimización de rendimiento.",
  },
  {
    period: "2022 — 2024",
    role: "Frontend Developer",
    company: "Empresa anterior",
    description:
      "Construcción de interfaces con React, mejora de accesibilidad y velocidad de carga.",
  },
  {
    period: "2021 — 2022",
    role: "Desarrollador Junior",
    company: "Primer empleo",
    description:
      "Mantenimiento de aplicaciones web y soporte en la migración a un nuevo stack.",
  },
];

export const testimonials = [
  {
    quote:
      "Un desarrollador atento al detalle, siempre entregó a tiempo y con calidad.",
    name: "Nombre Apellido",
    role: "Product Manager",
  },
  {
    quote: "Excelente comunicación y capacidad para resolver problemas complejos.",
    name: "Nombre Apellido",
    role: "Diseñador UX",
  },
  {
    quote: "Trabajar con él fue clave para lanzar nuestro producto a tiempo.",
    name: "Nombre Apellido",
    role: "CTO",
  },
];

export const showTestimonials = true;

export const contact = {
  email: "hola@juanjose.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};
