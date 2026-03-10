import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ProjectPreview from '../ui/ProjectPreview';
import { projects, Project, ProjectCategory } from '../../data/portfolio';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('development');
  const [viewerProject, setViewerProject] = useState<Project | null>(null);

  const developmentProjects = projects;
  const designProject =
    projects.find((project) => project.category === 'design') ?? null;
  const designImages = designProject?.images ?? [];

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
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'development'}
                className={`w-1/2 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'development' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
                onClick={() => setActiveTab('development')}
              >
                Development
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'design'}
                className={`w-1/2 border-b-2 px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'design' ? 'border-primary text-primary' : 'border-transparent text-text-secondary hover:text-text-primary'}`}
                onClick={() => setActiveTab('design')}
              >
                Design
              </button>
            </div>

            {activeTab === 'development' ? (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {designImages.map((image, index) => (
                  <article key={`${designProject?.id}-image-${index}`} className="overflow-hidden rounded-xl">
                    <img
                      src={image}
                      alt={`${designProject?.title ?? 'Design project'} preview ${index + 1}`}
                      className="aspect-[16/10] h-full w-full object-cover"
                      loading="lazy"
                    />
                  </article>
                ))}

                {designImages.length === 0 && (
                  <div className="col-span-full rounded-xl p-6 text-sm text-text-secondary">
                    No design images are available yet.
                  </div>
                )}
              </div>
            )}
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
