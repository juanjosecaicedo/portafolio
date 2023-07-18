
import resume from "../assets/resume-v2.pdf";
import tiendaflores from "../assets/img/tiendaflores.png";
import tiendaliola from "../assets/img/tiendaliola.png";
import mercadopacific from "../assets/img/mercadopacific.png";
import construplaza from "../assets/img/construplaza.png";
import eysi from "../assets/img/eysi.png";

interface Services {
  icon: string,
  title: string,
  text: string
}

const services: Services[] = [
  {
    icon: '#ux-service',
    title: 'Creatividad en proyectos',
    text: 'Convierte lo que tienes en mente de un producto digital en realidad. Para cualquier plataforma que consideres.'
  },

  {
    icon: '#app-development',
    title: 'Desarrollo de aplicaciones',
    text: 'Diseño, construcción e implementación estándar de sus aplicaciones con documentación.'
  },
  {
    icon: '#web-development',
    title: 'Desarrollo web',
    text: 'Crea y mantén tus sitios web y también cuida su rendimiento y capacidad de tráfico.'
  }
];

const portfolio = [
  {
    img: tiendaflores,
    title: 'Tienda Flores (Ecommerce)',
    link: 'https://www.tiendaflores.cl/',
    tag: [
      'Magento 2'
    ]
  },
  {
    img: tiendaliola,
    title: 'Tienda Liola (Ecommerce)',
    link: 'http://tiendaliola.cl/',
    tag: [
      'Magento 2'
    ]
  },
  {
    img: mercadopacific,
    title: 'Mercado Pacific',
    link: 'https://mercadopacific.com/',
    tag: [
      'Wordpress',
      'Wsfm Marketplace'
    ]
  },
  {
    img: construplaza,
    title: 'Construplaza (Ecommerce)',
    link: 'https://mcstaging.mts.cl/construplaza',
    tag: [
      'Magento 2'
    ]
  },
  {
    img: eysi,
    title: 'eysi (ERP)',
    link: 'https://eysi.co/',
    tag: [
      'html',
      'javascript',
      'php',
    ]
  }
]

const socials = [
  {
    icon: '#instagram-icon',
    href: 'https://www.instagram.com/juan__jose__13/'
  },
  {
    icon: '#github-icon',
    href: 'https://github.com/juanjosecaicedo'
  },
  {
    icon: '#linkedin-icon',
    href: 'https://www.linkedin.com/in/juan-jose-caicedo-ararat-90a253217'
  }
];

const headerLink = {
  link: [
    {
      class: 'services',
      aosDelay: 200,
      text: 'Servicios',
      link: '#services'

    },
    {
      class: 'portfolios',
      aosDelay: 250,
      text: 'Portfolios',
      link: '#portfolios'
    },
    {
      class: 'experience',
      aosDelay: 300,
      text: 'Experiencia',
      link: '#experience'
    },
    {
      class: 'testimonials mobile-link',
      aosDelay: 350,
      text: 'Testimonials',
      link: '#testimonials'

    },
    {
      class: 'education-skill mobile-link',
      aosDelay: 350,
      text: 'Education',
      link: '#education-skill'

    },
    {
      class: 'contact mobile-link',
      aosDelay: 350,
      text: 'Contacto',
      link: '#contact'

    },
    {
      class: 'mobile-link',
      aosDelay: 350,
      text: 'Resumen',
      link: resume
    },
  ],
  moreLink: [
    {
      class: 'testimonials',
      text: 'Testimonios',
      href: '#testimonials'
    },
    {
      class: 'education-skil',
      text: 'Educación',
      href: '#education-skill'
    },
    {
      class: 'contact',
      text: 'Contacto',
      href: '#contact'
    }
  ]
}

const educationAndSkills = {
  education: [
    {
      text: 'Servicio Nacional de Aprendizaje',
      aosDelay: 100,
      degreeField: 'Programación de software',
      date: '2016 - 2017'
    },
    {
      text: 'Universitaria Antonio José Camacho',
      aosDelay: 100,
      degreeField: 'Ingenieria de sistemas',
      date: '2020'
    }
  ],

  skills: [
    {
      label: 'PHP',
      dataWidth: 80
    },
    {
      label: 'HTML 5',
      dataWidth: 90
    },
    {
      label: 'CSS',
      dataWidth: 65
    },
    {
      label: 'SQL',
      dataWidth: 85
    },
    {
      label: 'MySql',
      dataWidth: 85
    },
    {
      label: 'JavaScript',
      dataWidth: 75
    },
    {
      label: 'Magento 2',
      dataWidth: 70
    },
    {
      label: 'Laravel',
      dataWidth: 75
    },
    {
      label: 'Node.js',
      dataWidth: 50
    },
    {
      label: 'Vue',
      dataWidth: 63
    },
    {
      label: 'Angular',
      dataWidth: 40
    },
    {
      label: 'React',
      dataWidth: 30
    },
    {
      label: 'Tailwind Css',
      dataWidth: 80
    },
    {
      label: 'Bootstrap',
      dataWidth: 90
    },
  ]
}
const experience = [
  {
    tab: 'adwise',
    title: 'Adwise',
    jobTitle: 'Desarrollador Magento 2',
    link: 'https://www.adwise.cl/',
    date: 'Ago 2021 - Actual, Remoto · Full-time',
    location: 'Santiago de Chile',
    stackList: [
      'Magento 2',
      'php',
      "mysql",
      'javaScript',
      'Html',
      'Less',
      'Knokout'
    ],
    responsibilities: [
      "Desarrollo de E-commerce en magento 2 (cloud, community)",
      "Construir tiendas desde cero hasta su salida a producción",
      "brindar soporte a sitio en producción",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Desarrollar en módulos para extender las funcionalidades nativas de Magento",
    ]
  },
  /*{
    tab: 'agsoftware',
    title: 'Ag Software',
    jobTitle: 'Desarrollador Magento 2',
    link: '#',
    date: 'Remoto · Full-time',
    location: 'Guachené - Colombia',
    stackList: [
      'Magento 2',
      'php',
      "mysql",
      'javaScript',
      'Html',
      'Less',
      'Knokout'
    ],
    responsibilities: [
      "Desarrollar E-commerce en magento 2 (community).",
      "implementar temas desde cero que cumplieran con el diseño dado por clientes.",
      "Desarrollar en módulos para extender las funcionalidades de distintos sitios.",
      "velar por el continuo funcionamiento de los sitio en producción.",
    ]
  },*/
  {
    tab: 'enjambre',
    title: 'Enjambre Group SAS.',
    jobTitle: 'Desarrollador full-stack',
    link: 'https://enjambregroup.com/',
    date: 'Presencial · Full-time',
    location: 'Cali - Colombia',
    stackList: [
      "php",
      "JavaScript",
      "mysql",
      "html",
      "scss",
      "wordpress",
      "node.js",
      "express.js",
      "sockect.io",
      "angular",
    ],
    responsibilities: [
      "Desarrollar y desplegar sistemas web usando tecnologías más usadas y robustas  las cuales pudieran suplir las necesidades de los clientes.",
      "Levantar requerimientos basados en las necesidades del cliente",
      "Diseñar plan de trabajo.",
      "Desarrollo de interfaces de usuarios administrativos.",
      "Desarrollo de chatbots en nodejs.",
      "Administración de vps.",
      "Despliegue de aplicaciones web.",
      "Direccionamiento de dominios (registros ti AAAA).",
      "Implementar páginas en wordpress.",
      "Construcción de Marketplace en wordpress.",
      "Crear plugin para wordpress los cuales permitieran extender funcionalidades.",
      "Migración de páginas hechas en wordpress.",
      "Realizar comunicación entre distintas aplicaciones mediante servicios REST y SOAP."
    ]
  },
  {
    tab: 'eysi',
    title: 'Embalaje y Servicios S.A.S',
    jobTitle: 'Ananalista en Sistemas',
    link: 'https://eysi.co/',
    date: 'Presencial · Full-time',
    location: 'Cali - Colombia',
    stackList: [
      "php",
      "JavaScript",
      "mysql",
      "html",
      "css 3",
      "Bootstrap 4"
    ],
    responsibilities: [
      "Desarrollar sistema de contabilidad y procesos internos administrativos a nivel departamental aplicando estándares de calidad definidos en normativa para desarrollo de software.",
      "Levantar requerimientos basados en las necesidades de la empresa.",
      "Realizar planeación de proyecto de digitalización de procesos internos. ",
      "Diseñar plan de trabajo.",
      "Diseñar interfaces de usuario.",
      "Diseño de la base de datos.",
      "Desarrollo de las interfaces de usuario.",
      "Integración de módulos programados.",
      "Realizar pruebas de caja negra, caja blanca y de integración.",
      "Documentación de resultados de pruebas.",
      "Análisis de pruebas y propuestas de optimización.",
      "Mantenimiento general de software.",
      "Desrrollo de APIs"
    ]
  }
]



export { services, socials, headerLink, educationAndSkills, experience, portfolio };