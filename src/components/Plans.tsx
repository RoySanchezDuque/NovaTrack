import { Check, Star, Crown, MessageCircle } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    icon: Check,
    features: [
      'Rastreo GPS en tiempo real',
      'App móvil',
      'Reportes de ubicación',
      'Historial de rutas'
    ],
    highlighted: false
  },
  {
    name: 'Avanzado',
    icon: Star,
    features: [
      'Todo lo del Plan Básico',
      'Monitoreo 24/7',
      'Inmovilización remota',
      'Alertas de emergencia',
      'Cerca geográfica'
    ],
    highlighted: true
  },
  {
    name: 'Premium',
    icon: Crown,
    features: [
      'Todo lo del Plan Avanzado',
      'Soporte técnico prioritario',
      'Recuperación asistida',
      'Coordinación con autoridades',
      'Mantenimiento preventivo',
      'Actualizaciones ilimitadas'
    ],
    highlighted: false
  }
];

export default function Plans() {
  const handleWhatsApp = (planName: string) => {
    const message = `Hola, me interesa conocer más sobre el plan ${planName} de NovaTrack.`;
    window.open(`https://wa.me/573183354209?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="planes" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-cyan-400">Planes</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Elige el plan que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.highlighted
                  ? 'border-cyan-400 shadow-lg shadow-cyan-500/20 scale-105'
                  : 'border-cyan-500/20 hover:border-cyan-400'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-gray-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-full ${plan.highlighted ? 'bg-cyan-500/20' : 'bg-gray-700/50'}`}>
                    <plan.icon className={`h-8 w-8 ${plan.highlighted ? 'text-cyan-400' : 'text-gray-400'}`} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleWhatsApp(plan.name)}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                  plan.highlighted
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg shadow-green-500/50'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                <MessageCircle className="h-5 w-5" />
                <span>Consultar Precio</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
