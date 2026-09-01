import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import imgBuffet from '../assets/images/gallery_buffet_renovation_1788200649742.jpg';

export default function Gallery() {
  const servicesList = [
    "Reforma Completa",
    "Projetos Novos",
    "Manutenção Preventiva e Corretiva",
    "Troca de Redes, Isotubos e Espumas",
    "Revitalização em Condomínios",
    "Laudos Técnicos (ART) e Adequação",
  ];

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Transformação e Qualidade</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira o antes e depois dos nossos projetos e veja tudo o que podemos fazer pelo seu espaço.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl shadow-lg mb-12"
        >
          <img
            src={imgBuffet}
            alt="Reforma Completa em Buffet - Antes e Depois"
            className="w-full h-[400px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4 z-20">
            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full shadow-md">
              Projetos modernos
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-20">
            <h3 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-md">Reforma Completa em Buffet</h3>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Nossos Serviços Especializados</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-12 w-fit mx-auto">
            {servicesList.map((service, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                <span className="text-gray-700 font-medium text-left">{service}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-md"
          >
            Orçamento no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

