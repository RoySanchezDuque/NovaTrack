import { useState, FormEvent } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/573183354209', '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            <span className="text-cyan-400">Contáctanos</span>
          </h2>
          <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Dirección</p>
                    <p className="text-white">Av. 4 Norte #9 Norte 47 a 9</p>
                    <p className="text-white">Cali, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Teléfono</p>
                    <a href="tel:+573183354209" className="text-white hover:text-cyan-400 transition-colors">
                      +57 318 3354209
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Correo Electrónico</p>
                    <a href="mailto:info@novatrack.com" className="text-white hover:text-cyan-400 transition-colors">
                      info@novatrack.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Phone className="h-5 w-5" />
              <span>Escribir por WhatsApp</span>
            </button>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos un Mensaje</h3>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-300 mb-2">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="Tu número de teléfono"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Mensaje</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full bg-gray-700/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-gray-900 font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <span>{isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
                  <Send className="h-5 w-5" />
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center">¡Mensaje enviado exitosamente!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center">Error al enviar. Intenta de nuevo.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
