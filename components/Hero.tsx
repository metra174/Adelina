import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/244923797350";

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-deepBlack">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full bg-deepBlack">
        <video 
          className="w-full h-full object-cover opacity-90"
          autoPlay 
          muted 
          loop 
          playsInline
          poster="https://images.unsplash.com/photo-1546193430-c2d207739ed7?q=80&w=2500&auto=format&fit=crop"
        >
          {/* Using a high-quality stock video of a bride/fashion model */}
          <source src="https://assets.mixkit.co/videos/preview/mixkit-bride-posing-in-a-beautiful-wedding-dress-4604-large.mp4" type="video/mp4" />
        </video>
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-deepBlack/90 via-deepBlack/50 to-deepBlack/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-4 drop-shadow-lg">
          Elegância <br /> Sob Medida.
        </h1>
        <span className="block text-gold-500 text-xl md:text-2xl font-serif italic mb-8 animate-fade-in-up">
          Made in Angola 🇦🇴
        </span>
        
        <p className="font-sans text-gray-200 text-base md:text-lg lg:text-xl font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          Transformamos sonhos em vestidos exclusivos para Noivas, Debutantes e ocasiões especiais. 
          Cada peça é cuidadosamente desenhada pela estilista <strong className="text-white">Adelina do Rosário</strong> para realçar a sua beleza e identidade.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center group">
          <Button icon onClick={() => window.open(whatsappLink, '_blank')} className="px-10 py-4 text-base">
            Agendar Consultoria no WhatsApp
          </Button>
        </div>

        <div className="mt-16 border-t border-white/20 pt-6 max-w-lg mx-auto">
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Cada detalhe importa. Cada ponto carrega propósito. <br className="hidden md:block" />
            No Atelier AR, criamos peças que celebram a feminilidade com classe, personalidade e requinte.
          </p>
        </div>
      </div>
    </section>
  );
};