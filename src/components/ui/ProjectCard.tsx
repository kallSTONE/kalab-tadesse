import { ExternalLink, MonitorSmartphone } from 'lucide-react';
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
  const visibleTech = project.tech.slice(0, 4);
  const hiddenTechCount = Math.max(project.tech.length - visibleTech.length, 0);

  return (
    <article className="group relative overflow-hidden rounded-xl border border-border bg-bg-primary p-3 sm:p-4">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 gradient-primary" />

      <div className="relative space-y-3">
        <div className="overflow-hidden rounded-lg border border-border bg-bg-tertiary">
          {project.images?.[0] && (
            <img
              src={project.images[0]}
              alt={project.title}
              className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        <div className="space-y-1.5">
          <h3 className="text-base font-semibold text-text-primary sm:text-lg">
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed text-text-secondary sm:text-sm">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-10 px-2.5 py-1 text-[11px] font-medium text-primary"
            >
              {tech}
            </span>
          ))}
          {hiddenTechCount > 0 && (
            <span className="rounded-full bg-bg-tertiary px-2.5 py-1 text-[11px] font-medium text-text-tertiary">
              +{hiddenTechCount}
            </span>
          )}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onOpenLive(project)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open Live
          </button>

          <button
            type="button"
            onClick={() => onOpenViewer(project)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-30 bg-primary-10 px-3 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary-20"
          >
            <MonitorSmartphone className="h-3.5 w-3.5" />
            Web Viewer
          </button>
        </div>
      </div>
    </article>
  );
}
