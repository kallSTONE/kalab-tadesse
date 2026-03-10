import { useEffect, useId, useRef } from 'react';
import { Sparkles, X } from 'lucide-react';
import { Project } from '../../data/portfolio';
import ProjectCard from './ProjectCard';

const FOCUSABLE_SELECTOR = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled]):not([type="hidden"])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
].join(',');

interface ProjectGalleryModalProps {
    isOpen: boolean;
    projects: Project[];
    onClose: () => void;
    onOpenLive: (project: Project) => void;
    onOpenViewer: (project: Project) => void;
}

export default function ProjectGalleryModal({
    isOpen,
    projects,
    onClose,
    onOpenLive,
    onOpenViewer,
}: ProjectGalleryModalProps) {
    const dialogRef = useRef<HTMLDivElement | null>(null);
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);
    const headingId = useId();
    const descriptionId = useId();

    useEffect(() => {
        if (!isOpen) return;

        const previouslyFocused =
            document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const originalOverflow = document.body.style.overflow;

        const getFocusableElements = () => {
            if (!dialogRef.current) return [];

            return (
                Array.from(dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR)) as HTMLElement[]
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
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] p-3 sm:p-6">
            <button
                type="button"
                aria-label="Close project gallery"
                onClick={onClose}
                className="absolute inset-0 bg-black/65 backdrop-blur-sm animate-modal-fade-in"
            />

            <div
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby={headingId}
                aria-describedby={descriptionId}
                tabIndex={-1}
                className="relative mx-auto flex h-full w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-border bg-bg-secondary shadow-2xl animate-modal-pop-in"
            >
                <div className="relative border-b border-border px-4 py-4 sm:px-6 sm:py-5">
                    <div className="pointer-events-none absolute -top-8 right-8 h-24 w-24 rounded-full bg-primary-10 blur-3xl" />
                    <div className="relative flex items-start justify-between gap-4">
                        <div className="space-y-2">
                            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                                <Sparkles className="h-3.5 w-3.5" />
                                Interactive Showcase
                            </p>
                            <h3 id={headingId} className="text-xl font-semibold text-text-primary sm:text-2xl">
                                Explore Project Gallery
                            </h3>
                            <p id={descriptionId} className="text-sm text-text-secondary sm:text-base">
                                Choose any project, open it live, or launch it inside the portfolio web viewer.
                            </p>
                        </div>

                        <button
                            ref={closeButtonRef}
                            type="button"
                            onClick={onClose}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-bg-primary text-text-secondary transition-colors hover:text-primary"
                            aria-label="Close project gallery"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                </div>

                <div className="overflow-y-auto px-4 py-5 sm:px-6 sm:py-6">
                    <div className="grid gap-5 lg:grid-cols-2">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onOpenLive={onOpenLive}
                                onOpenViewer={onOpenViewer}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
