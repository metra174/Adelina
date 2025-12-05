import React from 'react';
import { GalleryItem } from '../types';

const images: GalleryItem[] = [
  { 
    src: 'https://i.imgur.com/tuxHtHN.jpeg', 
    caption: 'Detalhes em pedraria feitos à mão.' 
  },
  { 
    src: 'https://i.imgur.com/HWlWuvj.jpeg0', 
    caption: 'Corte sereia com cauda estruturada.' 
  },
  { 
    src: 'https://i.imgur.com/LQkwGVM.jpeg', 
    caption: 'Acabamento premium em renda francesa.' 
  },
  { 
    src: 'https://i.imgur.com/U4KDcDa.jpeg', 
    caption: 'Sofisticação que molda a silhueta.' 
  },
  { 
    src: 'https://i.imgur.com/HWlWuvj.jpeg', 
    caption: 'Vestido de gala com brilho discreto e elegante.' 
  },
  { 
    src: 'https://i.imgur.com/tuxHtHN.jpeg', 
    caption: 'Luxo em cada camada do tecido.' 
  },
  { 
    src: 'https://i.imgur.com/SvkzYWT.jpeg', 
    caption: 'Design exclusivo com acabamento impecável.' 
  },
  { 
    src: 'https://i.imgur.com/b7nTqC8.jpeg', 
    caption: 'A leveza e o movimento da alta costura.' 
  },
  { 
    src: 'https://i.imgur.com/3pxRIwo.jpeg', 
    caption: 'Elegância atemporal para momentos únicos.' 
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