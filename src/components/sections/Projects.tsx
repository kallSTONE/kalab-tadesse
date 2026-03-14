import { useMemo, useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ProjectPreview from '../ui/ProjectPreview';
import { projects, Project, ProjectCategory } from '../../data/portfolio';

const CAROUSEL_HEIGHT_CLASS = 'h-[420px] sm:h-[540px] lg:h-[620px]';

const createLoopedTrack = (images: string[]) => {
  if (images.length === 0) return images;
  return [...images, ...images];
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('development');
  const [viewerProject, setViewerProject] = useState<Project | null>(null);
  const [loadedDesignImages, setLoadedDesignImages] = useState<Record<string, true>>({});

  const developmentProjects = projects.filter(
    (project) => project.category === 'development'
  );
  const designProject =
    projects.find((project) => project.category === 'design') ?? null;
  const designImages = designProject?.images ?? [];

  const [leftColumnImages, rightColumnImages] = useMemo(() => {
    const left = designImages.filter((_, index) => index % 2 === 0);
    const right = designImages.filter((_, index) => index % 2 !== 0);

    if (left.length === 0 && right.length === 0) {
      return [[], []] as const;
    }

    if (left.length === 0) {
      return [right, right] as const;
    }

    if (right.length === 0) {
      return [left, left] as const;
    }

    return [left, right] as const;
  }, [designImages]);

  const leftTrackImages = useMemo(
    () => createLoopedTrack(leftColumnImages),
    [leftColumnImages]
  );

  const rightTrackImages = useMemo(
    () => createLoopedTrack(rightColumnImages),
    [rightColumnImages]
  );

  const handleOpenLive = (project: Project) => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenViewer = (project: Project) => setViewerProject(project);

  const markDesignImageLoaded = (imagePath: string) => {
    setLoadedDesignImages((current: Record<string, true>) => {
      if (current[imagePath]) return current;
      return { ...current, [imagePath]: true };
    });
  };

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
              <div className="space-y-4">
                {designImages.length > 0 ? (
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <article className={`overflow-hidden rounded-xl border border-border bg-bg-secondary p-2 sm:p-3 ${CAROUSEL_HEIGHT_CLASS}`}>
                      <div
                        className="animate-vertical-scroll space-y-2 sm:space-y-3 will-change-transform"
                        style={{ animationDuration: '26s' }}
                      >
                        {leftTrackImages.map((image: string, index: number) => (
                          <div
                            key={`design-left-${image}-${index}`}
                            className="relative overflow-hidden rounded-lg border border-border bg-bg-primary"
                          >
                            {!loadedDesignImages[image] && (
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 animate-pulse bg-bg-tertiary"
                              />
                            )}
                            <img
                              src={image}
                              alt={`${designProject?.title ?? 'Design project'} preview ${index + 1}`}
                              className={`block h-auto w-full transition-opacity duration-300 ${loadedDesignImages[image] ? 'opacity-100' : 'opacity-0'
                                }`}
                              loading="lazy"
                              fetchPriority="low"
                              decoding="async"
                              onLoad={() => markDesignImageLoaded(image)}
                              onError={() => markDesignImageLoaded(image)}
                              draggable={false}
                            />
                          </div>
                        ))}
                      </div>
                    </article>

                    <article className={`overflow-hidden rounded-xl border border-border bg-bg-secondary p-2 sm:p-3 ${CAROUSEL_HEIGHT_CLASS}`}>
                      <div
                        className="animate-vertical-scroll space-y-2 sm:space-y-3 will-change-transform"
                        style={{ animationDuration: '30s', animationDirection: 'reverse' }}
                      >
                        {rightTrackImages.map((image: string, index: number) => (
                          <div
                            key={`design-right-${image}-${index}`}
                            className="relative overflow-hidden rounded-lg border border-border bg-bg-primary"
                          >
                            {!loadedDesignImages[image] && (
                              <div
                                aria-hidden="true"
                                className="absolute inset-0 animate-pulse bg-bg-tertiary"
                              />
                            )}
                            <img
                              src={image}
                              alt={`${designProject?.title ?? 'Design project'} preview ${index + 1}`}
                              className={`block h-auto w-full transition-opacity duration-300 ${loadedDesignImages[image] ? 'opacity-100' : 'opacity-0'
                                }`}
                              loading="lazy"
                              fetchPriority="low"
                              decoding="async"
                              onLoad={() => markDesignImageLoaded(image)}
                              onError={() => markDesignImageLoaded(image)}
                              draggable={false}
                            />
                          </div>
                        ))}
                      </div>
                    </article>
                  </div>
                ) : (
                  <div className="rounded-xl p-6 text-sm text-text-secondary">
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
