import { Download, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="w-full max-w-4xl md:flex flex-row gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium text-text-secondary uppercase tracking-[0.18em]">
                Full Stack Developer
              </p>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
                Kalab Tadesse
              </h1>
            </div>

            <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              I craft elegant digital experiences that solve real problems.
              Specializing in modern web applications with a focus on performance and user experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" href="#projects">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="secondary" href="/cv.pdf" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="hidden md:block w-44 h-44 md:w-56 md:h-56 flex-shrink-0 overflow-hidden rounded-full border border-border">
            <img src="/echoboy.png" className="opacity-70 grayscale" draggable={false} alt="echoboy" />
          </div>

        </div>
      </div>
    </section>
  );
}
