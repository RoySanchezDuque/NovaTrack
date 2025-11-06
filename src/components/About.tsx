import { Eye, Target, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sobre <span className="text-cyan-400">Nosotros</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300">
            <div className="flex justify-center mb-6">
              <Shield className="h-16 w-16 text-cyan-400" />
            </div>
            <p className="text-gray-300 text-lg text-center leading-relaxed">
              NovaTrack combina hardware inteligente, instalación invisible y monitoreo 24/7
              para prevenir pérdidas y garantizar la recuperación efectiva de vehículos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-cyan-500/20 p-4 rounded-full">
                <Eye className="h-10 w-10 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Visión (2028)</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Ser la empresa líder y de mayor confianza en Colombia en soluciones tecnológicas
              de seguridad vehicular.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-cyan-500/20 p-4 rounded-full">
                <Target className="h-10 w-10 text-cyan-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">Misión</h3>
            <p className="text-gray-300 text-center leading-relaxed">
              Ofrecer seguridad vehicular integral con tecnología avanzada y respuesta inmediata,
              asegurando la tranquilidad de los conductores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
