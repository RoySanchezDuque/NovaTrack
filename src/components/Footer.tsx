import { Satellite } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-cyan-500/20 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-2">
            <Satellite className="h-6 w-6 text-cyan-400" />
            <span className="text-xl font-bold text-white">NovaTrack</span>
          </div>

          <p className="text-gray-400 text-center text-sm">
            Donde estés, NovaTrack te encuentra.
          </p>

          <p className="text-gray-500 text-center text-sm">
            © 2025 NovaTrack — Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
