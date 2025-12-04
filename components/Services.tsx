import React from 'react';
import { CollectionItem } from '../types';

const collections: CollectionItem[] = [
  {
    id: 'bridal',
    title: 'Noivas – Vestidos para o Grande Dia',
    description: 'Transformamos sonhos de casamento em realidade através de vestidos criados 100% sob medida. Tecidos nobres, cortes impecáveis, pedrarias aplicadas à mão e designs únicos fazem parte da nossa assinatura.',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'debutante',
    title: 'Debutantes – Glamour para os 15/18 Anos',
    description: 'Para celebrar a transição para uma nova fase, criamos vestidos que misturam delicadeza, ousadia e brilho. Ideal para jovens que desejam marcar presença com sofisticação e originalidade.',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'couture',
    title: 'Alta Costura e Festas – Peças Exclusivas',
    description: 'Roupas de gala, vestidos de festa, aniversários e eventos formais. Designs elegantes, cortes que valorizam o corpo e detalhes luxuosos fazem de cada peça uma obra de arte feita exclusivamente para si.',
    image: 'https://images.unsplash.com/photo-1569388330292-79cc1ec67270?q=80&w=1000&auto=format&fit=crop'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="collections" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold">Nossas Coleções</span>
          <h2 className="font-serif text-4xl text-white font-bold mt-3">Serviços Exclusivos</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {collections.map((collection) => (
            <div key={collection.id} className="group cursor-pointer h-full">
              <div className="relative overflow-hidden h-[500px] w-full bg-black shadow-2xl border border-white/5">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                  <h3 className="font-serif text-2xl md:text-3xl mb-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 leading-tight">
                    {collection.title}
                  </h3>
                  <div className="h-0.5 w-12 bg-gold-500 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                  <p className="text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 text-gray-300">
                    {collection.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};