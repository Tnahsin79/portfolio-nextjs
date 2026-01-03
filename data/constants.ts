// Portfolio Data Constants
// Update this file to change all portfolio content

export const personalInfo = {
  name: "Nishant",
  fullName: "Nishant Sharma",
  role: "Senior Software Developer",
  roleTagline: "MERN | Next.js | NestJS",
  tagline: "I build scalable web applications used by real users, with strong focus on performance, clean architecture, and PostgreSQL-based systems.",
  email: "4unishant@gmail.com",
  phone: "+91 7838976975",
  location: "Delhi, India",
  bio: "I started my software journey as a MERN developer. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.",
  resumeUrl: "/api/resume",
  profileImage: "/profile.png",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contacts", href: "#contact" },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Tnahsin79",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/sharma-tnahsin",
    icon: "linkedin",
  },
  // {
  //   name: "Twitter",
  //   url: "https://twitter.com",
  //   icon: "twitter",
  // },
];

export const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "Nest.js",
  "Git",
  "GitHub",
  "Redis",
  "PostgreSQL",
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "frontend",
    skills: ["React.js", "Next.js", "HTML / CSS", "Tailwind / MUI"],
  },
  {
    title: "Backend",
    icon: "backend",
    skills: ["Node.js", "Express.js", "NestJS", "REST APIs"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Schema Design", "Multitenancy"],
  },
  {
    title: "Dev & Tools",
    icon: "tools",
    skills: ["Git / GitHub", "Docker", "Jest", "CI/CD"],
  },
];

export const services = [
  {
    id: 1,
    title: "Website Development",
    description: "Building responsive and performant websites using modern technologies.",
    icon: "code",
  },
  {
    id: 2,
    title: "App Development",
    description: "Creating cross-platform mobile applications with seamless user experience.",
    icon: "app",
  },
  {
    id: 3,
    title: "Website Hosting",
    description: "Deploying and managing websites with optimal performance and security.",
    icon: "hosting",
  },
];

export const stats = [
  // {
  //   value: "120",
  //   suffix: "+",
  //   label: "Completed Projects",
  // },
  // {
  //   value: "95",
  //   suffix: "%",
  //   label: "Client satisfaction",
  // },
  {
    value: "4",
    suffix: "+",
    label: "Years of experience",
  },
];

export const experiences = [
  {
    id: 1,
    role: "Senior Software Developer",
    company: "Appinventiv Technologies pvt ltd",
    location: "Noida, India",
    duration: "Sep 2024 - Present",
    highlights: [
      "Lead development of scalable web applications using Nest.js and TypeScript, serving 10,000+ active users",
      "Architect and implement microservices-based solutions, improving system scalability by 40%",
      "Establish coding standards and best practices, reducing code review time by 30%",
      "Collaborate with cross-functional teams to deliver features on time and within scope",
    ],
    technologies: ["Nest.js", "JavaScript", "TypeScript", "PostgreSQL", "Redis", "GitHub"],
  },
  {
    id: 2,
    role: "Software Engineer",
    company: "Bonami Software",
    location: "Noida, India",
    duration: "Apr 2024 - Sep 2024",
    highlights: [
      "Built responsive UI components achieving 95%+ cross-browser compatibility",
      "Integrated third-party APIs and payment gateways, enhancing application functionality",
      "Collaborated with UI/UX designers to implement pixel-perfect designs",
      "Participated in Agile ceremonies including daily standups, sprint planning, and retrospectives",
    ],
    technologies: ["React", "Node.js", "Next.js", "JavaScript", "SQL"],
  },
  {
    id: 3,
    role: "Programmer",
    company: "Integra Software Services",
    location: "Puducherry, India",
    duration: "Oct 2021 - March 2024",
    highlights: [
      "Developed full-stack web applications using React, Node.js, and PostgreSQL",
      "Designed and optimized database schemas, improving query performance by 25%",
      "Built publication management tools processing 500+ manuscripts monthly",
      "Collaborated in Agile environment, consistently delivering sprints on schedule",
    ],
    technologies: ["JavaScript", "HTML5", "CSS3", "React", "PostgreSQL", "MS SQL Server"],
  },
];

// Project type definition
interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Quivio CRM Application",
    description: "Worked as a Backend Developer on the Marketing and Automation application using NestJS and PostgreSQL, developing multiple modules focused on customer engagement, including segmentation, triggers, campaigns, checkout forms, and two-way communication to enhance interaction between customers and the organization.",
    tags: ["Nest.js", "TypeScript", "PostgreSQL", "Redis", "Microservices"],
    liveUrl: "https://app.quivio.com/login",
  },
  {
    id: 2,
    title: "Lyca Mobile App",
    description: "Worked as a Frontend Developer, building UI components and application features by integrating data from the CMS, while also focusing on performance optimization and designing reusable, scalable components.",
    tags: ["Next.js", "TypeScript", "JavaScript", "CSS", "Material UI"],
    liveUrl: "https://www.lycamobile.us/en/",
  },
  {
    id: 3,
    title: "iRights Application",
    description: "The RnP Tool is responsible for managing publication manuscripts and related assets, as well as overseeing and controlling permissions obtained from rights holders to ensure their authorized use throughout the publication process.",
    tags: ["React", "API Integration", "Node.js", "MS SQL Server"],
    liveUrl: "https://irights.integra.co.in/login",
  },
  {
    id: 4,
    title: "Author Management and Affiliation Tool",
    description: "The AMT Tool is designed to create, manage, and maintain manuscripts along with the associated author and affiliation information, ensuring that all publication-related data is accurately structured, consistently maintained, and efficiently handled throughout the lifecycle of a manuscript.",
    tags: ["React", "API Integration", "Node.js", "PostgreSQL"],
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Working with Jensen was an absolute pleasure. The attention to detail and commitment to quality is unmatched.",
    avatar: "/testimonials/sarah.jpg",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Product Manager, InnovateCo",
    content: "Delivered our project ahead of schedule with exceptional quality. Highly recommended!",
    avatar: "/testimonials/mike.jpg",
  },
];

export const siteConfig = {
  title: "Nishant Sharma | Senior Software Developer",
  description: "Full-stack software developer specializing in building exceptional digital experiences.",
  url: "https://nishantsharma.dev",
  ogImage: "/og-image.jpg",
};

