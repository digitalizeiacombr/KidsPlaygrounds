import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Qual o tempo médio de uma reforma?",
      answer: "O tempo pode variar de acordo com o tamanho e estado do brinquedão. Em média, pequenas reformas e manutenções preventivas levam de 1 a 3 dias. Reformas completas podem levar até uma semana. Nosso foco é minimizar o tempo de inatividade do seu espaço."
    },
    {
      question: "Vocês emitem laudo técnico (ART)?",
      answer: "Sim! Todos os nossos serviços estruturais e fabricações são acompanhados por engenheiro responsável, garantindo a emissão de laudo ART exigido pelos bombeiros e prefeitura para o seu alvará de funcionamento."
    },
    {
      question: "Atendem fora do estado?",
      answer: "Nosso foco principal de atendimento é a região de São Paulo, porém avaliamos projetos e reformas de médio a grande porte em outras regiões do Brasil. Consulte nossa equipe via WhatsApp para avaliar a viabilidade."
    },
    {
      question: "Usam materiais adequados e seguros?",
      answer: "Trabalhamos apenas com materiais certificados, espumas de alta densidade, lonas reforçadas, redes com proteção UV e estrutura metálica galvanizada, garantindo a máxima segurança e durabilidade conforme as normas da ABNT."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Dúvidas Frequentes</h2>
          <p className="text-lg text-gray-600">
            Respostas rápidas para as principais dúvidas dos nossos clientes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span className="font-bold text-gray-900">{faq.question}</span>
                <ChevronDown 
                  className={`text-blue-600 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-50 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
