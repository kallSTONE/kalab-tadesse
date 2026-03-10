import SectionTitle from '../ui/SectionTitle';
import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center border-t border-border">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="space-y-12 max-w-3xl">
          {experience.map((exp, index) => (
            <div key={index} className="relative border-l border-border pl-6">
              <div className="absolute -left-[5px] top-2 h-2 w-2 rounded-full border border-border bg-bg-primary"></div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-secondary">
                    <span className="font-medium text-text-primary">
                      {exp.company}
                    </span>
                    <span className="hidden sm:inline text-text-tertiary">•</span>
                    <span className="text-sm text-text-tertiary">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-text-secondary leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
