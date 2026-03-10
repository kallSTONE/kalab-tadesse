import { useEffect, useId, useRef } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { Project } from '../../data/portfolio';

const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled]):not([type="hidden"])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

interface ProjectPreviewProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPreview({
  project,
  onClose,
}: ProjectPreviewProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const headingId = useId();

  useEffect(() => {
    if (!project) return;

    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;

    const getFocusableElements = () => {
      if (!dialogRef.current) return [];

      return Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      ).filter((element) => element.tabIndex !== -1 && !element.hasAttribute('disabled'));
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab') return;

      const focusableElements = getFocusableElements();
      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      const activeElement =
        document.activeElement instanceof HTMLElement ? document.activeElement : null;
      const isInsideDialog =
        !!activeElement && !!dialogRef.current?.contains(activeElement);

      if (event.shiftKey) {
        if (!isInsideDialog || activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        }
        return;
      }

      if (!isInsideDialog || activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    window.requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
      previouslyFocused?.focus();
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] p-2 sm:p-4">
      <button
        type="button"
        aria-label="Close web viewer"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-modal-fade-in"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headingId}
        tabIndex={-1}
        className="relative mx-auto flex h-full w-full max-w-7xl flex-col overflow-hidden rounded-2xl border border-border bg-bg-secondary shadow-2xl animate-modal-pop-in"
      >
        <div className="flex items-center justify-between gap-3 border-b border-border bg-bg-secondary px-3 py-3 sm:px-5">
          <div className="min-w-0">
            <p id={headingId} className="truncate text-sm font-semibold text-text-primary sm:text-base">
              {project.title}
            </p>
            <p className="truncate text-xs text-text-tertiary sm:text-sm">
              Portfolio Web Viewer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:text-sm"
            >
              <ExternalLink className="h-4 w-4" />
              Open in New Tab
            </a>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-primary text-text-secondary transition-colors hover:text-primary"
              aria-label="Close web viewer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="border-b border-border bg-primary-10 px-3 py-2 text-xs text-text-secondary sm:px-5 sm:text-sm">
          If a project blocks iframe embedding, use "Open in New Tab" for the full experience.
        </div>

        <div className="relative flex-1 bg-bg-tertiary">
          <iframe
            title={`Live view of ${project.title}`}
            src={project.liveUrl}
            className="h-full w-full border-0"
            tabIndex={-1}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </div>
  );
}
