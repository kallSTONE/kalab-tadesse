import {
  Github,
  Send,
  Linkedin,
  Mail,
  Moon,
  Sun,
  User,
  Briefcase,
  Code,
  Folder,
  Mail as ContactIcon,
} from 'lucide-react';
import { social } from '../../data/portfolio';
import { useTheme } from '../../hooks/useTheme';
import { useState } from 'react';

export default function IconSidebar() {
  const { theme, toggleTheme } = useTheme();
  const [hovered, setHovered] = useState<string | null>(null);

  const navItems = [
    { label: 'About', icon: <User className="w-5 h-5" />, href: '#about' },
    { label: 'Skills', icon: <Code className="w-5 h-5" />, href: '#skills' },
    { label: 'Projects', icon: <Folder className="w-5 h-5" />, href: '#projects' },
    { label: 'Experience', icon: <Briefcase className="w-5 h-5" />, href: '#experience' },
    { label: 'Contact', icon: <ContactIcon className="w-5 h-5" />, href: '#contact' },
  ];

  const socialItems = [
    { label: 'GitHub', icon: <Github className="w-5 h-5" />, href: social.github },
    { label: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, href: social.linkedin },
    { label: 'Telegram', icon: <Send className="w-5 h-5" />, href: social.telegram },
    { label: 'Email', icon: <Mail className="w-5 h-5" />, href: `mailto:${social.email}` },
  ];

  return (
    <aside className="fixed bottom-0 top-0 left-0 md:left-4 z-40 flex h-full flex-col items-center justify-between border-r border-border bg-bg-primary px-3 py-8 md:border-r-0 md:bg-transparent md:px-0">
      <div className="flex flex-col items-center gap-6 relative mb-12">
        {navItems.map((item) => (
          <div
            key={item.label}
            className="relative flex items-center"
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href={item.href}
              className="text-text-tertiary transition-colors hover:text-text-primary"
              aria-label={item.label}
            >
              {item.icon}
            </a>
            {hovered === item.label && (
              <span className="absolute left-8 whitespace-nowrap rounded border border-border bg-bg-secondary px-2 py-1 text-xs text-text-primary">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 relative">
        {socialItems.map((item) => (
          <div
            key={item.label}
            className="relative flex items-center"
            onMouseEnter={() => setHovered(item.label)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary transition-colors hover:text-primary"
              aria-label={item.label}
            >
              {item.icon}
            </a>
            {hovered === item.label && (
              <span className="absolute left-8 whitespace-nowrap rounded border border-border bg-bg-secondary px-2 py-1 text-xs text-text-primary">
                {item.label}
              </span>
            )}
          </div>
        ))}

        <div className="w-px h-20 bg-border" />

        <div
          className="relative flex items-center"
          onMouseEnter={() => setHovered('Toggle Theme')}
          onMouseLeave={() => setHovered(null)}
        >
          <button
            onClick={toggleTheme}
            className="rounded-md border border-border p-2 text-text-secondary transition-colors hover:text-text-primary"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          {hovered === 'Toggle Theme' && (
            <span className="absolute left-8 whitespace-nowrap rounded border border-border bg-bg-secondary px-2 py-1 text-xs text-text-primary">
              Toggle Theme
            </span>
          )}
        </div>
      </div>
    </aside>
  );
}
