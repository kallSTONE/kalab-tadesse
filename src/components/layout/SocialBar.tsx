import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { social } from '../../data/portfolio';

export default function SocialBar() {
  return (
    <div className="fixed right-6 md:left-6 md:right-auto bottom-0 z-40 flex flex-col items-center gap-6">
      <a
        href={social.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-tertiary hover:text-primary transition-colors"
        aria-label="GitHub"
      >
        <Github className="w-5 h-5" />
      </a>
      <a
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-tertiary hover:text-primary transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-5 h-5" />
      </a>
      <a
        href={social.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-text-tertiary hover:text-primary transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-5 h-5" />
      </a>
      <a
        href={`mailto:${social.email}`}
        className="text-text-tertiary hover:text-primary transition-colors"
        aria-label="Email"
      >
        <Mail className="w-5 h-5" />
      </a>
      <div className="w-px h-24 bg-border"></div>
    </div>
  );
}
