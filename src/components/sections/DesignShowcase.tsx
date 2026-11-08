import { useEffect, useState } from 'react';
import {
  ArrowLeft,
  Badge,
  ChevronLeft,
  ChevronRight,
  Images,
  Send,
  X,
  Youtube,
} from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import { projects } from '../../data/portfolio';

interface DesignCategory {
  id: string;
  label: string;
  icon: typeof Youtube;
  images: string[];
}

const designCategories: DesignCategory[] = [
  {
    id: 'echoboy',
    label: 'EchoBoy',
    icon: Youtube,
    images: [
      '/project-images/graphics/8.avif',
      '/project-images/graphics/3.avif',
      '/project-images/graphics/Echo%20Boy%20Logo.avif',
    ],
  },
  {
    id: 'sele-tenawo',
    label: 'Sele Tenawo',
    icon: Send,
    images: ['/project-images/graphics/tenawo.avif'],
  },
  {
    id: 'logo',
    label: 'Logo',
    icon: Badge,
    images: [
      '/project-images/graphics/LogoCompiled.avif',
      '/project-images/graphics/taxshield.avif',
      '/project-images/graphics/logo2.avif',
      '/project-images/graphics/logo3.avif',
      '/project-images/graphics/logo6.avif',
    ],
  },
  {
    id: 'flyer',
    label: 'Flyer collection',
    icon: Images,
    images: [
      '/project-images/graphics/1%20(2).avif',
      '/project-images/graphics/2.png',
      '/project-images/graphics/FoodBorne%20Disease.avif',
      '/project-images/graphics/10.png',
      '/project-images/graphics/12.png',
      '/project-images/graphics/1.png',
      '/project-images/graphics/15.png',
      '/project-images/graphics/16%20(2).png',
    ],
  },
];

export default function DesignShowcase() {
  const designProject = projects.find((project) => project.category === 'design');
  const [activeCategoryId, setActiveCategoryId] = useState(designCategories[0].id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const activeCategory =
    designCategories.find((category) => category.id === activeCategoryId) ??
    designCategories[0];
  const images = activeCategory.images;
  const selectedImageIndex = selectedImage === null ? -1 : images.indexOf(selectedImage);

  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedImage(null);
      if (event.key === 'ArrowLeft') {
        setSelectedImage((current) => {
          if (current === null || selectedImageIndex < 0) return current;
          return images[(selectedImageIndex - 1 + images.length) % images.length];
        });
      }
      if (event.key === 'ArrowRight') {
        setSelectedImage((current) => {
          if (current === null || selectedImageIndex < 0) return current;
          return images[(selectedImageIndex + 1) % images.length];
        });
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [images, selectedImage, selectedImageIndex]);

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

        <div
          className="mb-8 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap"
          role="tablist"
          aria-label="Design categories"
        >
          {designCategories.map(({ id, label, icon: Icon, images: categoryImages }) => {
            const isActive = id === activeCategoryId;

            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveCategoryId(id);
                  setSelectedImage(null);
                }}
                className={`inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2.5 text-xs font-medium transition-colors sm:px-4 sm:text-sm ${
                  isActive
                    ? 'border-primary bg-primary-10 text-primary'
                    : 'border-border bg-bg-secondary text-text-secondary hover:border-primary-30 hover:text-primary'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
                <span className="text-[11px] opacity-70">({categoryImages.length})</span>
              </button>
            );
          })}
        </div>

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(image)}
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

      {selectedImage !== null && selectedImageIndex >= 0 && (
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
              onClick={() => setSelectedImage(images[(selectedImageIndex - 1 + images.length) % images.length])}
              aria-label="Previous design image"
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-primary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <img
              src={selectedImage}
              alt={`${designProject.title} ${activeCategory.label} artwork ${selectedImageIndex + 1}`}
              className="max-h-[85vh] max-w-[75vw] rounded-xl object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(images[(selectedImageIndex + 1) % images.length])}
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
