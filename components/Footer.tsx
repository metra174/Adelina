import React from 'react';
import { Button } from './Button';
import { Instagram, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const whatsappLink = "https://wa.me/244923797350";

  return (
    <footer id="contact" className="bg-neutral-900 text-white border-t border-white/5">
      {/* Final CTA */}
      <div className="py-24 container mx-auto px-6 text-center border-b border-white/10">
        <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Pronta para brilhar?</h2>
        <p className="max-w-2xl mx-auto text-gray-400 font-light text-lg mb-10">
          O seu vestido perfeito está a um clique de distância. Reserve a sua consultoria exclusiva 
          com a estilista Adelina do Rosário e dê o primeiro passo para viver o seu momento com elegância.
        </p>
        <Button variant="primary" icon onClick={onOpenBooking} className="py-4 px-12 text-lg shadow-xl hover:shadow-gold-500/20">
          Agendar Consultoria
        </Button>
      </div>

      {/* Info Section */}
      <div className="py-16 container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="font-serif text-3xl font-bold tracking-widest mb-4">
              AR<span className="text-gold-500">.</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Transformamos tecidos em sonhos. Cada peça é uma celebração da identidade feminina, 
              feita sob medida com precisão e amor.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="uppercase tracking-widest font-bold text-sm mb-6 text-white">Contactos</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <a href="https://instagram.com/byadelinadorosario" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 hover:text-gold-500 transition-colors">
                  <Instagram size={18} /> @byadelinadorosario
                </a>
              </li>
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 hover:text-gold-500 transition-colors">
                  <Phone size={18} /> +244 923 797 350
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <MapPin size={18} /> Luanda, Angola
              </li>
            </ul>
          </div>

          {/* Additional Info */}
          <div>
            <h4 className="uppercase tracking-widest font-bold text-sm mb-6 text-white">Informações</h4>
            <ul className="space-y-4 text-gray-400">
              <li>Atendimento personalizado</li>
              <li>Ajustes incluídos conforme o modelo</li>
              <li>Produção sob medida</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black text-gray-500 py-6 text-center text-xs uppercase tracking-widest border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Atelier AR. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};