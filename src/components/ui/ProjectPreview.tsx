import { Project } from '../../data/portfolio';

interface ProjectPreviewProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPreview({
  project,
  onClose,
}: ProjectPreviewProps) {
  if (!project) return null;

  // Duplicate images for seamless looping
  const images = [...project.images, ...project.images];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center " onClick={onClose}>
      <div className="relative w-full max-w-sm h-[80vh] bg-bg-secondary rounded-lg overflow-hidden ">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-text-secondary hover:text-primary transition-colors"
        >
          ✕
        </button>

        <div className="h-full overflow-hidden">
          <div className="flex flex-col gap-y-4 animate-vertical-scroll">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${project.title} preview ${index + 1}`}
                className="w-full object-cover opacity-90"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
