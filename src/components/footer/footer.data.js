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
      path: 'tourism',
      label: 'Tourism',
    },
    {
      path: 'mobility',
      label: 'Mobility',
    },
    {
      path: 'retail',
      label: 'Retail',
    },
  ],
  company: [
    {
      path: 'about',
      label: 'About',
    },
    {
      path: 'terms',
      label: 'Terms',
    },
    {
      path: 'privacy',
      label: 'Privacy Policy',
    },
    {
      path: 'blog',
      label: 'Blog',
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
    {
      path: "/",
      icon: <FaDribbble />,
    },
  ]
};
