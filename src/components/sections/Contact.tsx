import { Mail, Github, Linkedin, Send } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { social } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <SectionTitle
          title="Get In Touch"
          subtitle="Let's create something great together"
        />

        <div className="max-w-3xl space-y-8">
          <p className="text-lg text-text-secondary leading-relaxed">
            I'm always interested in hearing about new opportunities, projects, or just having a chat
            about technology. Feel free to reach out through any of the channels below.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={`mailto:${social.email}`}
              className="group flex items-center gap-3 rounded-md border border-border p-4 transition-colors hover:border-primary-30"
            >
              <Mail className="h-5 w-5 text-text-tertiary transition-colors group-hover:text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-text-tertiary">Email</p>
                <p className="text-text-primary font-medium">{social.email}</p>
              </div>
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-md border border-border p-4 transition-colors hover:border-primary-30"
            >
              <Linkedin className="h-5 w-5 text-text-tertiary transition-colors group-hover:text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-text-tertiary">LinkedIn</p>
                <p className="text-text-primary font-medium">Connect</p>
              </div>
            </a>

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-md border border-border p-4 transition-colors hover:border-primary-30"
            >
              <Github className="h-5 w-5 text-text-tertiary transition-colors group-hover:text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-text-tertiary">GitHub</p>
                <p className="text-text-primary font-medium">Follow</p>
              </div>
            </a>

            <a
              href={social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-md border border-border p-4 transition-colors hover:border-primary-30"
            >
              <Send className="h-5 w-5 text-text-tertiary transition-colors group-hover:text-primary" />
              <div>
                <p className="text-xs uppercase tracking-[0.14em] text-text-tertiary">Telegram</p>
                <p className="text-text-primary font-medium">Message</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
