import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with regularly"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <li
                    key={skill}
                    className="text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
