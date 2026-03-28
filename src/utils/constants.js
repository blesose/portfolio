import image from "../assets/images/Screenshot 2026-03-14 222942.png";
import Image from "../assets/images/Screenshot 2026-03-14 223947.png";
import picture from "../assets/images/Screenshot 2026-03-16 211136.png";
import pic from "../assets/images/Screenshot 2026-03-16 213436.png";

// Personal Information
export const PERSONAL_INFO = {
  name: 'Blessing Oga',
  title: 'Junior Full Stack Developer',
  location: 'Lagos, Nigeria',
  email: 'codesose.dev@gmail.com',
  phone: '+2347084752971',
  github: 'https://github.com/blesose',
  linkedin: 'https://www.linkedin.com/in/blessing-oga-53bb443a7/',
  instagram: 'https://instagram.com/bleso_se',
  twitter: 'https://twitter.com/bleso_se',
};

// Skills Data
export const SKILLS = {
  frontend: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript (ES6+)'],
  backend: ['Node.js', 'Express.js'],
  database: ['MongoDB', 'Mongoose'],
  tools: ['Git', 'GitHub', 'Postman', 'Swagger UI', 'Firebase', 'Vite'],
};

// Experience Data
export const EXPERIENCE = [
  {
    period: 'Feb 2025 – Nov 2025',
    title: 'Junior Full Stack Developer (Training & Projects)',
    company: 'IT Skill Center / Tech Academy',
    description: [
      'Completed intensive hands-on training in full stack web development (MERN stack)',
      'Built multiple full stack applications with RESTful APIs and database integration',
      'Documented API endpoints using Swagger UI',
      'Developed responsive, mobile-first user interfaces with React and Tailwind CSS',
      'Used Git and GitHub for version control and collaboration',
    ],
  },
];

// Projects Data
export const PROJECTS = [
  {
    id: 1,
    title: 'General Health Support Platform',
    category: 'fullstack',
    shortDescription: 'Full-stack health-focused web application with RESTful APIs',
    description: 'A comprehensive health support platform with API documentation using Swagger UI, responsive React frontend, and MongoDB database.',
    image: picture,
    githubUrl: 'https://github.com/blesose/mylab',
    liveUrl: 'https://mylabroyal.onrender.com',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS', 'Swagger UI'],
    featured: false,
  },
  {
    id: 2,
    title: 'Number Plate Generator System',
    category: 'fullstack',
    shortDescription: 'Web-based number plate generation system with API integration',
    description: 'A web application that generates custom number plates with preview functionality .',
    image: pic,
    githubUrl: 'https://github.com/blesose/vehiclePlate',
    technologies: [ 'Node.js', 'Express', 'HTML', 'CSS'],
    featured: false,
  },
  {
    id: 3,
    title: 'Tatt - Time Tracking & Task Management SaaS',
    category: 'frontend',
    // Dark-mode-first
    // shortDescription: 'task and time tracking system with authentication',
    // description: 'A SaaS application for tracking time and managing tasks with user authentication and detailed reports.',
    // image: image,
    // githubUrl: 'https://github.com/blesose/TATT',
    // technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    // featured: true,
    shortDescription: 'task and time tracking system with authentication',
    description: 'A SaaS application for tracking time and managing tasks with user authentication and detailed reports (frontend).',
    image: image,
    githubUrl: 'https://github.com/blesose/TATT',
    technologies: ['React', 'CSS'],
    featured: false,
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