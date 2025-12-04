import React from 'react';
import { GalleryItem } from '../types';

const images: GalleryItem[] = [
  { 
    src: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800', 
    caption: 'Detalhes em pedraria feitos à mão.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1560706834-8c8872558661?q=80&w=800', 
    caption: 'Corte sereia com cauda estruturada.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1550614000-4b9519e02d48?q=80&w=800', 
    caption: 'Acabamento premium em renda francesa.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1549416878-b9ca95e9f6f5?q=80&w=800', 
    caption: 'Sofisticação que molda a silhueta.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1585252195028-10b64d142109?q=80&w=800', 
    caption: 'Vestido de gala com brilho discreto e elegante.' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=800', 
    caption: 'Luxo em cada camada do tecido.' 
  }
];

export const Gallery: React.FC = () => {
  return (
    <section className="py-24 bg-deepBlack border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white font-bold mb-4">O Brilho de Cada Detalhe</h2>
          <p className="max-w-xl mx-auto text-gray-400 font-light">
            A nossa galeria apresenta algumas das peças que mais marcaram as nossas clientes. 
            Cada fotografia representa dedicação, qualidade e a assinatura única da estilista Adelina do Rosário.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((item, index) => (
            <div key={index} className="relative group overflow-hidden aspect-[3/4] border border-white/10">
              <img 
                src={item.src} 
                alt={item.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center px-6 text-center backdrop-blur-[2px]">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="w-8 h-px bg-gold-500 mx-auto mb-4"></div>
                  <p className="text-white font-serif italic text-xl leading-relaxed">{item.caption}</p>
                  <div className="w-8 h-px bg-gold-500 mx-auto mt-4"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};