import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle title="About Me" />

        <div className="max-w-3xl space-y-6 text-lg text-text-secondary leading-relaxed">
          <p>
            I'm a full-stack developer with over 5 years of experience building scalable web applications.
            My journey in software development began with a curiosity for how things work,
            which evolved into a passion for creating efficient, user-centered solutions.
          </p>

          <p>
            I specialize in modern JavaScript frameworks and have a strong foundation in both frontend
            and backend technologies. My approach combines technical excellence with a deep understanding
            of user needs, ensuring that every project I work on is both functional and delightful to use.
          </p>

          <p>
            When I'm not coding, I enjoy contributing to open-source projects, writing technical articles,
            and staying up-to-date with the latest developments in web technologies.
            I believe in continuous learning and sharing knowledge with the developer community.
          </p>
        </div>
      </div>
    </section>
  );
}
