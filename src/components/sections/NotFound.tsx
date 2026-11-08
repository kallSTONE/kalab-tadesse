import { ArrowLeft, Github, Linkedin, Mail, Send } from 'lucide-react';
import { social } from '../../data/portfolio';

const socialLinks = [
  { label: 'GitHub', href: social.github, icon: Github },
  { label: 'LinkedIn', href: social.linkedin, icon: Linkedin },
  { label: 'Telegram', href: social.telegram, icon: Send },
  { label: 'Email', href: `mailto:${social.email}`, icon: Mail },
];

export default function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-88px)] items-center justify-center">
      <div className="mx-auto w-full max-w-3xl px-6 py-24 text-center lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          404 error
        </p>
        <h1 className="text-6xl font-semibold tracking-tight text-text-primary sm:text-8xl">
          Page not found
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-text-secondary sm:text-lg">
          The page you are looking for does not exist or may have moved. Explore my
          projects or connect with me through one of the links below.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            View projects
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-primary-30 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back home
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-primary-30 hover:text-primary"
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
