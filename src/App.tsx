import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MobileMenu from './components/MobileMenu';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import ComparisonSection from './components/ComparisonSection';
import AiBudgetSection from './components/AiBudgetSection';
import PricingSection from './components/PricingSection';
import CtaSection from './components/CtaSection';

function App() {
  // Estado para el menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para el texto "typeado"
  const [typedText, setTypedText] = useState('');

  // Estado para el plan de precios seleccionado (mensual o anual)
  const [selectedPlan, setSelectedPlan] = useState('monthly');

  // Texto completo que se va "typeando"
  const fullText = 'Hola, soy tu asistente AI. ¿En qué puedo ayudarte hoy?';

  // Efecto para simular el typeado del texto
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Objeto con los precios para cada plan
  const pricingPlans = {
    starter: {
      monthly: '29',
      annual: '24',
    },
    professional: {
      monthly: '49',
      annual: '39',
    },
    enterprise: {
      monthly: '99',
      annual: '79',
    },
  };

  return (
    <div className="matrix-bg min-h-screen">
      {/* Navbar y menú móvil */}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} />

      {/* Secciones de la página */}
      <HeroSection typedText={typedText} />
      <StatsSection />
      <FeaturesSection />
      <BenefitsSection />
      <ComparisonSection />
      <AiBudgetSection />
      <PricingSection
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
        pricingPlans={pricingPlans}
      />
      <CtaSection />
    </div>
  );
}

export default App;
