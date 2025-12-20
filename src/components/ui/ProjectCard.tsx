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
      <div className="relative overflow-hidden rounded-lg border border-border bg-bg-secondary p-6 transition-all hover:border-primary-30">
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
              {project.title}
            </h3>

            <div className="flex items-center gap-3">
              {/* Preview button */}
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
                className="px-3 py-1 text-xs font-medium bg-primary-10 text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover background image */}
        {isHovered && project.images?.[0] && (
          <div className="absolute inset-0 -z-10 opacity-20 transition-opacity">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
