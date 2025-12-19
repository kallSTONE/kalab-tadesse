import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-xl font-semibold tracking-tight hover:text-primary transition-colors"
          >
            Kalab.T
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </a>
          </nav>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-bg-tertiary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
