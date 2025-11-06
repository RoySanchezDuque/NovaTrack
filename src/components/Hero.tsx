import { Satellite, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0, 255, 255, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative">
            <Satellite className="h-24 w-24 text-cyan-400" />
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full"></div>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Nova<span className="text-cyan-400">Track</span>
        </h1>

        <p className="text-xl sm:text-2xl text-cyan-400 mb-8 font-light italic">
          Donde estés, NovaTrack te encuentra.
        </p>

        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Seguridad vehicular integral con tecnología de última generación.
          Rastreo GPS/4G, monitoreo 24/7 e inmovilización remota segura.
        </p>

        <button
          onClick={scrollToContact}
          className="group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 inline-flex items-center space-x-2"
        >
          <span>Solicitar Instalación</span>
          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
