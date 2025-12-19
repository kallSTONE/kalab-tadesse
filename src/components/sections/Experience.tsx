import SectionTitle from '../ui/SectionTitle';
import { experience } from '../../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey"
        />

        <div className="space-y-12 max-w-3xl">
          {experience.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-border">
              <div className="absolute left-0 top-0 w-2 h-2 -ml-[5px] rounded-full bg-primary"></div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold text-text-primary">
                    {exp.role}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-text-secondary">
                    <span className="font-medium text-primary">
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
