import { ExternalLink, Eye } from 'lucide-react';
import { useState } from 'react';
import { Project } from '../../data/portfolio';

interface ProjectCardProps {
  project: Project;
  onPreview: (project: Project) => void;
}

export default function ProjectCard({
  project,
  onPreview,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.open(project.liveUrl, '_blank')}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-secondary gradient-primary p-5 md:p-6 transition-all hover:border-primary-30">
        <div className="relative z-10 flex flex-col gap-5">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl md:text-2xl font-semibold text-text-primary group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <div className="flex items-center gap-3">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onPreview(project);
                }}
                aria-label="Preview project"
                className="text-text-tertiary hover:text-primary transition-colors"
              >
                <Eye className="w-5 h-5 group-hover:text-primary" />
              </button>

              <ExternalLink className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary-10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary-10 blur-2xl" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-border bg-bg-tertiary shadow-xl">
              {project.images?.[0] && (
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              )}
            </div>
          </div>
        </div>

        {isHovered && project.images?.[0] && (
          <div className="pointer-events-none absolute inset-0 opacity-10 transition-opacity">
            <img
              src={project.images[0]}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
