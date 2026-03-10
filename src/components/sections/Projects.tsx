import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ProjectPreview from '../ui/ProjectPreview';
import { projects, Project, ProjectCategory } from '../../data/portfolio';

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('development');
  const [viewerProject, setViewerProject] = useState<Project | null>(null);

  const visibleProjects = projects.filter((project) => project.category === activeTab);

  const handleOpenLive = (project: Project) => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenViewer = (project: Project) => setViewerProject(project);

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <SectionTitle
            title="Selected Projects"
            subtitle="Development and design work, organized for quick review"
          />

          <div className="space-y-6">
            <div className="inline-flex w-full max-w-md rounded-xl border border-border bg-bg-secondary p-1" role="tablist" aria-label="Project categories">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'development'}
                className={`w-1/2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'development' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'}`}
                onClick={() => setActiveTab('development')}
              >
                Development
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'design'}
                className={`w-1/2 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${activeTab === 'design' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'}`}
                onClick={() => setActiveTab('design')}
              >
                Design
              </button>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenLive={handleOpenLive}
                  onOpenViewer={handleOpenViewer}
                />
              ))}

              {visibleProjects.length === 0 && (
                <div className="col-span-full rounded-xl border border-border bg-bg-secondary p-6 text-sm text-text-secondary">
                  No projects are in this category yet.
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
