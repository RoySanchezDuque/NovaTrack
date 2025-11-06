import { Car, Satellite, Lock, AlertCircle, Users, Wrench } from 'lucide-react';

const services = [
  {
    icon: Car,
    title: 'Instalación de sistemas de rastreo inteligente (GPS/4G)',
    description: 'Colocación discreta y en puntos ocultos dentro del vehículo. Permite conocer la ubicación en tiempo real con conexión constante al sistema central.'
  },
  {
    icon: Satellite,
    title: 'Monitoreo y asistencia 24/7',
    description: 'Centro de control operativo disponible las 24 horas, los 7 días de la semana, con respuesta inmediata ante emergencias.'
  },
  {
    icon: Lock,
    title: 'Inmovilización remota segura',
    description: 'Sistema que detiene el vehículo a distancia cuando se confirma un hurto, sin riesgo para el conductor.'
  },
  {
    icon: AlertCircle,
    title: 'Sistema multi-disparador de emergencia',
    description: 'Botón o comando especial que activa alertas automáticas al centro de monitoreo.'
  },
  {
    icon: Users,
    title: 'Recuperación vehicular con autoridades',
    description: 'Coordinación con la Policía Nacional y autoridades locales para la recuperación rápida del vehículo.'
  },
  {
    icon: Wrench,
    title: 'Soporte técnico y mantenimiento del software',
    description: 'Atención posventa y actualizaciones continuas del sistema.'
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nuestros <span className="text-cyan-400">Servicios</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <service.icon className="h-12 w-12 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-gray-400 text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
