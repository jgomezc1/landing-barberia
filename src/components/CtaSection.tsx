import React from 'react';
import { ChevronRight, ArrowRight, Plug, MessagesSquare, Bot, Sparkles } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden bg-space-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-gray/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-green/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Main CTA Content */}
          <div className="text-center space-y-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-space font-bold">
              <span className="text-frost-white">Optimiza tu Agenda</span>{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400">
                Ahora
              </span>
            </h2>
            
            <p className="text-xl text-frost-white/80">
              Únete a miles de profesionales que ya han automatizado su gestión de citas
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-ai-green to-blue-400 text-space-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all group inline-flex items-center">
              Comenzar Prueba Gratuita
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Integration Notice */}
          <div className="mt-16 p-6 bg-space-black/60 backdrop-blur-sm rounded-xl border border-frost-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-ai-green/10">
                  <Plug className="text-ai-green" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-medium text-frost-white mb-1">
                    ¿Usas otro sistema?
                  </h3>
                  <p className="text-frost-white/60">
                    Nos integramos con cualquier software existente
                  </p>
                </div>
              </div>
              
              <button className="px-6 py-3 border border-ai-green/30 text-ai-green font-medium rounded-lg hover:bg-ai-green/10 transition-all inline-flex items-center whitespace-nowrap">
                Contáctanos
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Enhanced Brand Section */}
          <div className="mt-16 p-8 bg-space-black/60 backdrop-blur-sm rounded-xl border border-frost-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-left">
                <div className="flex items-center space-x-2 mb-4">
                  <Bot className="text-ai-green" size={24} />
                  <h3 className="text-xl font-space text-frost-white">
                    ¿Tienes otros procesos que quieres automatizar?
                  </h3>
                </div>
                <p className="text-frost-white/80 mb-6">
                  Somos expertos en crear soluciones de IA que automatizan tareas repetitivas y optimizan procesos
                </p>
                <button className="px-6 py-3 bg-space-black border border-ai-green/30 text-ai-green font-medium rounded-lg hover:bg-ai-green/10 transition-all inline-flex items-center">
                  Explorar Más Soluciones
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <p className="text-frost-white/60">Desarrollado por</p>
                <img 
                  src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" 
                  alt="Irrelevant Logo" 
                  className="h-10 object-contain hover:scale-105 transition-transform"
                />
                <div className="flex items-center space-x-2 text-sm text-frost-white/40">
                  <Sparkles size={14} className="text-ai-green" />
                  <span>Expertos en Automatización con IA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;