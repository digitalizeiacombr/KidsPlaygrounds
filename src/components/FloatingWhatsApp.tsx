import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Pulse effect rings */}
      <span className="absolute w-full h-full rounded-full bg-green-500 opacity-40 animate-ping" style={{ animationDuration: '2s' }} />
    </a>
  );
}
