import React, { useState } from 'react';
import { CheckCircle, ChevronRight, Star } from 'lucide-react';

interface PricingPlans {
  starter: {
    monthly: number;
    annual: number;
  };
  professional: {
    monthly: number;
    annual: number;
  };
  enterprise: {
    monthly: number;
    annual: number;
  };
}

interface PricingSectionProps {
  pricingPlans: PricingPlans;
}

const PricingSection: React.FC<PricingSectionProps> = ({ pricingPlans }) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'COP'>('USD');

  const exchange = {
    USD: 1,
    COP: 4000
  };

  const formatPrice = (price: number) => {
    const value = price * (selectedCurrency === 'COP' ? exchange.COP : 1);
    return selectedCurrency === 'USD' 
      ? `$${value.toFixed(2)}` 
      : `$${Math.round(value).toLocaleString('es-CO')}`;
  };

  const plans = [
    {
      name: "Starter",
      price: pricingPlans.starter[selectedPlan],
      features: [
        "Hasta 100 citas/mes",
        "1 calendario",
        "Integración con Google Calendar",
        "Soporte por email",
        "Reportes básicos",
      ],
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
        "Personalización de respuestas",
      ],
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
        "Implementación dedicada",
      ],
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-space-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-terminal-gray/20 to-transparent" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ai-green/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-space font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ai-green to-blue-400">
              Planes y Precios
            </span>
          </h2>
          <p className="text-lg text-frost-white/80">
            Elige el plan que mejor se adapte a las necesidades de tu negocio
          </p>
        </div>

        {/* Currency and Billing Toggles */}
        <div className="flex justify-center gap-8 mb-12">
          {/* Currency Toggle */}
          <div className="bg-space-black/60 rounded-lg p-1 inline-flex">
            {(['USD', 'COP'] as const).map((curr) => (
              <button
                key={curr}
                onClick={() => setSelectedCurrency(curr)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedCurrency === curr
                    ? 'bg-ai-green text-space-black'
                    : 'text-frost-white hover:text-ai-green'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Billing Toggle */}
          <div className="bg-space-black/60 rounded-lg p-1 inline-flex">
            <button
              className={`px-4 py-2 rounded-md transition-all ${
                selectedPlan === 'monthly'
                  ? 'bg-ai-green text-space-black'
                  : 'text-frost-white hover:text-ai-green'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              Mensual
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-all flex items-center ${
                selectedPlan === 'annual'
                  ? 'bg-ai-green text-space-black'
                  : 'text-frost-white hover:text-ai-green'
              }`}
              onClick={() => setSelectedPlan('annual')}
            >
              Anual
              <span className="ml-2 text-xs px-2 py-1 bg-neural-purple/20 rounded-full">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative group"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-ai-green text-space-black text-sm font-medium rounded-full">
                  Más Popular
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-r from-ai-green/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className={`relative h-full p-8 bg-space-black/80 backdrop-blur-sm rounded-xl border transition-all ${
                plan.popular 
                  ? 'border-ai-green' 
                  : 'border-frost-white/10 group-hover:border-ai-green/30'
              }`}>
                <div className="mb-8">
                  <h3 className="text-2xl font-space text-frost-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-space font-bold text-ai-green">
                      {formatPrice(plan.price)}
                    </span>
                    <span className="text-frost-white/60 ml-2">/ mes</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="text-ai-green flex-shrink-0" size={16} />
                      <span className="text-frost-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 px-4 rounded-lg transition-all flex items-center justify-center ${
                  plan.popular
                    ? 'bg-ai-green text-space-black hover:shadow-lg hover:shadow-ai-green/20'
                    : 'bg-space-black border border-ai-green/30 text-ai-green hover:bg-ai-green/10'
                }`}>
                  Comenzar Ahora
                  <ChevronRight className="ml-2" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="text-ai-green" size={20} />
              <span className="text-frost-white/80">14 días de prueba gratis</span>
            </div>
            <p className="text-frost-white/60 text-sm">
              Garantía de devolución si no estás satisfecho
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;