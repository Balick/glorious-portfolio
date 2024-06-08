import {
  DraftingCompass,
  HandHelping,
  Blocks,
  Wrench,
  Code,
  Braces,
} from "lucide-react";

export const navItems = [
  { name: "Works", link: "#works" },
  { name: "Resume", link: "#resume" },
  { name: "Services", link: "#services" },
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
