import { useState } from 'react';
import { Moon, Sun, MenuIcon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import SocialBar from './SocialBar';

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [showSocialBar, setShowSocialBar] = useState(false);

  const handleToggleSocialBar = () => {
    setShowSocialBar((prev) => !prev);
  };

  return (
    <>
      <header className="fixed md:hidden top-0 left-0 right-0 z-50 glass border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleToggleSocialBar}
              className="rounded-md border border-border p-2 text-text-secondary transition-colors hover:text-text-primary"
              aria-label="Toggle sidebar"
            >
              <MenuIcon className="w-6 h-6" />
            </button>

            <button
              onClick={toggleTheme}
              className="rounded-md border border-border p-2 text-text-secondary transition-colors hover:text-text-primary"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {showSocialBar && (
        <div className="fixed inset-0 top-16 z-40 md:hidden bg-black/30 backdrop-blur-sm flex justify-start">
          <SocialBar />
          <div
            className="flex-1"
            onClick={() => setShowSocialBar(false)}
          ></div>
        </div>
      )}

      <div className="hidden md:block">
        <SocialBar />
      </div>

    </>
  );
}
