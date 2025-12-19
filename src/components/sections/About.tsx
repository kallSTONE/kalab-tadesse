import SectionTitle from '../ui/SectionTitle';

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle title="About Me" />

        <div className="max-w-3xl space-y-5 text-lg text-text-secondary leading-relaxed">
          <p>
            I’m a full-stack developer with 2 years of experience building scalable,
            user-focused web applications. I enjoy turning complex problems into
            clean, practical solutions with a strong emphasis on performance and usability.
          </p>

          <p>
            I work primarily with modern JavaScript frameworks across both frontend and backend,
            and I value writing maintainable code that can grow with a product over time.
          </p>

          <p>
            AI plays an important role in my development workflow—from accelerating research
            and debugging to improving code quality and productivity. That said, I treat AI
            as a tool, not a source of truth: every output is reviewed, refined, and validated
            to ensure it meets real-world requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
