import { ArrowRight, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';
import heroVideo from '../Kidsplayground.mp4';

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // Deixa o vídeo um pouco mais lento
    }
  }, []);

  return (
    <section id="inicio" className="relative pt-[55vh] pb-12 sm:pt-[50vh] lg:pt-40 lg:pb-40 overflow-hidden bg-gray-50 min-h-screen lg:min-h-0 flex flex-col justify-end lg:block">
      {/* Background Video aligned to the right */}
      <div className="absolute top-0 right-0 w-full lg:w-[65%] h-full z-0">
        <video 
          ref={videoRef}
          src={heroVideo} 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient overlays to blend the video with the section background */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 lg:via-gray-50/30 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/40 lg:via-transparent to-transparent opacity-100 lg:opacity-80" />
      </div>

      <div className="absolute top-24 left-0 w-full flex justify-center lg:hidden z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/70 backdrop-blur-sm text-blue-800 font-semibold text-sm shadow-sm pointer-events-auto">
          <ShieldCheck size={18} className="text-blue-600" />
          Atendemos em todo Brasil
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Top Badge (Desktop) */}
            <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/70 backdrop-blur-sm text-blue-800 font-semibold text-sm mb-6 shadow-sm">
              <ShieldCheck size={18} className="text-blue-600" />
              Atendemos em todo Brasil
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 [text-shadow:0_1px_4px_rgba(255,255,255,1)]">
              Venda, reforma e remodelação de playgrounds, <span className="text-blue-600">Kidplay e Brinquedão.</span>
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/5511999999999"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Solicitar Orçamento
                <ArrowRight size={18} />
              </a>
              <a
                href="#servicos"
                className="w-full sm:w-auto flex items-center justify-center bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 border border-gray-200 px-5 py-3 sm:px-6 sm:py-3 rounded-xl font-bold text-sm sm:text-base transition-all shadow-sm"
              >
                Conheça os Serviços
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
