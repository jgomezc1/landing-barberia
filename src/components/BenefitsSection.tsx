import React, { useState } from 'react';
import { Clock, Users, Brain, Target, Rocket, Coffee, ArrowRight, ChevronRight, Star } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Reduce hasta un 85% el tiempo dedicado a la gestión de agenda",
      stats: "85% menos tiempo en gestión",
      impact: "4 horas diarias liberadas"
    },
    {
      icon: Users,
      title: "Más Clientes",
      description: "Aumenta tu capacidad de atención sin aumentar el personal",
      stats: "2.5x más clientes atendidos",
      impact: "Sin personal adicional"
    },
    {
      icon: Brain,
      title: "IA Inteligente",
      description: "Aprende de tus preferencias y las de tus clientes",
      stats: "Aprendizaje continuo",
      impact: "Mejora constante"
    },
    {
      icon: Target,
      title: "Precisión Total",
      description: "Elimina errores humanos en la programación",
      stats: "99.7% de precisión",
      impact: "0 errores de agenda"
    },
    {
      icon: Rocket,
      title: "Escalabilidad",
      description: "Crece sin preocuparte por la gestión de citas",
      stats: "Crecimiento ilimitado",
      impact: "Sin cuellos de botella"
    },
    {
      icon: Coffee,
      title: "Menos Estrés",
      description: "Automatiza las tareas repetitivas y enfócate en lo importante",
      stats: "100% automatizado",
      impact: "Mejor calidad de vida"
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-space-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-gray/20 to-transparent" />
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" 
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(0, 255, 157) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}
        />
        {/* Animated Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-green/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-ai-green/10 border border-ai-green/20 mb-4">
            <Star size={16} className="text-ai-green" />
            <span className="text-ai-green text-sm font-medium">Beneficios Comprobados</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400">
              Resultados Inmediatos
            </span>
          </h2>
          
          <p className="text-lg text-frost-white/80">
            Mejora la eficiencia de tu negocio desde el primer día con nuestra solución potenciada por IA
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r from-ai-green/20 to-blue-500/20 rounded-xl blur-xl transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`} />
              
              {/* Card Content */}
              <div className="relative h-full p-6 bg-space-black/80 backdrop-blur-sm rounded-xl border border-frost-white/10 hover:border-ai-green/30 transition-all duration-300">
                {/* Icon Container */}
                <div className="w-12 h-12 mb-4 rounded-lg bg-ai-green/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="text-ai-green" size={24} />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-space font-medium text-frost-white">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-frost-white/70">
                    {benefit.description}
                  </p>

                  {/* Stats */}
                  <div className="pt-4 border-t border-frost-white/10">
                    <div className="flex justify-between items-center text-sm mb-2">
                      <span className="text-frost-white/60">Impacto</span>
                      <span className="text-ai-green font-medium">{benefit.stats}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-frost-white/60">Resultado</span>
                      <span className="text-ai-green font-medium">{benefit.impact}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <ChevronRight className="text-ai-green" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center space-y-4">
            <span className="text-frost-white/60">¿Listo para transformar tu negocio?</span>
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-ai-green to-blue-400 text-space-black font-semibold hover:shadow-lg hover:shadow-ai-green/20 transition-all group">
              Comienza Ahora
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;