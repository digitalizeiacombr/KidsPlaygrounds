import { motion } from 'motion/react';
import imgRepair from '../assets/images/playground_repair_1788200308329.jpg';
import imgDesign from '../assets/images/playground_custom_design_1788200351494.jpg';
import imgMaintenance from '../assets/images/playground_maintenance_1788200370408.jpg';

export default function Services() {
  const services = [
    {
      image: imgRepair,
      title: "Reformas e Reparos",
      description: "Troca de redes de proteção, isotubos, espumas, lonas e revitalização completa da estrutura.",
      color: "bg-blue-50 border-blue-100 hover:border-blue-300"
    },
    {
      image: imgDesign,
      title: "Projetos Sob Medida",
      description: "Fabricação de Kid Play novo, desenhado exclusivamente para o tamanho e necessidade do seu espaço.",
      color: "bg-yellow-50 border-yellow-100 hover:border-yellow-300"
    },
    {
      image: imgMaintenance,
      title: "Manutenção e Laudos",
      description: "Manutenção preventiva e corretiva com emissão de laudo técnico (ART) para adequação a alvarás.",
      color: "bg-green-50 border-green-100 hover:border-green-300"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Nossas Soluções para o seu Espaço Kids
          </h2>
          <p className="text-lg text-gray-600">
            Serviços completos para garantir a segurança das crianças e a tranquilidade do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`p-6 sm:p-8 rounded-2xl border-2 transition-all duration-300 overflow-hidden ${service.color}`}
            >
              <div className="w-full h-48 sm:h-56 mb-6 rounded-xl overflow-hidden shadow-md">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
