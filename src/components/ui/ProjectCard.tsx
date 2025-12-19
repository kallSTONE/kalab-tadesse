import { ExternalLink } from 'lucide-react';
import { Project } from '../../data/portfolio';
import { useState } from 'react';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative overflow-hidden rounded-lg border border-border bg-bg-secondary p-6 transition-all hover:border-primary-30">
          <div className="flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <ExternalLink className="w-5 h-5 text-text-tertiary group-hover:text-primary transition-colors" />
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

          {isHovered && (
            <div className="absolute inset-0 -z-10 opacity-20 transition-opacity">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
