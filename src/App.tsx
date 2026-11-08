import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import DesignShowcase from './components/sections/DesignShowcase';
import NotFound from './components/sections/NotFound';

function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  if (pathname === '/design') {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <DesignShowcase />
        </main>
        <Footer />
      </div>
    );
  }

  if (pathname !== '/') {
    return (
      <div className="min-h-screen">
        <Header />
        <main>
          <NotFound />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
      <Footer />
    </div>
  );
}

export default App;
