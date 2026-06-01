import { Project, Experience, Skill, Service, Certification, NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export const skills: Skill[] = [
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "React.js", level: 95, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 93, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Redux Toolkit", level: 88, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Frontend" },
  { name: "Shadcn UI", level: 90, category: "Frontend" },
  { name: "Ant Design", level: 85, category: "Frontend" },
  { name: "Radix UI", level: 85, category: "Frontend" },
  { name: "Hero UI", level: 82, category: "Frontend" },
  { name: "Node.js", level: 92, category: "Backend" },
  { name: "Express.js", level: 90, category: "Backend" },
  { name: "JWT Authentication", level: 90, category: "Backend" },
  { name: "Better Auth", level: 85, category: "Backend" },
  { name: "REST APIs", level: 93, category: "Backend" },
  { name: "MongoDB", level: 90, category: "Database" },
  { name: "PostgreSQL", level: 85, category: "Database" },
  { name: "MySQL", level: 80, category: "Database" },
  { name: "Prisma", level: 88, category: "Database" },
  { name: "Mongoose", level: 87, category: "Database" },
  { name: "OpenAI", level: 88, category: "AI" },
  { name: "Groq AI", level: 85, category: "AI" },
  { name: "LLM Integration", level: 87, category: "AI" },
  { name: "Microsoft Dynamics 365 F&O", level: 85, category: "ERP" },
  { name: "X++ Development", level: 82, category: "ERP" },
  { name: "ERP Workflows", level: 80, category: "ERP" },
];

export const experiences: Experience[] = [
  {
    company: "DotClick LLC",
    role: "Jr. MERN Stack Developer & AI Developer",
    duration: "Nov 2024 - Present",
    responsibilities: [
      "Engineered scalable SaaS and AI-integrated web platforms using React.js and Node.js",
      "Built high-performance REST APIs serving 1,000+ users with MongoDB and PostgreSQL",
      "Integrated LLM-based AI features into production applications for automation workflows",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "PostgreSQL", "OpenAI", "Groq AI", "TypeScript"],
    achievements: [
      "Architected multi-tenant SaaS platforms with shared database isolation",
      "Reduced manual processing by 40% through AI workflow automation",
    ],
  },
  {
    company: "Halcyon Solution",
    role: "MERN Stack Developer",
    duration: "Nov 2024 - Nov 2025",
    responsibilities: [
      "Delivered CRM, e-commerce, and real-time chat applications using Stripe, Socket.io, and role-based authentication",
      "Integrated Groq AI to automate business workflows, reducing manual processing by 40%",
      "Architected multi-tenant SaaS applications with shared database isolation, tenant configuration, and custom billing systems",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe", "Socket.io", "Groq AI"],
    achievements: [
      "Successfully delivered 5+ client projects across CRM, e-commerce, and chat domains",
      "Built scalable multi-tenant architecture with tenant isolation and custom billing",
    ],
  },
  {
    company: "Nubit Software Pvt Ltd",
    role: "MERN Stack Intern",
    duration: "Dec 2023 - Nov 2024",
    responsibilities: [
      "Built e-commerce and school management systems using React.js, Node.js, MongoDB, and REST APIs",
      "Collaborated in an Agile team environment throughout the software development lifecycle",
      "Participated in planning, development, testing, and deployment phases",
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "REST APIs"],
    achievements: [
      "Contributed to delivery of production-ready web applications",
      "Gained hands-on experience in full SDLC with Agile methodology",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "hiremind-ai",
    title: "HireMind AI",
    description: "LLM-powered resume parser that automatically extracts skills and experience, generates job-match scores, and provides an HR analytics dashboard with real-time candidate tracking.",
    techStack: ["Next.js", "OpenAI", "PostgreSQL", "Prisma", "Tailwind CSS"],
    features: [
      "LLM-powered resume parsing & skill extraction",
      "Automated job-match scoring",
      "HR analytics dashboard with real-time tracking",
      "Reduced manual resume screening by over 70%",
    ],
    category: "AI SaaS",
    icon: "Brain",
    gradient: "from-violet-600 to-indigo-600",
  },
  {
    id: "planflo",
    title: "Plan Flo",
    description: "Construction project CRM with 5 user portals featuring project tracking, contract lifecycle management, reporting, and approval workflows — a centralized construction operations platform.",
    techStack: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Socket.io"],
    features: [
      "5 user portal architecture",
      "Project tracking & contract lifecycle management",
      "Approval workflows & reporting",
      "Centralized construction operations",
    ],
    category: "SaaS",
    icon: "Kanban",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "kiosk-ai",
    title: "Kiosk AI Fashion",
    description: "AI-powered custom merchandise platform with live photo capture, AI-generated design creation, real-time product previews, and Stripe payment integration.",
    techStack: ["React", "Python", "OpenAI", "Stripe", "Tailwind CSS"],
    features: [
      "Live photo capture & AI design generation",
      "Real-time product previews",
      "Stripe payment integration",
      "Custom merchandise platform",
    ],
    category: "AI",
    icon: "Palette",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "slingvo-ai",
    title: "Slingvo – AI Powered Dialer",
    description: "Multi-line dialing SaaS platform with live dashboards, analytics, role-based access control, and AI-powered features that increased call throughput by 3x for sales teams.",
    techStack: ["Next.js", "WebRTC", "OpenAI", "PostgreSQL", "Redis"],
    features: [
      "Multi-line dialing system",
      "Live dashboards & analytics",
      "Role-based access control",
      "3x increase in call throughput",
    ],
    category: "AI SaaS",
    icon: "PhoneCall",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "flowlio",
    title: "Flowlio",
    description: "Multi-tenant project management platform with drag-and-drop boards, task assignments, collaboration features, and isolated workspaces with organization-level configurations.",
    techStack: ["React", "Node.js", "MongoDB", "Docker", "Redis"],
    features: [
      "Drag-and-drop board system",
      "Task assignments & team collaboration",
      "Isolated workspaces",
      "Organization-level configurations",
    ],
    category: "SaaS",
    icon: "Workflow",
    gradient: "from-cyan-500 to-blue-600",
  },
];

export const services: Service[] = [
  {
    title: "SaaS Development",
    description: "End-to-end SaaS product development from ideation to deployment with scalable multi-tenant architecture.",
    icon: "Cloud",
    features: ["Multi-tenant Architecture", "Subscription Management", "Scalable Infrastructure", "API Development"],
  },
  {
    title: "AI Integration",
    description: "Seamless integration of AI/LLM capabilities into existing products and workflows for intelligent automation.",
    icon: "Brain",
    features: ["LLM Integration", "AI Chatbots", "Process Automation", "Data Intelligence"],
  },
  {
    title: "CRM Development",
    description: "Custom CRM solutions tailored to business needs with advanced analytics and automation capabilities.",
    icon: "Users",
    features: ["Custom CRM Build", "Sales Pipeline Automation", "Customer Analytics", "Integration Ready"],
  },
  {
    title: "ERP Development",
    description: "Enterprise resource planning solutions using Microsoft Dynamics 365 F&O with X++ development.",
    icon: "Building2",
    features: ["Dynamics 365 F&O", "X++ Customization", "ERP Integration", "Business Process Automation"],
  },
  {
    title: "Full Stack Development",
    description: "Complete web application development using modern MERN/Next.js stack with premium UI/UX.",
    icon: "Code2",
    features: ["Frontend Development", "Backend Architecture", "Database Design", "DevOps & Deployment"],
  },
  {
    title: "Multi-Tenant SaaS",
    description: "Architect and build multi-tenant SaaS platforms with isolation, scalability, and enterprise security.",
    icon: "Layers",
    features: ["Tenant Isolation", "Shared Infrastructure", "Billing Integration", "Enterprise Security"],
  },
];

export const certifications: Certification[] = [
  {
    title: "MB-310 – Microsoft Dynamics 365 Finance",
    issuer: "Omni Academy & Consulting",
    date: "2024",
    credentialUrl: "#",
  },
  {
    title: "Rising Star – Certificate of Appreciation",
    issuer: "DotClick LLC",
    date: "2025",
  },
  {
    title: "Web Apps Development",
    issuer: "Saylani Mass IT Training Program",
    date: "2023",
    credentialUrl: "#",
  },
];

export const stats = [
  { label: "Years Experience", value: 2.5, suffix: "+" },
  { label: "Projects Delivered", value: 20, suffix: "+" },
  { label: "AI Developer", value: 100, suffix: "%" },
  { label: "MERN Expert", value: 100, suffix: "%" },
];

export const skillCategories = ["Frontend", "Backend", "Database", "AI", "ERP"] as const;
