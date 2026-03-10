import { useState } from 'react';
import { FolderOpen, Sparkles } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import ProjectGalleryModal from '../ui/ProjectGalleryModal';
import ProjectPreview from '../ui/ProjectPreview';
import { projects, Project } from '../../data/portfolio';

export default function Projects() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [viewerProject, setViewerProject] = useState<Project | null>(null);

  const handleOpenLive = (project: Project) => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenViewer = (project: Project) => {
    setIsGalleryOpen(false);
    setViewerProject(project);
  };

  return (
    <>
      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 py-24">
          <SectionTitle
            title="Selected Projects"
            subtitle="A collection of work I'm proud of"
          />

          <div className="relative overflow-hidden rounded-3xl border border-primary-30 bg-bg-secondary p-6 sm:p-8 md:p-10">
            <div className="pointer-events-none absolute -top-14 right-6 h-44 w-44 rounded-full bg-primary-10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-6 h-52 w-52 rounded-full bg-primary-10 blur-3xl" />

            <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="inline-flex items-center gap-2 rounded-full border border-primary-30 bg-primary-10 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-primary">
                  <Sparkles className="h-3.5 w-3.5" />
                  Project Experience
                </p>

                <h3 className="text-2xl font-semibold leading-tight text-text-primary sm:text-3xl">
                  Explore the work in an interactive project gallery.
                </h3>

                <p className="text-text-secondary leading-relaxed">
                  Browse modern project cards, open any live build in a new tab, or preview it inside a themed web viewer.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 sm:w-auto"
              >
                <FolderOpen className="h-4 w-4" />
                Open Project Gallery
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProjectGalleryModal
        isOpen={isGalleryOpen}
        projects={projects}
        onClose={() => setIsGalleryOpen(false)}
        onOpenLive={handleOpenLive}
        onOpenViewer={handleOpenViewer}
      />

      <ProjectPreview
        project={viewerProject}
        onClose={() => setViewerProject(null)}
      />
    </>
  );
}
