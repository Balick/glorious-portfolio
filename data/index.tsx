import {
  DraftingCompass,
  HandHelping,
  Blocks,
  Wrench,
  Code,
  Braces,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaX } from "react-icons/fa6";

export const navItems = [
  { name: "Services", link: "#services" },
  { name: "Skills", link: "#skills" },
  { name: "Works", link: "#works" },
  { name: "Contact", link: "#contact" },
];

export const services = [
  {
    ico: <Code />,
    title: "Custom Website Development",
    description:
      "Expertise in building high-performing, responsive, and accessible websites. " +
      "Utilize the latest technologies and frameworks to ensure an optimal user experience",
  },
  {
    ico: <Braces />,
    title: "Web Application Development",
    description:
      "Expertise in building robust and secure web applications. " +
      "Integrate advanced functionalities like e-commerce, online payments, and content management systems",
  },
  {
    ico: <HandHelping />,
    title: "Technology Consulting",
    description:
      "Offer strategic advice to help businesses leverage technology effectively. " +
      "Recommend the best technology solutions to meet your client's business goals",
  },
  {
    ico: <Blocks />,
    title: "System Integration",
    description:
      "Connect your website or web application with third-party systems like CRMs, ERPs, and marketing platforms. " +
      "Build custom integrations to meet your client's specific requirements.",
  },
  {
    ico: <Wrench />,
    title: "Maintenance and Support",
    description:
      "Monitor performance and troubleshoot issues promptly. " +
      "Regularly update code and technologies for security and compatibility",
  },
  {
    ico: <DraftingCompass />,
    title: "Mockup Integration",
    description:
      "Bridge the gap between design and development, ensuring pixel-perfect implementation. Maintain design fidelity throughout the development process",
  },
];

export const works = [
  {
    title: "Glorious Portfolio",
    description:
      "A simple and beautiful portfolio to present Théo Balick's work and career.",
    className: "md:col-span-1",
    image: "/images/works/work1.png",
    link: "/"
  },
  {
    title: "Esis Social Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sapiente, voluptatum dolores deserunt repellat minus aspernatur facere aspe",
    className: "md:col-span-1",
    image: "/images/works/work7.png",
    link: "/"
  },
  {
    title: "Adrian's Portfolio",
    description: "Modern & Minimal JS Mastery Portfolio",
    className: "md:col-span-1",
    image: "/images/works/work4.png",
    link: "/"
  },
  {
    title: "Iceberg Investment",
    description:
      "Your partner for integrating IT solutions, developing business management applications and much more. We offer state-of-the-art IT services, tax advice, construction, electrical, plumbing and painting services, as well as the supply of hardware, office products, clothing, perfumery, jewellery and many other items.",
    className: "md:col-span-1",
    image: "/images/works/work3.png",
    link: "/"
  },
  {
    title: "Venissa's Portfolio",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae sapiente, voluptatum dolores deserunt repellat minus aspernatur facere aspe",
    className: "md:col-span-2",
    image: "/images/works/work6.png",
    link: "/"
  },
  {
    title: "Tailus UI React",
    description:
      "Highly customizable components for crafting modern, personalized websites and applications.",
    className: "md:col-span-1",
    image: "/images/works/work5.png",
    link: "/"
  },
];

export const socialMedia = [
  {
    id: 1,
    img: <FaLinkedinIn />,
    href: "https://www.linkedin.com/in/th%C3%A9o-balick-7755731a5/",
  },
  {
    id: 2,
    img: <FaGithub />,
    href: "https://github.com/balick",
  },
  {
    id: 3,
    img: <FaX />,
    href: "https://twitter.com/theo_balick",
  },
];

export const skills = [
  { name: "frontend", description: "", percentage: 95 },
  { name: "backend", description: "", percentage: 75 },
];

export const skillsIcons = [
  "typescript",
  "javascript",
  "jetbrains",
  "webstorm",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "mongodb",
  "figma",
];
