import React, { useState, useEffect } from 'react';
import { Clock4, Users, Target, Sparkles, ChevronRight, ArrowRight, LineChart, Award } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const StatsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counts, setCounts] = useState({
    tiempo: 0,
    clientes: 0,
    precision: 0,
    disponibilidad: 0
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const stats = [
    {
      icon: Clock4,
      value: "85%",
      label: "Tiempo Ahorrado",
      description: "Optimización de procesos automatizados",
      key: "tiempo",
      targetValue: 85,
      additionalStats: [
        { label: "Respuesta promedio", value: "<2s" },
        { label: "Tareas automatizadas", value: "93%" }
      ]
    },
    {
      icon: Users,
      value: "2.5x",
      label: "Más Clientes Atendidos",
      description: "Incremento en capacidad de atención",
      key: "clientes",
      targetValue: 250,
      additionalStats: [
        { label: "Satisfacción cliente", value: "98%" },
        { label: "Retención", value: "95%" }
      ]
    },
    {
      icon: Target,
      value: "99.7%",
      label: "Precisión en Agendamiento",
      description: "Tecnología de punta en IA",
      key: "precision",
      targetValue: 99.7,
      additionalStats: [
        { label: "Error humano", value: "<0.1%" },
        { label: "Confirmación automática", value: "100%" }
      ]
    },
    {
      icon: Sparkles,
      value: "24/7",
      label: "Disponibilidad",
      description: "Servicio ininterrumpido garantizado",
      key: "disponibilidad",
      targetValue: 100,
      additionalStats: [
        { label: "Tiempo activo", value: "99.99%" },
        { label: "Soporte", value: "24/7" }
      ]
    },
  ];

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const animateValue = (start: number, end: number, key: string) => {
        let current = start;
        const step = (end - start) / steps;
        
        const timer = setInterval(() => {
          current += step;
          if (current >= end) {
            current = end;
            clearInterval(timer);
          }
          setCounts(prev => ({ ...prev, [key]: current }));
        }, interval);
      };

      stats.forEach(stat => {
        animateValue(0, stat.targetValue, stat.key);
      });
    }
  }, [inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % stats.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatValue = (key: string, value: number) => {
    switch (key) {
      case 'tiempo':
        return `${Math.round(value)}%`;
      case 'clientes':
        return `${(value / 100).toFixed(1)}x`;
      case 'precision':
        return `${value.toFixed(1)}%`;
      case 'disponibilidad':
        return '24/7';
      default:
        return value;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden bg-space-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full bg-gradient-to-b from-terminal-gray/20 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-ai-green/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-ai-green/10 border border-ai-green/20 mb-4">
            <Award size={16} className="text-ai-green" />
            <span className="text-ai-green text-sm font-medium">Resultados Validados por Expertos</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400">
              Métricas de Rendimiento
            </span>
          </h2>
          
          <p className="text-frost-white/80 text-lg max-w-2xl mx-auto">
            Nuestra plataforma impulsada por IA está redefiniendo los estándares de eficiencia y precisión en la gestión de citas
          </p>
        </div>

        {/* Stats Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`relative group transition-all duration-500 ${
                index === activeIndex ? 'scale-105' : 'scale-100'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ai-green/20 to-blue-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 rounded-lg bg-space-black/80 border border-frost-white/10 backdrop-blur-sm hover:border-ai-green/30 transition-all">
                {/* Terminal-like header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/60"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500/60"></div>
                  </div>
                  <div className="text-xs text-frost-white/40 font-code">metrics_v2.0.1</div>
                </div>

                <div className="w-12 h-12 mb-6 rounded-lg bg-ai-green/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <stat.icon className="text-ai-green" size={24} />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-space font-bold text-frost-white">
                      {formatValue(stat.key, counts[stat.key as keyof typeof counts])}
                    </div>
                    
                    <div className="text-lg font-medium text-frost-white/90">
                      {stat.label}
                    </div>
                    
                    <p className="text-sm text-frost-white/60">
                      {stat.description}
                    </p>
                  </div>

                  {/* Additional Stats */}
                  <div className="pt-4 border-t border-frost-white/10">
                    {stat.additionalStats.map((subStat, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm py-1">
                        <span className="text-frost-white/60">{subStat.label}</span>
                        <span className="text-ai-green font-code">{subStat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="text-ai-green" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2 text-frost-white/60 text-sm mb-4">
            <LineChart size={16} className="text-ai-green" />
            <span>Datos actualizados en tiempo real</span>
          </div>
          
          <button className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-ai-green/10 to-blue-500/10 border border-ai-green/30 hover:border-ai-green/50 transition-all">
            <span className="text-ai-green mr-2 group-hover:mr-4 transition-all">Ver Análisis Detallado</span>
            <ArrowRight className="text-ai-green group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;