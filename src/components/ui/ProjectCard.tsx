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
    <article className="rounded-xl p-3 sm:p-4">
      <div className="space-y-3">

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
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-primary-30 hover:text-primary"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open Live
          </button>

          <button
            type="button"
            onClick={() => onOpenViewer(project)}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-xs font-medium text-text-primary transition-colors hover:border-primary-30 hover:text-primary"
          >
            <MonitorSmartphone className="h-3.5 w-3.5" />
            Web Viewer
          </button>
        </div>
      </div>
    </article>
  );
}
