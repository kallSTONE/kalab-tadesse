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
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-bg-primary p-4 sm:p-5">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 gradient-primary" />

      <div className="relative space-y-4">
        <div className="overflow-hidden rounded-xl border border-border bg-bg-tertiary">
          {project.images?.[0] && (
            <img
              src={project.images[0]}
              alt={project.title}
              className="aspect-[16/10] h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-text-primary sm:text-xl">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-primary-10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => onOpenLive(project)}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <ExternalLink className="h-4 w-4" />
            Open Live Project
          </button>

          <button
            type="button"
            onClick={() => onOpenViewer(project)}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary-30 bg-primary-10 px-4 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary-20"
          >
            <MonitorSmartphone className="h-4 w-4" />
            Open In Web Viewer
          </button>
        </div>
      </div>
    </article>
  );
}
