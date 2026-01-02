// Resume Data Constants
// Update this file to change resume PDF content
// The resume will be dynamically generated based on this data
//
// ATS BEST PRACTICES:
// 1. Use strong action verbs (Led, Developed, Implemented, Optimized, etc.)
// 2. Include quantifiable achievements (numbers, percentages, metrics)
// 3. Include relevant keywords from job descriptions
// 4. Use standard section headings
// 5. Keep bullet points concise and impactful

export const resumeData = {
  // Personal Information
  personal: {
    name: "Nishant Sharma",
    title: "Senior Software Engineer",
    email: "4unishant@gmail.com",
    phone: "+91 7838976975",
    location: "Delhi, India",
    linkedin: "linkedin.com/in/sharma-tnahsin",
    github: "github.com/Tnahsin79",
    // portfolio: "nishantsharma.dev", // Uncomment when you have a domain
  },

  // Professional Summary (2-4 sentences, include key skills and years of experience)
  summary:
    "Results-driven Senior Software Developer with 4+ years of experience building scalable web applications using modern JavaScript technologies. Proficient in full-stack development with expertise in React, Next.js, Nest.js, Node.js, and microservices architecture. Proven track record of delivering high-quality software solutions, optimizing application performance, and mentoring development teams. Passionate about writing clean, maintainable code and implementing industry best practices.",

  // Technical Skills (Group by category for better ATS parsing)
  skills: {
    languages: ["JavaScript", "TypeScript", "HTML5", "CSS3", "SQL"],
    frontend: ["React.js", "Next.js", "Material UI", "Redux"],
    backend: ["Node.js", "Nest.js", "Express.js", "REST APIs", "Microservices"],
    databases: ["PostgreSQL", "MS SQL Server", "Redis"],
    tools: ["Git", "GitHub", "VS Code", "Postman", "Jira"],
  },

  // Work Experience (Use action verbs, quantify achievements)
  experience: [
    {
      role: "Senior Software Developer",
      company: "Appinventiv Technologies Pvt Ltd",
      location: "Noida, India",
      duration: "Sep 2024 - Present",
      responsibilities: [
        "Lead development of scalable web applications using Nest.js and TypeScript, serving 10,000+ active users",
        "Architect and implement microservices-based solutions, improving system scalability by 40%",
        "Establish coding standards and best practices, reducing code review time by 30%",
        "Collaborate with cross-functional teams to deliver features on time and within scope",
      ],
    },
    {
      role: "Software Engineer",
      company: "Bonami Software",
      location: "Noida, India",
      duration: "Apr 2024 - Sep 2024",
      responsibilities: [
        "Built responsive UI components achieving 95%+ cross-browser compatibility",
        "Integrated third-party APIs and payment gateways, enhancing application functionality",
        "Collaborated with UI/UX designers to implement pixel-perfect designs",
        "Participated in Agile ceremonies including daily standups, sprint planning, and retrospectives",
      ],
    },
    {
      role: "Programmer",
      company: "Integra Software Services",
      location: "Puducherry, India",
      duration: "Oct 2021 - Mar 2024",
      responsibilities: [
        "Developed full-stack web applications using React, Node.js, and PostgreSQL",
        "Designed and optimized database schemas, improving query performance by 25%",
        "Built publication management tools processing 500+ manuscripts monthly",
        "Collaborated in Agile environment, consistently delivering sprints on schedule",
      ],
    },
  ],

  // Projects (Focus on impact and technologies)
  projects: [
    {
      name: "Quivio CRM Application",
      role: "Backend Developer",
      description:
        "Built backend for marketing automation platform enabling customer segmentation, campaign management, and two-way communication for 5000+ business users",
      technologies: ["Nest.js", "TypeScript", "PostgreSQL", "Redis", "Microservices"],
    },
    {
      name: "Lyca Mobile App",
      role: "Frontend Developer",
      description:
        "Developed responsive UI components with CMS integration, achieving 40% improvement in page load times through performance optimization",
      technologies: ["Next.js", "TypeScript", "Material UI", "REST APIs"],
    },
    {
      name: "iRights Application",
      role: "Full Stack Developer",
      description:
        "Created publication rights management system handling digital assets and permissions for 100+ publishers",
      technologies: ["React", "Node.js", "MS SQL Server", "REST APIs"],
    },
    {
      name: "Author Management Tool",
      role: "Full Stack Developer",
      description:
        "Designed manuscript management system for author and affiliation data, reducing data entry time by 50%",
      technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    },
  ],

  // Education (Update with your actual details)
  education: [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Guru Gobind Singh Indraprastha University",
      location: "Delhi, India",
      duration: "2015 - 2019",
      gpa: "8.37/10",
    },
    {
      degree: "Master of Science in Information Security",
      institution: "Indira Gandhi National Open University",
      location: "Delhi, India",
      duration: "2022 - 2025",
      percentage: "69.86",
    },
  ],

  // Certifications (Uncomment and add if you have any)
  // certifications: [
  //   {
  //     name: "AWS Certified Developer - Associate",
  //     issuer: "Amazon Web Services",
  //     date: "2023",
  //   },
  //   {
  //     name: "Meta Front-End Developer Certificate",
  //     issuer: "Meta",
  //     date: "2023",
  //   },
  // ],
};

// Note: Resume styling is now handled in the API route for ATS compliance
// The PDF uses standard fonts (Helvetica) and simple formatting
