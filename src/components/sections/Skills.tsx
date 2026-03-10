import SectionTitle from '../ui/SectionTitle';
import { skills } from '../../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with regularly"
        />

        <div className="grid md:grid-cols-3 gap-10">
          {skills.map((group) => (
            <div key={group.category}>
              <h3 className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-text-tertiary">
                {group.category}
              </h3>

              <ul className="grid grid-cols-3 items-center md:grid-cols-2 gap-4">
                {group.items.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="flex items-center gap-3 rounded-md border border-border px-3 py-2 text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <Icon className="text-xl text-text-tertiary" />
                    <span className="text-sm font-medium hidden md:block">{name}</span>
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
