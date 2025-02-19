import React, { useState } from 'react';
import { X, CheckCircle, Clock, Calendar, Users, FileSpreadsheet, BrainCircuit, ArrowRight, Timer, BarChart3 } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState(0);
  const [isHoveringManual, setIsHoveringManual] = useState(false);
  const [isHoveringAI, setIsHoveringAI] = useState(false);

  const comparisonData = [
    {
      category: "Tiempo",
      icon: Timer,
      manual: {
        title: "10-15 minutos por cita",
        description: "Proceso manual que incluye múltiples pasos y verificaciones",
        impact: "20+ horas semanales perdidas",
        details: [
          "Revisión manual del calendario",
          "Llamadas telefónicas",
          "Emails de ida y vuelta",
          "Confirmaciones manuales"
        ]
      },
      ai: {
        title: "30 segundos por cita",
        description: "Proceso automatizado instantáneo",
        impact: "98% de reducción en tiempo",
        details: [
          "Verificación instantánea",
          "Confirmación automática",
          "Sin intervención manual",
          "Sincronización en tiempo real"
        ]
      }
    },
    {
      category: "Precisión",
      icon: BrainCircuit,
      manual: {
        title: "Alta tasa de error",
        description: "Errores humanos frecuentes en la programación",
        impact: "15% de reprogramaciones",
        details: [
          "Doble reservas",
          "Errores de horario",
          "Confusiones en fechas",
          "Olvidos de confirmación"
        ]
      },
      ai: {
        title: "99.7% de precisión",
        description: "Sistema inteligente de verificación",
        impact: "Casi cero errores",
        details: [
          "Verificación automática",
          "Prevención de conflictos",
          "Validación en tiempo real",
          "Alertas inteligentes"
        ]
      }
    },
    {
      category: "Análisis",
      icon: BarChart3,
      manual: {
        title: "Sin datos procesables",
        description: "Decisiones basadas en intuición",
        impact: "Oportunidades perdidas",
        details: [
          "Sin métricas claras",
          "Análisis manual tedioso",
          "Datos dispersos",
          "Sin insights"
        ]
      },
      ai: {
        title: "Análisis en tiempo real",
        description: "Insights automáticos y procesables",
        impact: "Decisiones data-driven",
        details: [
          "Reportes automatizados",
          "Predicciones inteligentes",
          "Patrones de reserva",
          "Optimización continua"
        ]
      }
    }
  ];

  const calculateTime = (isAI: boolean) => {
    const baseTime = isAI ? 0.5 : 12;
    return Math.floor(baseTime * 60 * (isHoveringAI ? 0.5 : isHoveringManual ? 2 : 1));
  };

  return (
    <section className="relative py-24 overflow-hidden bg-space-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-gray/20 to-transparent" />
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-5">
          <div style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 255, 157, 0.4) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} className="w-full h-full"/>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            <span className="text-frost-white">Manual</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400"> vs </span>
            <span className="text-ai-green">Automatizado</span>
          </h2>
          <p className="text-lg text-frost-white/80">
            Descubre cómo la IA transforma completamente la gestión de citas
          </p>
        </div>

        {/* Metrics Selector */}
        <div className="flex justify-center mb-12 space-x-4">
          {comparisonData.map((data, index) => (
            <button
              key={index}
              onClick={() => setSelectedMetric(index)}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all ${
                selectedMetric === index 
                  ? 'bg-ai-green text-space-black'
                  : 'bg-space-black/60 text-frost-white/80 hover:bg-ai-green/10'
              }`}
            >
              <data.icon size={20} />
              <span>{data.category}</span>
            </button>
          ))}
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Manual Process */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHoveringManual(true)}
            onMouseLeave={() => setIsHoveringManual(false)}
          >
            <div className="absolute inset-0 bg-red-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative p-8 bg-space-black/80 backdrop-blur-sm rounded-xl border border-frost-white/10 hover:border-red-500/30 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-space text-frost-white mb-2">Proceso Manual</h3>
                  <p className="text-frost-white/60">{comparisonData[selectedMetric].manual.title}</p>
                </div>
                <X size={24} className="text-red-400" />
              </div>

              <div className="space-y-6">
                <p className="text-frost-white/80">
                  {comparisonData[selectedMetric].manual.description}
                </p>

                <div className="p-4 bg-terminal-gray/20 rounded-lg">
                  <div className="text-sm text-frost-white/60 mb-2">Impacto en el Negocio</div>
                  <div className="text-red-400 font-medium">
                    {comparisonData[selectedMetric].manual.impact}
                  </div>
                </div>

                <div className="space-y-3">
                  {comparisonData[selectedMetric].manual.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3 text-frost-white/70">
                      <X size={16} className="text-red-400" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AI Process */}
          <div 
            className="relative group"
            onMouseEnter={() => setIsHoveringAI(true)}
            onMouseLeave={() => setIsHoveringAI(false)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-ai-green/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative p-8 bg-space-black/80 backdrop-blur-sm rounded-xl border border-frost-white/10 hover:border-ai-green/30 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-space text-ai-green mb-2">Con IA</h3>
                  <p className="text-frost-white/60">{comparisonData[selectedMetric].ai.title}</p>
                </div>
                <CheckCircle size={24} className="text-ai-green" />
              </div>

              <div className="space-y-6">
                <p className="text-frost-white/80">
                  {comparisonData[selectedMetric].ai.description}
                </p>

                <div className="p-4 bg-ai-green/10 rounded-lg">
                  <div className="text-sm text-frost-white/60 mb-2">Impacto en el Negocio</div>
                  <div className="text-ai-green font-medium">
                    {comparisonData[selectedMetric].ai.impact}
                  </div>
                </div>

                <div className="space-y-3">
                  {comparisonData[selectedMetric].ai.details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3 text-frost-white/70">
                      <CheckCircle size={16} className="text-ai-green" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-ai-green to-blue-400 text-space-black font-semibold hover:shadow-lg hover:shadow-ai-green/20 transition-all group">
            Automatiza tu Negocio Ahora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;