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
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiNotion,
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
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  images: string[];
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
    tech: ['TypeScript', 'Next.js', 'Supabase', 'Tailwind'],
    liveUrl: 'https://legal-training.vercel.app',
    images: ['/project-images/legal-training/Capture1.PNG', '/project-images/legal-training/Capture2.PNG', '/project-images/legal-training/Capture3.PNG', '/project-images/legal-training/Capture4.PNG', '/project-images/legal-training/Capture5.PNG', '/project-images/legal-training/Capture6.PNG', '/project-images/legal-training/Capture7.PNG']
  },
  {
    id: 'project-2',
    title: 'AI tool repository',
    description: 'Modern AI tool sharing application with article and toolkit creation and sharing features.',
    tech: ['Next.js', 'Tailwind', 'Typescript', 'Supabase'],
    liveUrl: 'https://simply-ai-orcin.vercel.app',
    images: ['/project-images/simply-ai/Capture1.PNG', '/project-images/simply-ai/Capture2.PNG', '/project-images/simply-ai/Capture3.PNG', '/project-images/simply-ai/Capture4.PNG', '/project-images/simply-ai/Capture5.PNG', '/project-images/simply-ai/Capture6.PNG', '/project-images/simply-ai/Capture7.PNG', '/project-images/simply-ai/Capture8.PNG', '/project-images/simply-ai/Capture9.PNG', '/project-images/simply-ai/Capture10.PNG']
  }, {
    id: 'project-3',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
    tech: ['Php', 'HTML 5', 'MySQL', 'CSS3'],
    liveUrl: 'https://zemenassets.lovestoblog.com',
    images: ['/project-images/zemen-assets/Capture1.PNG', '/project-images/zemen-assets/Capture2.PNG', '/project-images/zemen-assets/Capture3.PNG', '/project-images/zemen-assets/Capture4.PNG', '/project-images/zemen-assets/Capture5.PNG', '/project-images/zemen-assets/Capture6.PNG']
  }, {
    id: 'project-4',
    title: 'Analytics Dashboard',
    description: 'Data visualization platform for Education management with interactive charts and reports.',
    tech: ['Typescript', 'Tailwind', 'Next.js', 'Supabase'],
    liveUrl: 'https://legal-training.vercel.app/admin/dashboard',
    images: ['/project-images/analytic-dashboard/Capture1.PNG', '/project-images/analytic-dashboard/Capture2.PNG', '/project-images/analytic-dashboard/Capture3.PNG', '/project-images/analytic-dashboard/Capture4.PNG' , '/project-images/analytic-dashboard/Capture5.PNG', '/project-images/analytic-dashboard/Capture6.PNG', '/project-images/analytic-dashboard/Capture7.PNG']
  }, {
    id: 'project-5',
    title: 'Passport ICS management system',
    description: 'A full-stack passport filling and employee management system built for local businesses that gives passport service.',
    tech: ['Typescript', 'Tailwind', 'Supabase', 'Vite'],
    liveUrl: 'https://ics-process-management.vercel.app',
    images: ['/project-images/passport-flow/Capture1.PNG', '/project-images/passport-flow/Capture2.PNG', '/project-images/passport-flow/Capture3.PNG', '/project-images/passport-flow/Capture4.PNG', '/project-images/passport-flow/Capture5.PNG', '/project-images/passport-flow/Capture6.PNG', '/project-images/passport-flow/Capture7.PNG', '/project-images/passport-flow/Capture8.PNG']
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
