import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full z-50 bg-space-black/80 backdrop-blur-md border-b border-frost-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-space text-ai-green">CalendAI</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-frost-white hover:text-ai-green transition-colors">
              Características
            </a>
            <a href="#benefits" className="text-frost-white hover:text-ai-green transition-colors">
              Beneficios
            </a>
            <a href="#comparison" className="text-frost-white hover:text-ai-green transition-colors">
              Comparativa
            </a>
            <a href="#pricing" className="text-frost-white hover:text-ai-green transition-colors">
              Precios
            </a>
            <button className="px-6 py-2 bg-neural-purple hover:bg-neural-purple/90 text-frost-white rounded-lg transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]">
              Comenzar Gratis
            </button>
          </div>

          {/* Botón de menú móvil */}
          <button
            className="md:hidden text-frost-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
