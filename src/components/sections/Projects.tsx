import { useEffect, useRef, useState, type WheelEvent } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import ProjectPreview from '../ui/ProjectPreview';
import { projects, Project, ProjectCategory } from '../../data/portfolio';

const SCROLL_DELTA_THRESHOLD = 24;
const WHEEL_LOCK_MS = 420;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('development');
  const [viewerProject, setViewerProject] = useState<Project | null>(null);
  const [activeDesignImageIndex, setActiveDesignImageIndex] = useState(0);
  const wheelLockRef = useRef(false);
  const wheelUnlockTimerRef = useRef<number | null>(null);

  const developmentProjects = projects.filter(
    (project) => project.category === 'development'
  );
  const designProject =
    projects.find((project) => project.category === 'design') ?? null;
  const designImages = designProject?.images ?? [];
  const designLastIndex = Math.max(designImages.length - 1, 0);

  useEffect(() => {
    if (activeDesignImageIndex > designLastIndex) {
      setActiveDesignImageIndex(designLastIndex);
    }
  }, [activeDesignImageIndex, designLastIndex]);

  useEffect(() => {
    return () => {
      if (wheelUnlockTimerRef.current !== null) {
        window.clearTimeout(wheelUnlockTimerRef.current);
      }
    };
  }, []);

  const lockWheelNavigation = () => {
    wheelLockRef.current = true;

    if (wheelUnlockTimerRef.current !== null) {
      window.clearTimeout(wheelUnlockTimerRef.current);
    }

    wheelUnlockTimerRef.current = window.setTimeout(() => {
      wheelLockRef.current = false;
      wheelUnlockTimerRef.current = null;
    }, WHEEL_LOCK_MS);
  };

  const handleDesignWheel = (event: WheelEvent<HTMLDivElement>) => {
    if (designImages.length <= 1) return;

    const delta = event.deltaY;
    if (Math.abs(delta) < SCROLL_DELTA_THRESHOLD) return;

    if (wheelLockRef.current) {
      event.preventDefault();
      return;
    }

    const direction = delta > 0 ? 1 : -1;
    const isAtFirstImage = activeDesignImageIndex === 0;
    const isAtLastImage = activeDesignImageIndex === designLastIndex;

    // At boundaries we allow normal page scroll to continue to the next section.
    if ((direction < 0 && isAtFirstImage) || (direction > 0 && isAtLastImage)) {
      return;
    }

    event.preventDefault();
    setActiveDesignImageIndex((current) =>
      Math.min(designLastIndex, Math.max(0, current + direction))
    );
    lockWheelNavigation();
  };

  const handleOpenLive = (project: Project) => {
    window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
  };

  const handleOpenViewer = (project: Project) => setViewerProject(project);

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
                onClick={() => {
                  setActiveTab('design');
                  setActiveDesignImageIndex(0);
                }}
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
              <div className="space-y-4" onWheel={handleDesignWheel}>
                {designImages.length > 0 ? (
                  <>
                    <article className="rounded-xl border border-border bg-bg-secondary p-2 sm:p-3">
                      <img
                        key={`${designProject?.id}-image-${activeDesignImageIndex}`}
                        src={designImages[activeDesignImageIndex]}
                        alt={`${designProject?.title ?? 'Design project'} preview ${activeDesignImageIndex + 1}`}
                        className="block h-auto w-auto max-w-full rounded-lg"
                        loading="eager"
                      />
                    </article>

                    <div className="flex items-center justify-between text-xs text-text-tertiary sm:text-sm">
                      <span>
                        {activeDesignImageIndex + 1} / {designImages.length}
                      </span>
                      <span>Scroll to move through the design carousel</span>
                    </div>
                  </>
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
