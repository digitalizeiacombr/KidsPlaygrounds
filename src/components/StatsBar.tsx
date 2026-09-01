import { CheckCircle2, CreditCard, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function StatsBar() {
  const stats = [
    {
      icon: <CreditCard className="w-5 h-5 sm:w-8 sm:h-8 text-yellow-400" />,
      value: "12x",
      label: "Facilitado"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5 sm:w-8 sm:h-8 text-green-400" />,
      value: "100%",
      label: "Normas ABNT"
    },
    {
      icon: <Award className="w-5 h-5 sm:w-8 sm:h-8 text-blue-400" />,
      value: "Garantia",
      label: "Estrutural"
    }
  ];

  return (
    <section className="bg-blue-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 text-center divide-x divide-blue-800">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-start space-y-1 sm:space-y-3 px-1 sm:px-2"
            >
              <div className="bg-white/10 p-2 sm:p-4 rounded-full flex-shrink-0">
                {stat.icon}
              </div>
              <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold">{stat.value}</h3>
              <p className="text-blue-200 font-medium uppercase tracking-wider text-[9px] sm:text-xs md:text-sm leading-tight sm:leading-normal">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
