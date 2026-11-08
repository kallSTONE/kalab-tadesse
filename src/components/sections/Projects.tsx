import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ProjectPreview from '../ui/ProjectPreview';
import { projects, Project } from '../../data/portfolio';

export default function Projects() {
  const [viewerProject, setViewerProject] = useState<Project | null>(null);

  const developmentProjects = projects.filter(
    (project) => project.category === 'development'
  );

  const handleOpenLive = (project: Project) => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenViewer = (project: Project) => setViewerProject(project);

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
          <SectionTitle
            title="Selected Projects"
            subtitle="Development and design work, organized for quick review"
          />

          <div className="space-y-6">
            <div className="flex w-full max-w-md border-b border-border" role="tablist" aria-label="Project categories">
              <span
                role="tab"
                aria-selected="true"
                className="w-1/2 border-b-2 border-primary px-4 py-2.5 text-center text-sm font-medium text-primary"
              >
                Development
              </span>
              <a
                href="/design"
                role="tab"
                aria-selected="false"
                className="w-1/2 border-b-2 border-transparent px-4 py-2.5 text-center text-sm font-medium text-text-secondary transition-colors hover:border-primary-30 hover:text-primary"
              >
                Design showcase
              </a>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {developmentProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLive={handleOpenLive}
                  onOpenViewer={handleOpenViewer}
                />
              ))}

              {developmentProjects.length === 0 && (
                <div className="col-span-full rounded-xl p-6 text-sm text-text-secondary">
                  No projects are available yet.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <ProjectPreview
        project={viewerProject}
        onClose={() => setViewerProject(null)}
      />
    </>
  );
}
