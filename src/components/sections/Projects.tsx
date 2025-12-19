import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../data/portfolio';

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionTitle
          title="Selected Projects"
          subtitle="A collection of work I'm proud of"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
