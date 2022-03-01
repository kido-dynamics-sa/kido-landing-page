import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaLinkedin,
} from "react-icons/fa";

export default {
  menuItem: [
    // {
    //   path: 'https://app.kido-es.kidodynamics.com/tourism',
    //   label: 'Tourism',
    // },
    // {
    //   path: 'https://app.kido-es.kidodynamics.com/mobility',
    //   label: 'Mobility',
    // },
    // {
    //   path: 'https://app.kido-es.kidodynamics.com/retail',
    //   label: 'Retail',
    // },

    {
      path: '/digital-kit',
      label: 'Kit Digital',
    },
    {
      path: '/contact-us',
      label: 'Request a Demo',
    },
    {
      path: 'https://api.kido-es.kidodynamics.com/redoc',
      label: 'API',
    },
  ],
  company: [
    {
      path: '/about-us',
      label: 'About Us',
    },
    {
      path: 'https://app.kido-es.kidodynamics.com/PSI.pdf',
      label: 'Terms',
    },
    {
      path: 'https://res.cloudinary.com/kido-dynamics/raw/upload/v1644408758/Pol%C3%ADtica_de_Privacidad_R00_EN_003_sftw1y.docx',
      label: 'Privacy Policy',
    },
    {
      path: '/blog',
      label: 'Blog',
    },
    {
      path: '/careers',
      label: 'Careers',
    },
    {
      path: '/news',
      label: 'Press',
    },
  ],
  social: [
    {
      path: "https://www.linkedin.com/company/kido-dynamics/",
      icon: <FaLinkedin />,
    },
    {
      path: "https://twitter.com/kidodynamics",
      icon: <FaTwitter />,
    },
  ]
};
