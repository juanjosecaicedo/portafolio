const yearWork = new Date().getFullYear() - 2018;
import liola from "../assets/liolacl_.png";
import tiendaflores from "../assets/tiendaflorescl_.png";
import construplaza from "../assets/construplazacl_.png";
import eysi from "../assets/eysico_.png";
import mercadopacific from "../assets/mercadopacific.png"
import graceos from "../assets/graceos_.png"

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
    name: "graceOS",
    description: "Software de gestión para el manejo de múltiples iglesias",
    stack: ["Laravel", "Nextjs", "Mysql"],
    link: "https://graceos.app/",
    image: graceos,
    placeholder: "captura del proyecto graceOS",
  },
  {
    name: "Tienda Flores (Ecommerce)",
    description:
      "Desarrollo de un ecommerce para la empresa Flores.",
    stack: ["Magento 2", "PHP", "JavaScript", "MySQL"],
    link: "https://www.tiendaflores.cl/",
    image: tiendaflores,
    placeholder: "captura del proyecto Tienda Flores",
  },
  {
    name: "Tienda Liola (Ecommerce)",
    description:
      "Desarrollo de un ecommerce para la empresa Tienda Liola.",
    stack: ["Magento 2", "PHP", "JavaScript", "MySQL", "Redis", "Elasticsearch"],
    link: "https://liola.cl/",
    image: liola,
    placeholder: "captura del proyecto Tienda Liola",
  },
  {
    name: "Construplaza (Ecommerce)",
    description:
      "Desarrollo de un ecommerce para la empresa Construplaza, con funcionalidades como gestión de productos, categorías, usuarios",
    stack: ["Magento 2", "PHP", "JavaScript", "MySQL"],
    link: "https://construplaza.cl/",
    image: construplaza,
    placeholder: "captura del proyecto Construplaza",
  },
  {
    name: "Mercado Pacific (Marketplace)",
    description: "Desarrollo de un marketplace para la empresa PlayTech, con funcionalidades como gestión de productos, categorías, usuarios, roles, permisos, facturación electrónica, reportes y estadísticas.",
    stack: ["Wordpress", "WooCommerce", "PHP", "JavaScript", "MySQL"],
    link: "https://mercadopacific.com/",
    image: mercadopacific,
    placeholder: "captura del proyecto Mercado Pacific",
  },
  {
    name: "Eysi (ERP)",
    description: "Desarrollo de un ERP para la empresa Eysi, con funcionalidades como gestión de inventario, ventas, compras, usuarios y roles, permisos, facturación electrónica, reportes y estadísticas.",
    stack: ["PHP", "JavaScript", "MySQL"],
    link: "https://www.eysi.co/",
    image: eysi,
    placeholder: "captura del proyecto Eysi",
  },
];

export const experience = [
  {
    period: `2023 — ${new Date().getFullYear()}`,
    role: "Tecnico Magento",
    company: "Thinkia",
    description:
      "Contruicion de metodos de pago para LG, Contruicion de plugin para Kimai2",
  },
  {
    period: "2022 — 2023",
    role: "Desarrollador Magento 2",
    company: "Adwise",
    description:
      "Desarrollo de E-commerce en magento 2 (cloud, community). Construir tiendas desde cero hasta su salida a producción brindar soporte a sitio en producción",
  },
  {
    period: "2021 — 2021",
    role: "Full Stack Developer",
    company: "Enjambre Group SAS.",
    description:
      "Desarrollar y desplegar sistemas web usando tecnologías más usadas y robustas las cuales pudieran suplir las necesidades de los clientes.",
  },
  {
    period: "2018 — 2020",
    role: "Ananalista en Sistemas",
    company: "Embalaje y Servicios S.A.S",
    description:
      "Desarrollar sistema de contabilidad y procesos internos administrativos a nivel departamental aplicando estándares de calidad definidos en normativa para desarrollo de software.",
  },
];

export const testimonials = [
  {
    quote:
      "Nos complació mucho saber cómo resolvió los problemas y desafíos de la interfaz de usuario de nuestros sitios web.",
    name: "Andrés Solis",
    role: "Diseñador",
  },
  {
    quote: "Me alegro de haber decidido trabajar contigo. El proyecto fue entregado a tiempo con todos los requisitos.",
    name: "Yeider Adrian Mina",
    role: "Developer (full-stack)",
  },
  {
    quote: "El desarrollo de los proyectos siempre se enfrentó a dificultades, pero las manejaste bien.",
    name: "Jose Edier Mera",
    role: "Developer (full-stack)",
  },
];

export const showTestimonials = true;

export const contact = {
  email: "hola@juanjose.dev",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};
