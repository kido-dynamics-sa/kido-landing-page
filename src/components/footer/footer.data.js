import {
  FaFacebookF,
  FaTwitter,
  FaGithubAlt,
  FaDribbble,
} from "react-icons/fa";

export default {
  menuItem: [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: '#tourism',
      label: 'Tourism',
    },
    {
      path: '#mobility',
      label: 'Mobility',
    },
    {
      path: '#retail',
      label: 'Retail',
    },
  ],
  company: [
    {
      path: '/',
      label: 'About',
    },
    {
      path: '/',
      label: 'Terms',
    },
    {
      path: '/',
      label: 'Privacy Policy',
    },
    {
      path: '/careers',
      label: 'Careers',
    },
  ],
  social: [
    {
      path: "/",
      icon: <FaFacebookF />,
    },
    {
      path: "/",
      icon: <FaTwitter />,
    },
    {
      path: "/",
      icon: <FaGithubAlt />,
    },
  ]
};
