import React, { useState } from 'react';
import { Coffee, Calendar, Users, DollarSign, Clock, Phone, ArrowRight, Laugh, Calculator, Frown, SmilePlus, Cone, HeartCrack, Sandwich } from 'lucide-react';

const AiBudgetSection: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'COP'>('USD');
  const [activeComparison, setActiveComparison] = useState(0);

  const exchange = {
    USD: 1,
    COP: 4000
  };

  const formatPrice = (price: number) => {
    if (selectedCurrency === 'USD') {
      return `$${price.toFixed(2)}`;
    }
    return `$${Math.round(price * exchange.COP).toLocaleString('es-CO')}`;
  };

  const funnyComparisons = [
    {
      icon: Coffee,
      title: "Un café que ni disfrutas",
      cost: 4.50,
      description: "Porque estás muy ocupado contestando llamadas 😅",
      waste: "Lo que gastas en café al día > Lo que cuesta automatizar tu negocio"
    },
    {
      icon: Sandwich,
      title: "Almuerzo a medias",
      cost: 8,
      description: "Porque siempre te interrumpen para agendar 🥪",
      waste: "No puedes ni almorzar tranquilo por estar pendiente del teléfono"
    },
    {
      icon: Phone,
      title: "Llamadas perdidas = Clientes perdidos",
      cost: 50,
      description: "Cada cliente que no atiendes es dinero que se va 📱",
      waste: "¿Cuántos clientes pierdes al mes por no contestar a tiempo?"
    }
  ];

  const dailyStruggles = [
    {
      icon: Clock,
      title: "20+ horas al mes",
      description: "Haciendo algo que un robot haría gratis*",
      footnote: "*Bueno, por menos que un café 😉"
    },
    {
      icon: HeartCrack,
      title: "Clientes insatisfechos",
      description: "Porque nadie contesta sus mensajes a las 3 AM",
      footnote: "La IA nunca duerme 🤖"
    },
    {
      icon: Calculator,
      title: "Haciendo cálculos",
      description: "Para ver si puedes pagar una secretaria",
      footnote: "Spoiler: La IA es más barata 🎯"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-space-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-gray/20 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-ai-green/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-ai-green/10 border border-ai-green/20">
            <Cone size={16} className="text-ai-green animate-spin-slow" />
            <span className="text-ai-green text-sm font-medium">Alerta de Momento Incómodo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-space font-bold">
            <span className="text-frost-white">Estás perdiendo</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400"> dinero</span>
            <span className="text-frost-white"> por ahorrar</span>
          </h2>
          
          <p className="text-xl text-frost-white/80">
            Mientras lees esto, tu competencia ya automatizó su negocio por...
          </p>

          {/* Main Price Display */}
          <div className="relative inline-block">
            <div className="relative">
              <div className="text-7xl md:text-8xl font-space font-bold text-ai-green mb-2 animate-float">
                {formatPrice(0.97)}
                <span className="text-2xl text-frost-white/60 ml-2">/ día</span>
              </div>
              <div className="absolute -right-16 -top-8 transform rotate-12">
                <div className="px-4 py-2 bg-ai-green text-space-black text-lg font-medium rounded-full animate-bounce-slow">
                  ¡Es una broma! 😅
                </div>
              </div>
            </div>
            <p className="text-frost-white/60 text-lg">
              Sí, leíste bien. Menos que ese café que te tomas sin disfrutar
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex justify-center space-x-4">
            {(['USD', 'COP'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCurrency === curr
                    ? 'bg-ai-green text-space-black'
                    : 'bg-space-black/60 text-frost-white/80 hover:bg-ai-green/10'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Funny Comparisons */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {funnyComparisons.map((comparison, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseEnter={() => setActiveComparison(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-ai-green/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative p-6 bg-space-black/80 backdrop-blur-sm rounded-xl border border-frost-white/10 hover:border-ai-green/30 transition-all h-full">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-ai-green/10 rounded-full">
                    <comparison.icon className="text-ai-green" size={32} />
                  </div>
                  
                  <h3 className="text-xl font-space text-frost-white">
                    {comparison.title}
                  </h3>
                  
                  <p className="text-frost-white/70">
                    {comparison.description}
                  </p>
                  
                  <div className="text-2xl text-red-400 font-medium mt-2">
                    {formatPrice(comparison.cost)}
                  </div>
                  
                  <p className="text-sm text-frost-white/60 italic mt-auto">
                    {comparison.waste}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Daily Struggles */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-space text-center text-frost-white mb-8">
            Mientras tanto, en tu negocio... 🤦‍♂️
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {dailyStruggles.map((struggle, index) => (
              <div
                key={index}
                className="p-6 bg-red-500/5 backdrop-blur-sm rounded-xl border border-red-500/20 text-center group hover:bg-red-500/10 transition-all"
              >
                <struggle.icon 
                  className="text-red-400 mx-auto mb-4 group-hover:scale-110 transition-transform" 
                  size={32}
                />
                <h4 className="text-lg font-medium text-frost-white mb-2">
                  {struggle.title}
                </h4>
                <p className="text-frost-white/70 mb-4">
                  {struggle.description}
                </p>
                <p className="text-sm text-frost-white/60 italic">
                  {struggle.footnote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <button className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-ai-green to-blue-400 text-space-black font-semibold hover:shadow-lg hover:shadow-ai-green/20 transition-all group">
              Deja de Perder el Tiempo (y Dinero)
              <SmilePlus className="ml-2 group-hover:rotate-12 transition-transform" size={24} />
            </button>
            <p className="text-frost-white/60 mt-4 text-sm">
              * Tu yo del futuro te lo agradecerá 😉
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiBudgetSection;