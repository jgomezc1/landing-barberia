import React, { useState } from 'react';
import { MessageSquare, Calendar, BarChart3, ArrowRight, ChevronDown, Smartphone } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);

  const features = [
    {
      icon: Smartphone,
      title: "Tan Fácil Como WhatsApp",
      description: "Usa las mismas apps que ya conoces. Sin nuevas interfaces que aprender, sin complicaciones.",
      benefits: [
        "Chatea como si fuera WhatsApp",
        "Respuestas directas y al grano",
        "Sin apps adicionales que instalar",
        "Interfaz que ya conoces y usas a diario"
      ],
      demo: (
        <div className="bg-space-black/90 p-4 rounded-lg border border-frost-white/10">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-ai-green" />
            <span className="text-sm text-frost-white/60">Asistente en línea</span>
          </div>
          <div className="space-y-3">
            <div className="bg-ai-green/10 p-3 rounded-lg text-frost-white/90 ml-auto max-w-xs">
              Necesito agendar una cita para mañana
            </div>
            <div className="bg-space-black/60 p-3 rounded-lg text-frost-white/90 max-w-xs">
              ¡Claro! ¿Prefieres en la mañana o en la tarde? Tengo estos horarios disponibles:
              10:00 AM
              2:30 PM
              4:00 PM
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Calendar,
      title: "Integración Sin Esfuerzo",
      description: "Conectamos con tus herramientas favoritas. Google Calendar, Sheets, y más - todo funciona automáticamente.",
      benefits: [
        "Sincronización automática con tu calendario",
        "Actualización en tiempo real",
        "Compatible con Google Workspace",
        "Cero configuración técnica"
      ],
      demo: (
        <div className="bg-space-black/90 p-4 rounded-lg border border-frost-white/10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 bg-ai-green/10 rounded-lg">
              <Calendar className="text-ai-green" size={16} />
              <span className="text-sm text-frost-white/90">Sincronización con Google Calendar</span>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-ai-green/10 rounded-lg">
              <div className="w-2 h-2 rounded-full bg-ai-green" />
              <span className="text-sm text-frost-white/90">Actualización automática de disponibilidad</span>
            </div>
          </div>
        </div>
      )
    },
    {
      icon: BarChart3,
      title: "Reportes Que Entienden Tu Negocio",
      description: "Obtén insights valiosos sin ser un experto en datos. Reportes claros y accionables.",
      benefits: [
        "Métricas en lenguaje simple",
        "Reportes personalizados a tu medida",
        "Visualización clara de tendencias",
        "Datos que ayudan a tomar decisiones"
      ],
      demo: null
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-space-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-gray/20 to-transparent" />
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-ai-green/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400">
              Sin Interfaces Complicadas
            </span>
          </h2>
          <p className="text-lg text-frost-white/80">
            Olvídate de aprender nuevas aplicaciones. Usa las herramientas que ya conoces, potenciadas con IA.
          </p>
        </div>

        {/* Features List */}
        <div className="max-w-3xl mx-auto space-y-6">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => setActiveFeature(activeFeature === index ? null : index)}
                className={`w-full p-6 rounded-xl transition-all duration-300 border ${
                  activeFeature === index 
                    ? 'bg-space-black/80 border-ai-green/30' 
                    : 'border-frost-white/10 hover:border-ai-green/20'
                }`}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-ai-green/10">
                    <feature.icon className="text-ai-green" size={24} />
                  </div>
                  
                  <div className="ml-4 flex-1 text-left">
                    <h3 className="text-xl font-space font-medium text-frost-white">
                      {feature.title}
                    </h3>
                    <p className="text-frost-white/70 mt-1">
                      {feature.description}
                    </p>
                  </div>

                  <ChevronDown 
                    className={`text-ai-green transition-transform duration-300 ml-4 ${
                      activeFeature === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </div>

                {activeFeature === index && (
                  <div className="mt-6 grid gap-4">
                    <div className="grid grid-cols-2 gap-3">
                      {feature.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-ai-green" />
                          <span className="text-sm text-frost-white/60">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    {feature.demo && (
                      <div className="mt-4">
                        {feature.demo}
                      </div>
                    )}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-ai-green to-blue-400 text-space-black font-semibold hover:shadow-lg hover:shadow-ai-green/20 transition-all group">
            Empieza a Usar Tus Apps con IA
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;