import { useEffect, useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/portfolio';

export default function DesignShowcase() {
  const designProject = projects.find((project) => project.category === 'design');
  const images = designProject?.images ?? [];
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
      if (event.key === 'ArrowLeft') {
        setSelectedImage((current) => (current === null ? null : (current - 1 + images.length) % images.length));
      }
      if (event.key === 'ArrowRight') {
        setSelectedImage((current) => (current === null ? null : (current + 1) % images.length));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images.length, selectedImage]);

  if (!designProject) return null;

  return (
    <section className="min-h-screen">
      <div className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
        <a
          href="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </a>

        <SectionTitle title={designProject.title} subtitle={designProject.description} />

        <div className="mb-8 flex flex-wrap gap-2">
          {designProject.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-bg-secondary px-3 py-1.5 text-xs font-medium text-text-secondary"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              className="group mb-5 block w-full overflow-hidden rounded-2xl border border-border bg-bg-secondary text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-30 hover:shadow-lg"
              aria-label={`Open design image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${designProject.title} artwork ${index + 1}`}
                className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
                loading={index < 3 ? 'eager' : 'lazy'}
              />
            </button>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-4">
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            aria-label="Close design image"
            className="absolute inset-0"
          />
          <div className="relative z-10 flex max-h-full max-w-6xl items-center gap-3">
            <button
              type="button"
              onClick={() => setSelectedImage((selectedImage - 1 + images.length) % images.length)}
              aria-label="Previous design image"
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={images[selectedImage]}
              alt={`${designProject.title} artwork ${selectedImage + 1}`}
              className="max-h-[85vh] max-w-[75vw] rounded-xl object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
              aria-label="Next design image"
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-primary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close design image"
              className="absolute -right-2 -top-12 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-primary sm:-right-3"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
