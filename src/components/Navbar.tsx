import { useState } from 'react';
import { Menu, X, Satellite } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Satellite className="h-8 w-8 text-cyan-400" />
            <span className="text-xl font-bold text-white">NovaTrack</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('planes')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Planes
            </button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contacto
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-cyan-400"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 border-t border-cyan-500/20">
          <div className="px-4 py-4 space-y-3">
            <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Inicio
            </button>
            <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Servicios
            </button>
            <button onClick={() => scrollToSection('nosotros')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Nosotros
            </button>
            <button onClick={() => scrollToSection('planes')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Planes
            </button>
            <button onClick={() => scrollToSection('contacto')} className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors py-2">
              Contacto
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
