import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { social } from '../../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary-30 bg-bg-secondary hover:bg-primary-10 transition-all group"
            >
              <Mail className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm text-text-tertiary">Email</p>
                <p className="text-text-primary font-medium">{social.email}</p>
              </div>
            </a>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary-30 bg-bg-secondary hover:bg-primary-10 transition-all group"
            >
              <Linkedin className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm text-text-tertiary">LinkedIn</p>
                <p className="text-text-primary font-medium">Connect</p>
              </div>
            </a>

            <a
              href={social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary-30 bg-bg-secondary hover:bg-primary-10 transition-all group"
            >
              <Github className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm text-text-tertiary">GitHub</p>
                <p className="text-text-primary font-medium">Follow</p>
              </div>
            </a>

            <a
              href={social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary-30 bg-bg-secondary hover:bg-primary-10 transition-all group"
            >
              <Twitter className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
              <div>
                <p className="text-sm text-text-tertiary">Twitter</p>
                <p className="text-text-primary font-medium">Follow</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
