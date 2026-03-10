import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ProjectPreview from '../ui/ProjectPreview';
import { projects, Project } from '../../data/portfolio';

export default function Projects() {
  const [previewProject, setPreviewProject] = useState<Project | null>(null);

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <SectionTitle
            title="Selected Projects"
            subtitle="A collection of work I'm proud of"
          />

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onPreview={setPreviewProject}
              />
            ))}
          </div>
        </div>
      </section>

      <ProjectPreview
        project={previewProject}
        onClose={() => setPreviewProject(null)}
      />
    </>
  );
}
