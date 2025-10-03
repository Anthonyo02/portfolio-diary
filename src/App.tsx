import { useState, useEffect } from 'react';
import { Menu, X, ChevronUp, Download, Mail, Phone, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Languages from './components/Languages';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-navy-900/95 backdrop-blur-sm z-50 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-white font-bold text-xl">Diaritiana</div>

            <div className="hidden md:flex space-x-8">
              {['Accueil', 'Compétences', 'À propos', 'Formation', 'Expériences', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/[àâ]/g, 'a').replace('é', 'e'))}
                  className="text-gray-300 hover:text-sky-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-navy-800 border-t border-navy-700">
            <div className="px-4 py-4 space-y-3">
              {['Accueil', 'Compétences', 'À propos', 'Formation', 'Expériences', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(/[àâ]/g, 'a').replace('é', 'e'))}
                  className="block w-full text-left text-gray-300 hover:text-sky-400 transition-colors duration-300 py-2"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <Hero />
      <Skills />
      <About />
      <Education />
      <Experience />
      <Languages />
      <Contact />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-sky-500 hover:bg-sky-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-sky-500/50 z-40"
          aria-label="Retour en haut"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}

export default App;
