// data/portfolio.js
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'Git', icon: FaGitAlt },
    ],
  },
];


export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  image: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'Education Management App',
    description: 'Online Education Platform with Learning page, Student and Admin dashboard.',
    tech: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
    liveUrl: 'https://legal-training.vercel.app',
    image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-2',
    title: 'Analytics Dashboard',
    description: 'Data visualization platform for Education management with interactive charts and reports.',
    tech: ['React', 'D3.js', 'Express', 'MongoDB'],
    liveUrl: 'https://legal-training.vercel.app/admin/dashboard',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'project-3',
    title: 'AI tool repository',
    description: 'Modern AI tool sharing application with article and toolkit creation and sharing features.',
    tech: ['Next.js', 'GraphQL', 'Prisma', 'PostgreSQL'],
    liveUrl: 'https://simply-ai-orcin.vercel.app',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800'
  },{
    id: 'project-4',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    tech: ['Php', 'HTML 5', 'MySQL', 'CSS3'],
    liveUrl: 'https://zemenassets.lovestoblog.com',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
];

export const experience: Experience[] = [
  {
    role: 'Senior Frontend Developer',
    company: 'Tech Innovation Inc.',
    period: '2022 - Present',
    description: [
      'Led development of customer-facing web applications using React and TypeScript',
      'Improved application performance by 40% through code optimization',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions Co.',
    period: '2020 - 2022',
    description: [
      'Built and maintained RESTful APIs using Node.js and Express',
      'Developed responsive web applications with modern frameworks',
      'Collaborated with design team to implement pixel-perfect UIs'
    ]
  },
  {
    role: 'Frontend Developer',
    company: 'StartUp Studio',
    period: '2018 - 2020',
    description: [
      'Created reusable component libraries for multiple projects',
      'Implemented responsive designs across various devices',
      'Worked closely with UX designers to improve user experience'
    ]
  }
];

// export const skills: Skill[] = [
//   {
//     category: 'Frontend',
//     items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js']
//   },
//   {
//     category: 'Backend',
//     items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL']
//   },
//   {
//     category: 'Tools & Other',
//     items: ['Git', 'Docker', 'AWS', 'Jest', 'Figma']
//   }
// ];

export const social = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'hello@example.com'
};
