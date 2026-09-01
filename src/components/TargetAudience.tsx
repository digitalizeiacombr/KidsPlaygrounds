import { Store, GraduationCap, Building2, Utensils } from 'lucide-react';
import { motion } from 'motion/react';

export default function TargetAudience() {
  const audiences = [
    { icon: <Store size={32} />, name: "Buffets Infantis" },
    { icon: <GraduationCap size={32} />, name: "Escolas e Creches" },
    { icon: <Building2 size={32} />, name: "Condomínios" },
    { icon: <Utensils size={32} />, name: "Restaurantes" }
  ];

  return (
    <section id="publico" className="py-20 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Para quem é o nosso serviço?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Atendemos diversos segmentos comerciais que precisam de espaços infantis seguros, atrativos e dentro das normas legais.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center justify-center gap-4 group"
            >
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="font-bold text-gray-800">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
