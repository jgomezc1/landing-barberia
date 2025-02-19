import React, { useState, useEffect } from 'react';
import { ChevronRight, Bot, Calendar, Boxes, Clock, MessagesSquare } from 'lucide-react';

interface HeroSectionProps {
  typedText: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ typedText }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [chatStep, setChatStep] = useState(0);

  const benefits = [
    { 
      icon: Boxes, 
      text: 'Integración Total',
      subtext: 'Compatible con tus apps favoritas'
    },
    { 
      icon: Clock, 
      text: 'Servicio 24/7',
      subtext: 'Atención continua garantizada'
    },
    { 
      icon: MessagesSquare, 
      text: 'Chat Intuitivo',
      subtext: 'Experiencia fluida para usuarios'
    }
  ];

  const chatSequence = [
    { type: 'ai', text: '¡Hola! Soy tu asistente AI. ¿En qué puedo ayudarte hoy?' },
    { type: 'user', text: 'Necesito agendar una cita para mañana' },
    { type: 'ai', text: 'Por supuesto, te ayudo con eso. ¿Prefieres en la mañana o en la tarde?' },
  ];

  useEffect(() => {
    setIsVisible(true);
    const chatInterval = setInterval(() => {
      setChatStep((prev) => (prev + 1) % chatSequence.length);
    }, 4000);

    return () => {
      clearInterval(chatInterval);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black via-gray-900 to-black" />
        <div className="absolute top-20 left-20 w-96 h-96 bg-ai-green/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-40 right-40 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className={`space-y-8 transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}>
          <div className="inline-block px-4 py-2 bg-ai-green/10 rounded-full border border-ai-green/20 backdrop-blur-sm">
            <span className="text-ai-green font-medium">¡Nuevo! IA + Automatización</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-space font-bold leading-tight">
            Gestiona tu agenda con
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400 mt-2">
              Inteligencia Artificial
            </div>
          </h1>
          
          <p className="text-xl text-frost-white/80 leading-relaxed">
            Automatiza la gestión de citas con una interfaz conversacional que conecta con tus herramientas favoritas.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-ai-green to-blue-400 text-space-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all group flex items-center justify-center">
              Prueba Gratis 14 Días
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border border-ai-green/30 text-ai-green font-semibold rounded-lg hover:bg-ai-green/10 transition-all flex items-center justify-center backdrop-blur-sm">
              Ver Demo
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 rounded-lg bg-space-black/40 backdrop-blur-sm border border-frost-white/10 hover:border-ai-green/30 transition-all group cursor-pointer"
              >
                <div className="mb-4 p-3 bg-ai-green/10 rounded-full group-hover:bg-ai-green/20 transition-all">
                  <benefit.icon className="w-6 h-6 text-ai-green group-hover:scale-110 transition-transform" />
                </div>
                <span className="font-medium text-frost-white/90 text-lg mb-1">{benefit.text}</span>
                <span className="text-sm text-frost-white/60">{benefit.subtext}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Chat Interface */}
        <div className={`relative transform transition-all duration-1000 ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}>
          <div className="relative">
            <div className="gradient-border bg-space-black/80 backdrop-blur-xl p-6 rounded-xl shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center space-x-2 text-frost-white/60 text-sm">
                  <Bot size={16} className="text-ai-green" />
                  <span>AI Assistant</span>
                </div>
              </div>

              {/* Chat Content */}
              <div className="space-y-4 min-h-64">
                {chatSequence.slice(0, chatStep + 1).map((message, index) => (
                  <div 
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`chat-bubble p-4 rounded-lg max-w-[80%] transform transition-all duration-500 hover:scale-102 ${
                        message.type === 'user' 
                          ? 'bg-ai-green/10 text-frost-white' 
                          : 'bg-space-black/40 text-frost-white/90'
                      }`}
                    >
                      <p className={message.type === 'ai' && index === chatStep ? 'terminal-cursor' : ''}>
                        {message.text}
                      </p>
                    </div>
                  </div>
                ))}
                
                {chatStep === chatSequence.length - 1 && (
                  <div className="flex items-center space-x-2 text-ai-green text-sm">
                    <div className="flex space-x-1">
                      <span className="w-2 h-2 bg-ai-green rounded-full animate-bounce"></span>
                      <span className="w-2 h-2 bg-ai-green rounded-full animate-bounce delay-75"></span>
                      <span className="w-2 h-2 bg-ai-green rounded-full animate-bounce delay-150"></span>
                    </div>
                    <span>AI está procesando tu solicitud...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute -right-4 -bottom-4 bg-space-black/90 backdrop-blur-xl p-4 rounded-lg border border-ai-green/20 transform rotate-2 hover:rotate-0 transition-all duration-300">
              <div className="font-code space-y-2 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-ai-green">{'>'}</span>
                  <span>Precisión_AI: </span>
                  <span className="text-success-green">99.7%</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-ai-green">{'>'}</span>
                  <span>Tiempo_Respuesta: </span>
                  <span className="text-success-green">&lt;2s</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Developed By Section - Mejorado */}
      <div className="absolute bottom-4 right-4 flex items-center space-x-3 bg-space-black/60 backdrop-blur-sm px-4 py-2 rounded-full border border-frost-white/10 hover:border-ai-green/30 transition-all">
        <span className="text-frost-white/80 font-medium">Desarrollado por</span>
        <div className="h-6 w-px bg-frost-white/20"></div>
        <img 
          src="https://storage.googleapis.com/cluvi/nuevo_irre-removebg-preview.png" 
          alt="Irrelevant Logo" 
          className="h-8 object-contain hover:scale-105 transition-transform"
        />
      </div>
    </section>
  );
};

export default HeroSection;