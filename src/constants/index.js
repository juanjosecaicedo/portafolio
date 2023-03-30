
import resume from "../assets/resume.pdf";
const services = [
  {
    icon: '#ux-service',
    title: 'Creatividad en proyectos',
    text: 'Turn what you have in mind of a digital product into reality. For any platform you consider.'
  },

  {
    icon: '#app-development',
    title: 'Desarrollo de aplicaciones',
    text: 'Standard designing, building, and implementing your applications with documentation.'
  },
  {
    icon: '#web-development',
    title: 'Desarrollo web',
    text: 'Create and maintain your websites and also take care of its performance and traffic capacity'
  }
];

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
    tab: 'apple',
    title: 'Apple',
  },
  {
    tab: 'microsoft',
    title: 'Microsoft',

  },
  {
    tab: 'facebook',
    title: 'Facebook',
  }
]



export { services, socials, headerLink, educationAndSkills, experience };