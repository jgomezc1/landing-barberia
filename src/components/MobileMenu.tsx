import React from 'react';

interface MobileMenuProps {
  isMenuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isMenuOpen }) => {
  if (!isMenuOpen) return null;

  return (
    <div className="fixed inset-0 z-40 bg-space-black/95 backdrop-blur-sm md:hidden pt-20">
      <div className="px-4 py-6 space-y-4">
        <a href="#features" className="block text-frost-white hover:text-ai-green transition-colors">
          Características
        </a>
        <a href="#benefits" className="block text-frost-white hover:text-ai-green transition-colors">
          Beneficios
        </a>
        <a href="#comparison" className="block text-frost-white hover:text-ai-green transition-colors">
          Comparativa
        </a>
        <a href="#pricing" className="block text-frost-white hover:text-ai-green transition-colors">
          Precios
        </a>
        <button className="w-full px-6 py-2 bg-neural-purple hover:bg-neural-purple/90 text-frost-white rounded-lg transition-all">
          Comenzar Gratis
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;
