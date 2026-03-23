// data/portfolio.js
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaPhp,
  FaRobot,
  FaGithub,
} from 'react-icons/fa';

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiSupabase,
  SiMysql,
  SiNotion,
  SiMongodb,
  SiExpress,
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
      { name: 'PHP', icon: FaPhp },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'PHP', icon: FaPhp },
      { name: 'Node.js', icon: FaNodeJs },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Express.js', icon: SiExpress },
      // { name: 'PostgreSQL', icon: SiPostgresql },
    ],
  },
  {
    category: 'Tools',
    items: [
      { name: 'AI', icon: FaRobot },
      { name: 'Supabase', icon: SiSupabase },
      { name: 'GitHub', icon: FaGithub },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Notion', icon: SiNotion },
    ],
  },
];


export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  images: string[];
}

export type ProjectCategory = 'development' | 'design';


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
    category: 'development',
    title: 'Education Management App',
    description: 'Online Education Platform with Learning page, Student and Admin dashboard.',
    tech: ['TypeScript', 'Next.js', 'Supabase', 'Tailwind', 'Git','GitHub'],
    liveUrl: 'https://earn-neway.vercel.app',
    images: ['/project-images/legal-training/Capture1.PNG', '/project-images/legal-training/Capture2.PNG', '/project-images/legal-training/Capture3.PNG', '/project-images/legal-training/Capture4.PNG', '/project-images/legal-training/Capture5.PNG', '/project-images/legal-training/Capture6.PNG', '/project-images/legal-training/Capture7.PNG']
  },
  {
    id: 'project-2',
    category: 'development',
    title: 'AI tool repository',
    description: 'Modern AI tool sharing application with article and toolkit creation and sharing features.',
    tech: ['Next.js', 'Tailwind', 'Typescript', 'Supabase', 'Git','GitHub'],
    liveUrl: 'https://simply-ai-orcin.vercel.app',
    images: ['/project-images/simply-ai/Capture1.PNG', '/project-images/simply-ai/Capture2.PNG', '/project-images/simply-ai/Capture3.PNG', '/project-images/simply-ai/Capture4.PNG', '/project-images/simply-ai/Capture5.PNG', '/project-images/simply-ai/Capture6.PNG', '/project-images/simply-ai/Capture7.PNG', '/project-images/simply-ai/Capture8.PNG', '/project-images/simply-ai/Capture9.PNG', '/project-images/simply-ai/Capture10.PNG']
  }, {
    id: 'project-3',
    category: 'development',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    tech: ['Php', 'HTML 5', 'MySQL', 'CSS3', 'Git','GitHub'],
    liveUrl: 'https://zemenassets.lovestoblog.com',
    images: ['/project-images/zemen-assets/Capture1.PNG', '/project-images/zemen-assets/Capture2.PNG', '/project-images/zemen-assets/Capture3.PNG', '/project-images/zemen-assets/Capture4.PNG', '/project-images/zemen-assets/Capture5.PNG', '/project-images/zemen-assets/Capture6.PNG']
  }, {
    id: 'project-4',
    category: 'development',
    title: 'Analytics Dashboard',
    description: 'Data visualization platform for Education management with interactive charts and reports.',
    tech: ['Typescript', 'Tailwind', 'Next.js', 'Supabase', 'Git','GitHub'],
    liveUrl: 'https://legal-training.vercel.app/admin/dashboard',
    images: ['/project-images/analytic-dashboard/Capture1.PNG', '/project-images/analytic-dashboard/Capture2.PNG', '/project-images/analytic-dashboard/Capture3.PNG', '/project-images/analytic-dashboard/Capture4.PNG', '/project-images/analytic-dashboard/Capture5.PNG', '/project-images/analytic-dashboard/Capture6.PNG', '/project-images/analytic-dashboard/Capture7.PNG']
  }, {
    id: 'project-5',
    category: 'development',
    title: 'Foreign Employment Agency',
    description: 'A full-stack website to  present services Professionaly and to ease the management of employer and employee requests. 3 Language Supported',
    tech: ['Typescript', 'Tailwind', 'Supabase', 'Vite', 'Git','GitHub'],
    liveUrl: 'https://foreign-employment-agency.vercel.app',
    images: ['/project-images/agency/Capture.PNG']
  },{
    id: 'project-6',
    category: 'development',
    title: 'Passport ICS management system',
    description: 'A full-stack passport filling and employee management system built for local businesses that gives passport service.',
    tech: ['Typescript', 'Tailwind', 'Supabase', 'Vite', 'Git','GitHub'],
    liveUrl: 'https://ics-process-management.vercel.app',
    images: ['/project-images/passport-flow/Capture1.PNG', '/project-images/passport-flow/Capture2.PNG', '/project-images/passport-flow/Capture3.PNG', '/project-images/passport-flow/Capture4.PNG', '/project-images/passport-flow/Capture5.PNG', '/project-images/passport-flow/Capture6.PNG', '/project-images/passport-flow/Capture7.PNG', '/project-images/passport-flow/Capture8.PNG']
  },{
    id: 'project-7',
    category: 'design',
    title: 'Graphic Design Showcase',
    description: 'Brand, layout, and visual communication pieces curated as a scroll-first gallery.',
    tech: ['Branding', 'Poster Design', 'Visual Layout', 'Graphics',],
    liveUrl: 'https://ics-process-management.vercel.app',
    images: [
      '/project-images/graphics/8.avif',
      '/project-images/graphics/3.avif',
      '/project-images/graphics/LogoCompiled.avif',
      '/project-images/graphics/taxshield.avif',
      '/project-images/graphics/1%20(2).avif',
      '/project-images/graphics/2.png',
      '/project-images/graphics/FoodBorne%20Disease.avif',
      '/project-images/graphics/10.png',
      '/project-images/graphics/logo2.avif',
      '/project-images/graphics/logo3.avif',
      '/project-images/graphics/logo6.avif',
      '/project-images/graphics/12.png',
      '/project-images/graphics/1.png',
      '/project-images/graphics/15.png',
      '/project-images/graphics/16%20(2).png',
      '/project-images/graphics/Echo%20Boy%20Logo.avif',
      '/project-images/graphics/tenawo.avif'
    ]
  }
];


export const experience: Experience[] = [
  {
    role: 'Software Developer Intern',
    company: 'WCU.',
    period: '2025 JUN - SEP',
    description: [
      'Developed a Property rental and sales platform with different access roles for local market place',
      'High-performing Admin panel for central control.',
      'Consistency in design across pages.'
    ]
  },
  {
    role: 'Full Stack Developer',
    company: 'የኢትዮፕያ ጠበቆች ማህበር ',
    period: '2025 - NOV-PRESENT',
    description: [
      'Created and managed course, lesson and quiz creation and management dashboard.',
      'Built a scalable student course access and tracking dashboard.',
      'Implemented strict course and lesson access'
    ]
  },
  {
    role: 'Adalo Mobile App Developer',
    company: 'Nisir Choir',
    period: '2025 - OCT',
    description: [
      'Created a song creation and edition with audio upload',
      'Create Dynamic Songs screen for each song that opens when card is clicked',
    ]
  }
];


export const social = {
  github: 'https://github.com/kallSTONE',
  linkedin: 'https://www.linkedin.com/in/kalab-tadesse',
  telegram: 'https://t.me/kalupt',
  email: 'kalupt9999@gmail.com'
};
