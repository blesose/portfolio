import image from "../assets/images/Screenshot 2026-07-17 140657.png";
// import Image from "../assets/images/Screenshot 2026-0";
import picture from "../assets/images/Screenshot 2026-07-17 140751.png";
import pic from "../assets/images/Screenshot 2026-07-17 140900.png";


// Personal Information
export const PERSONAL_INFO = {
  name: 'Blessing Oga',
  title: 'Junior Full Stack Developer',
  location: 'Lagos, Nigeria',
  email: 'codesose.dev@gmail.com',
  available: 'Remote • Worldwide',
  phone: '+2347084752971',
  github: 'https://github.com/blesose',
  linkedin: 'https://www.linkedin.com/in/blessing-oga-53bb443a7/',
  instagram: 'https://instagram.com/bleso_se',
  twitter: 'https://twitter.com/bleso_se',
};

// Skills Data
export const SKILLS = {
  frontend: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS',  ],
  backend: ['Node.js', 'Express.js'],
  database: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Mongoose', 'Swagger UI /OpenAPI'],
  tools: ['Git', 'GitHub', 'Postman', 'Vite', 'React Testing Library', 'Unit Testing', 'Integration Testing'],
};

// Experience Data
export const EXPERIENCE = [
  {
    period: 'Feb 2025 – Nov 2025',
    title: 'Software Engineering Trainee',
    company: 'IT Skill Center / Tech Academy',
    description: [
      'Applied clean code principles while building production-style projects',
      'Collaborated using Git and GitHub through feature-based workflows',
      'Built full-stack web applications using modern software engineering practices.',
      'Designed and documented RESTful APIs using Swagger/OpenAPI',
      'Developed responsive user interfaces and integrated backend services',
      'Used Git and GitHub for version control and collaboration',
    ],
  },
];

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: 'INK',
    category: 'SaaS • Productivity',
    role: 'Personal Project • Full-Stack Developer',
    shortDescription: 'Real-Time Collaborative Whiteboard',
    description: 'Built a real-time collaborative whiteboard enabling teams to draw, communicate, and collaborate seamlessly with live synchronization.',
    image: picture,
    githubUrl: 'https://github.com/blesose/INK',
    liveUrl: 'https://ink-psi-livid.vercel.app',
    technologies: ['React', 'TypeScript', 'Node.js', 'SocketIO', 'PostGreSQL', 'TailwindCSS', 'Prisma'],
    featured: false,
    infoTitle: "Engineering Highlights",
    highlights: [
    "Real-time collaborative drawing",
    "Authentication & workspaces",
    "Socket.IO synchronization",
    "PostgreSQL with Prisma ORM"
  ]
  },
  {
    id: 2,
    title: 'Refilia',
    category: 'Logistics • Commerce',
    role: 'Team Project • Frontend Developer',
    shortDescription: 'Gas Delivery Platform',
    description: 'Contributed to the frontend of a modern gas delivery platform focused on simplifying cylinder refill ordering and tracking.',
    image: pic,
    githubUrl: 'coming soon',
    technologies: [ 'React', 'TailwindCSS', 'JavaScript', 'HTML5'],
    featured: false,
    infoTitle: "My Contributions",
     highlights: [
    "Frontend development in a collaborative team",
    "Responsive mobile-first experience",
    "Integrated REST APIs",
    "Modern logistics ordering interface"
  ]
  },
  {
    id: 3,
    title: 'MyLab',
    category: 'HealthTech',
    role: 'Personal Project • Full-Stack Developer',
    shortDescription: 'MyLab Health & Wellness',
    description: 'Developed a comprehensive wellness platform featuring personalized health modules, authentication, and RESTful backend services.',
    image: image,
    githubUrl: 'https://github.com/blesose/MyLabRoyal',
    liveUrl: 'https://mylabroyal.onrender.com',
    technologies: ['React', 'TailwindCSS', 'Express', 'JavaScript', 'Node.js' ],
    featured: false,
    infoTitle: "Engineering Highlights",
    highlights: [
    "Authentication and user dashboards",
    "Multiple health and wellness modules",
    "RESTful backend services",
    "Responsive full-stack application"
  ]
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'GA Redivos',
    // role: 'Tech Lead',
    // company: 'TechCorp',
    content: 'Blessing is an exceptional junior developer with a strong grasp of the MERN stack. Her attention to detail and problem-solving skills are impressive.',
    image: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 2,
    name: 'Miracle Uwaifo',
    // role: 'user',
    // company: 'DevStudio',
    content: 'Working with Blessing was a pleasure. She delivered high-quality code and was always eager to learn and improve.',
    image: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 3,
    name: 'Marius',
    // role: 'client',
    // company: 'InnovateHub',
    content: 'Blessing shows great promise as a full stack developer. Her projects demonstrate solid understanding of both frontend and backend concepts.',
    image: 'https://i.pravatar.cc/150?img=3',
  },
];