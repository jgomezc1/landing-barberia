import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MessageSquare, 
  Bot, 
  Zap, 
  Clock, 
  BarChart, 
  Shield, 
  Menu, 
  X,
  ChevronRight,
  CheckCircle,
  Clock4,
  Rocket,
  Target,
  Users,
  Sparkles,
  Brain,
  ArrowRight,
  Coffee
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const fullText = 'Hola, soy tu asistente AI. ¿En qué puedo ayudarte hoy?';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(prev => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    
    return () => clearInterval(timer);
  }, []);

  const pricingPlans = {
    starter: {
      monthly: '29',
      annual: '24'
    },
    professional: {
      monthly: '49',
      annual: '39'
    },
    enterprise: {
      monthly: '99',
      annual: '79'
    }
  };

  return (
    <div className="matrix-bg min-h-screen">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-space-black/80 backdrop-blur-md border-b border-frost-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center">
              <span className="text-2xl font-space text-ai-green">CalendAI</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-frost-white hover:text-ai-green transition-colors">Características</a>
              <a href="#benefits" className="text-frost-white hover:text-ai-green transition-colors">Beneficios</a>
              <a href="#comparison" className="text-frost-white hover:text-ai-green transition-colors">Comparativa</a>
              <a href="#pricing" className="text-frost-white hover:text-ai-green transition-colors">Precios</a>
              <button className="px-6 py-2 bg-neural-purple hover:bg-neural-purple/90 text-frost-white rounded-lg transition-all hover:shadow-[0_0_15px_rgba(124,58,237,0.5)]">
                Comenzar Gratis
              </button>
            </div>
            
            <button 
              className="md:hidden text-frost-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-space-black/95 backdrop-blur-sm md:hidden pt-20">
          <div className="px-4 py-6 space-y-4">
            <a href="#features" className="block text-frost-white hover:text-ai-green transition-colors">Características</a>
            <a href="#benefits" className="block text-frost-white hover:text-ai-green transition-colors">Beneficios</a>
            <a href="#comparison" className="block text-frost-white hover:text-ai-green transition-colors">Comparativa</a>
            <a href="#pricing" className="block text-frost-white hover:text-ai-green transition-colors">Precios</a>
            <button className="w-full px-6 py-2 bg-neural-purple hover:bg-neural-purple/90 text-frost-white rounded-lg transition-all">
              Comenzar Gratis
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl font-space font-bold leading-tight">
              Tu asistente AI de agenda, 
              <span className="text-ai-green">disponible 24/7</span>
            </h1>
            <p className="text-lg text-frost-white/80">
              Agenda, reprograma y gestiona citas a través de una interfaz conversacional que aprende de tus preferencias
            </p>
            <button className="px-8 py-4 bg-ai-green text-space-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all group">
              Prueba Gratis 
              <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
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

          <div className="relative">
            <div className="gradient-border bg-terminal-gray p-6 rounded-xl floating">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <div className="chat-bubble p-4 rounded-lg max-w-[80%]">
                  <p className="terminal-cursor">{typedText}</p>
                </div>
                <div className="flex justify-end">
                  <div className="chat-bubble bg-ai-green/10 p-4 rounded-lg max-w-[80%]">
                    <p>¡Claro! Me gustaría agendar una reunión para mañana.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-ai-green text-sm">
                  <Bot size={16} />
                  <span>AI está escribiendo...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-terminal-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Clock4 className="text-ai-green" size={32} />, value: "85%", label: "Tiempo Ahorrado" },
              { icon: <Users className="text-ai-green" size={32} />, value: "2.5x", label: "Más Clientes Atendidos" },
              { icon: <Target className="text-ai-green" size={32} />, value: "99.7%", label: "Precisión en Agendamiento" },
              { icon: <Sparkles className="text-ai-green" size={32} />, value: "24/7", label: "Disponibilidad" }
            ].map((stat, index) => (
              <div key={index} className="text-center stats-counter">
                {stat.icon}
                <div className="mt-2 text-3xl font-space text-ai-green">{stat.value}</div>
                <div className="text-frost-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-space-black to-terminal-gray/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-space text-center mb-16">
            Características <span className="text-ai-green">Principales</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="text-ai-green" size={24} />,
                title: "Interfaz Conversacional",
                description: "Interactúa naturalmente con la AI como si hablaras con un asistente real"
              },
              {
                icon: <Calendar className="text-ai-green" size={24} />,
                title: "Integración Total",
                description: "Sincronización perfecta con Google Calendar y hojas de cálculo"
              },
              {
                icon: <Zap className="text-ai-green" size={24} />,
                title: "Respuesta Instantánea",
                description: "Obtén confirmaciones y ajustes de agenda en segundos"
              }
            ].map((feature, index) => (
              <div key={index} className="gradient-border bg-terminal-gray p-6 rounded-xl hover:scale-105 transition-transform">
                <div className="flex items-center space-x-4 mb-4">
                  {feature.icon}
                  <h3 className="font-space text-xl">{feature.title}</h3>
                </div>
                <p className="text-frost-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-space text-center mb-16">
            Beneficios <span className="text-ai-green">Inmediatos</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="text-ai-green" size={32} />,
                title: "Ahorro de Tiempo",
                description: "Reduce hasta un 85% el tiempo dedicado a la gestión de agenda"
              },
              {
                icon: <Users className="text-ai-green" size={32} />,
                title: "Más Clientes",
                description: "Aumenta tu capacidad de atención sin aumentar el personal"
              },
              {
                icon: <Brain className="text-ai-green" size={32} />,
                title: "AI Inteligente",
                description: "Aprende de tus preferencias y las de tus clientes"
              },
              {
                icon: <Target className="text-ai-green" size={32} />,
                title: "Precisión Total",
                description: "Elimina errores humanos en la programación"
              },
              {
                icon: <Rocket className="text-ai-green" size={32} />,
                title: "Escalabilidad",
                description: "Crece sin preocuparte por la gestión de citas"
              },
              {
                icon: <Coffee className="text-ai-green" size={32} />,
                title: "Menos Estrés",
                description: "Automatiza las tareas repetitivas y enfócate en lo importante"
              }
            ].map((benefit, index) => (
              <div key={index} className="benefit-card p-6 bg-terminal-gray rounded-xl border border-frost-white/10 hover:border-ai-green/50 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  {benefit.icon}
                  <h3 className="font-space text-xl">{benefit.title}</h3>
                </div>
                <p className="text-frost-white/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section id="comparison" className="py-20 px-4 sm:px-6 lg:px-8 bg-terminal-gray/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-space text-center mb-16">
            Manual vs <span className="text-ai-green">Automatizado</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="comparison-slide space-y-6 p-8 bg-terminal-gray rounded-xl">
              <h3 className="text-2xl font-space mb-6 text-frost-white/90">Gestión Manual</h3>
              {[
                "Tiempo promedio por cita: 10-15 minutos",
                "Errores frecuentes en programación",
                "Disponibilidad limitada (horario laboral)",
                "Conflictos de horarios comunes",
                "Proceso repetitivo y agotador",
                "Sin análisis de datos"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 text-frost-white/70">
                  <X size={20} className="text-red-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="comparison-slide space-y-6 p-8 bg-terminal-gray rounded-xl border-ai-green/20 border">
              <h3 className="text-2xl font-space mb-6 text-ai-green">Con CalendAI</h3>
              {[
                "Tiempo promedio por cita: 30 segundos",
                "Precisión del 99.7% en agendamiento",
                "Disponibilidad 24/7",
                "Optimización automática de horarios",
                "Proceso completamente automatizado",
                "Análisis detallado y reportes"
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-ai-green" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Budget Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-space mb-8">
            AI Accesible para <span className="text-ai-green">Todos</span>
          </h2>
          <p className="text-lg text-frost-white/80 max-w-2xl mx-auto mb-12">
            No necesitas un gran presupuesto para tener un asistente AI. Comienza con nuestro plan básico por menos que un café al día.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Coffee className="text-ai-green" size={32} />,
                cost: "$0.97",
                period: "por día",
                description: "Menos que un café"
              },
              {
                icon: <Calendar className="text-ai-green" size={32} />,
                cost: "$29",
                period: "por mes",
                description: "Plan básico completo"
              },
              {
                icon: <Users className="text-ai-green" size={32} />,
                cost: "$0.12",
                period: "por cita",
                description: "Costo por agendamiento"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-terminal-gray rounded-xl border border-frost-white/10">
                {item.icon}
                <div className="text-3xl font-space text-ai-green mt-4">{item.cost}</div>
                <div className="text-frost-white/60">{item.period}</div>
                <div className="mt-2 text-frost-white/80">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-terminal-gray/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-space text-center mb-8">
            Planes <span className="text-ai-green">Simples</span>
          </h2>
          <p className="text-center text-frost-white/80 mb-12 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen acceso completo a la IA.
          </p>

          <div className="flex justify-center mb-12">
            <div className="bg-terminal-gray rounded-lg p-1 inline-flex">
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedPlan === 'monthly'
                    ? 'bg-ai-green text-space-black'
                    : 'text-frost-white'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                Mensual
              </button>
              <button
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedPlan === 'annual'
                    ? 'bg-ai-green text-space-black'
                    : 'text-frost-white'
                }`}
                onClick={() => setSelectedPlan('annual')}
              >
                Anual (20% desc.)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: pricingPlans.starter[selectedPlan],
                features: [
                  "Hasta 100 citas/mes",
                  "1 calendario",
                  "Integración con Google Calendar",
                  "Soporte por email",
                  "Reportes básicos"
                ]
              },
              {
                name: "Professional",
                price: pricingPlans.professional[selectedPlan],
                popular: true,
                features: [
                  "Hasta 500 citas/mes",
                  "5 calendarios",
                  "Integraciones avanzadas",
                  "Soporte prioritario",
                  "Análisis detallado",
                  "Personalización de respuestas"
                ]
              },
              {
                name: "Enterprise",
                price: pricingPlans.enterprise[selectedPlan],
                features: [
                  "Citas ilimitadas",
                  "Calendarios ilimitados",
                  "API personalizada",
                  "Soporte 24/7",
                  "Análisis en tiempo real",
                  "Personalización completa",
                  "Implementación dedicada"
                ]
              }
            ].map((plan, index) => (
              <div
                key={index}
                className={`pricing-card p-8 rounded-xl ${
                  plan.popular
                    ? 'bg-neural-purple/20 border-2 border-neural-purple'
                    : 'bg-terminal-gray border border-frost-white/10'
                }`}
              >
                {plan.popular && (
                  <div className="text-neural-purple text-sm font-semibold mb-4">MÁS POPULAR</div>
                )}
                <h3 className="text-2xl font-space mb-4">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-space text-ai-green">${plan.price}</span>
                  <span className="text-frost-white/60 ml-2">/mes</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center space-x-3">
                      <CheckCircle size={16} className="text-ai-green" />
                      <span className="text-frost-white/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg transition-all ${
                  plan.popular
                    ? 'bg-neural-purple text-frost-white hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]'
                    : 'bg-ai-green text-space-black hover:shadow-[0_0_20px_rgba(0,255,157,0.3)]'
                }`}>
                  Comenzar Ahora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-radial from-neural-purple/20 via-space-black to-space-black">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-space">
            Comienza a optimizar tu agenda <span className="text-ai-green">hoy mismo</span>
          </h2>
          <p className="text-lg text-frost-white/80">
            Únete a miles de profesionales que ya han automatizado su gestión de citas
          </p>
          <button className="px-8 py-4 bg-ai-green text-space-black font-semibold rounded-lg hover:shadow-[0_0_30px_rgba(0,255,157,0.3)] transition-all group">
            Comenzar Ahora
            <ChevronRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;