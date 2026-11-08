import { ChevronLeft, ChevronRight, ExternalLink, Images, MonitorSmartphone } from 'lucide-react';
import { useState } from 'react';
import { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onOpenLive: (project: Project) => void;
  onOpenViewer: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onOpenLive,
  onOpenViewer,
}: ProjectCardProps) {
  const [activeImage, setActiveImage] = useState(0);
  const visibleTech = project.tech.slice(0, 4);
  const hiddenTechCount = Math.max(project.tech.length - visibleTech.length, 0);
  const imageCount = project.images.length;
  const currentImage = project.images[activeImage] ?? project.images[0];

  const showPreviousImage = () => {
    setActiveImage((current) => (current - 1 + imageCount) % imageCount);
  };

  const showNextImage = () => {
    setActiveImage((current) => (current + 1) % imageCount);
  };

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-bg-secondary shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-30 hover:shadow-lg">
      <div className="relative aspect-[16/10] overflow-hidden bg-bg-tertiary">
        {currentImage ? (
          <img
            src={currentImage}
            alt={`${project.title} preview ${activeImage + 1}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-text-tertiary">
            Preview unavailable
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-12">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white">
            <Images className="h-3.5 w-3.5" />
            {imageCount} {imageCount === 1 ? 'screen' : 'screens'}
          </span>
          {imageCount > 1 && (
            <div className="flex gap-1.5">
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label={`Previous ${project.title} image`}
                className="rounded-full bg-black/45 p-1.5 text-white transition-colors hover:bg-primary"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label={`Next ${project.title} image`}
                className="rounded-full bg-black/45 p-1.5 text-white transition-colors hover:bg-primary"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-4 p-5">

        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-text-primary sm:text-lg">
              {project.title}
            </h3>

            <button
              type="button"
              onClick={() => onOpenViewer(project)}
              aria-label={`Open ${project.title} viewer`}
              className="inline-flex items-center rounded-md p-1 text-text-secondary transition-colors hover:bg-primary-10 hover:text-primary"
            >
              <MonitorSmartphone className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-xs leading-relaxed text-text-secondary sm:text-sm">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 && (
            <span className="rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-text-tertiary">
              +{hiddenTechCount}
            </span>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onOpenLive(project)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2.5 text-xs font-medium text-white transition-opacity hover:opacity-90"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Visit project
          </button>
          <button
            type="button"
            onClick={() => onOpenViewer(project)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-3 py-2.5 text-xs font-medium text-text-primary transition-colors hover:border-primary-30 hover:text-primary"
          >
            <MonitorSmartphone className="h-3.5 w-3.5" />
            Preview
          </button>
        </div>
      </div>
    </article>
  );
}
