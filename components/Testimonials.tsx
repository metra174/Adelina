import React from 'react';
import { Star, Instagram } from 'lucide-react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    name: "Jessica Pitbull",
    role: "Figura Pública",
    quote: "O Atelier AR transformou o meu vestido numa verdadeira obra de arte. Senti-me poderosa.",
    image: "https://images.unsplash.com/photo-1616776104860-e7a9154f3b23?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Cliente Real",
    role: "Noiva",
    quote: "Meu vestido ficou perfeito! Não precisei ajustar nada. Foi exatamente como sonhei.",
    image: "https://images.unsplash.com/photo-1629450346768-450f383e5871?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Cliente Real",
    role: "Debutante",
    quote: "O meu vestido de 18 anos foi o destaque da noite. Recebi elogios o tempo inteiro!",
    image: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?q=80&w=200&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-deepBlack text-white relative">
      <div className="container mx-auto px-6">
        
        {/* Instagram Follower Badge */}
        <div className="flex flex-col items-center justify-center mb-16">
            <a href="https://instagram.com/byadelinadorosario" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gold-500 mb-2 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
                <span className="text-xl font-bold">+34.000 Seguidoras no Instagram</span>
            </a>
            <p className="text-gray-400 font-light text-center max-w-md">
                Confiado por milhares de mulheres que seguem e admiram a nossa arte.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 hover:border-gold-500/50 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-2xl">
              <div className="flex justify-center mb-6">
                 {/* 5 Stars */}
                 <div className="flex space-x-1">
                    {[1,2,3,4,5].map(star => <Star key={star} size={16} className="text-gold-500 fill-current" />)}
                 </div>
              </div>
              
              <p className="text-center font-serif text-lg italic mb-8 leading-relaxed text-gray-200">
                "{t.quote}"
              </p>

              <div className="flex flex-col items-center">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-16 h-16 rounded-full object-cover border-2 border-gold-500 mb-3"
                />
                <h4 className="font-bold text-white uppercase tracking-wider text-sm">{t.name}</h4>
                <span className="text-gold-500 text-xs uppercase tracking-widest mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};