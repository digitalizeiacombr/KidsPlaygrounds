import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import logoImg from '../Logo - com fundo.png';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Brand Info */}
        <div className="flex flex-col items-center mb-12">
          <img src={logoImg} alt="KidsPlaygrounds Logo" className="h-16 w-16 rounded-full object-cover mb-4" />
          <span className="font-extrabold text-2xl text-white">Kids Playgrounds</span>
          <span className="text-xs font-bold text-blue-500 uppercase tracking-wider mb-4 mt-1">Playground e Brinquedão</span>
          <p className="text-gray-400 leading-relaxed max-w-md mb-6">
            Especialistas em reformas, manutenção e fabricação de brinquedões. Garantindo segurança, durabilidade e laudos técnicos em dia para o seu negócio.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Links and Contact Section */}
        <div className="w-full border-t border-gray-800 pt-10 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Links Rápidos</h4>
            <ul className="space-y-4 flex flex-col items-center">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Início</a></li>
              <li><a href="#servicos" className="hover:text-blue-400 transition-colors">Nossos Serviços</a></li>
              <li><a href="#galeria" className="hover:text-blue-400 transition-colors">Galeria de Projetos</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center">
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contato</h4>
            <ul className="space-y-6 flex flex-col items-center">
              <li className="flex flex-col items-center gap-1">
                <Phone size={20} className="text-blue-500 mb-1" />
                <div className="text-center">
                  <p className="font-medium text-white">(11) 97431-3724</p>
                  <p className="text-sm text-gray-500">Seg a Sex, 8h às 18h</p>
                </div>
              </li>
              <li className="flex flex-col items-center gap-1">
                <Mail size={20} className="text-blue-500 mb-1" />
                <span>contato@kidsplaygrounds.com.br</span>
              </li>
              <li className="flex flex-col items-center gap-1">
                <MapPin size={20} className="text-blue-500 mb-1" />
                <span className="text-center">
                  <span className="font-bold text-white">Endereço</span><br/>
                  Estr. Vovó Carolina, 314 - Guaianases<br/>
                  São Paulo - SP, 08371-720<br/>
                  <span className="block mt-2 font-medium text-blue-400">Atendimento em todo o Brasil</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full mt-6 pt-8 border-t border-gray-800 flex flex-col items-center gap-2 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kids Playgrounds. Todos os direitos reservados.</p>
          <p>CNPJ: 42.868.116/0001-97</p>
        </div>
      </div>
    </footer>
  );
}
