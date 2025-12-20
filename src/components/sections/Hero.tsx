import { Download, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 gradient-radial pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 relative z-10">
        <div className="max-w-4xl  md:flex flex-row gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-lg font-medium text-primary uppercase tracking-wider">
                Full Stack Developer
              </p>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
                Kalab Tadesse
              </h1>
            </div>

            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl">
              I craft elegant digital experiences that solve real problems.
              Specializing in modern web applications with a focus on performance and user experience.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="primary" href="#projects">
                View Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="secondary" href="/cv.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          <div className="hidden md:block w-48 h-48 md:w-64 md:h-64 flex-shrink-0 overflow-hidden rounded-full">
            <img src="/echoboy.png" className='opacity-80' draggable={false} alt="echoboy" />
          </div>

        </div>
      </div>
    </section>
  );
}
