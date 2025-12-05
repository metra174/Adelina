import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-deepBlack relative overflow-hidden text-white">
      {/* Decorative Gold Line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-gold-500"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Video Side - "Making Of" feeling */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-20 pointer-events-none"></div>
              <video 
                className="w-full h-[600px] object-cover rounded-sm shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://i.imgur.com/ta9CZLC.jpeg"
              >
                {/* Stock video of sewing/tailoring details */}
                <source src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-tailor-working-with-a-needle-and-thread-41968-large.mp4" type="video/mp4" />
              </video>
            </div>
            {/* Outline Decorative Box */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold-500/30 -z-0 hidden md:block"></div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2">
            <span className="text-gold-500 uppercase tracking-widest text-sm font-semibold mb-2 block">
              Sobre a Marca
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-8">
              A Arte da Elegância <br /> Feita à Mão
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light leading-relaxed">
              <p>
                O <strong className="text-white font-medium">Atelier AR – By Adelina do Rosário</strong> é um espaço dedicado à alta costura, 
                onde tradição, criatividade e precisão se encontram. Com origem em Angola, o atelier é reconhecido 
                pelo seu padrão elevado de acabamento e atenção meticulosa aos detalhes.
              </p>
              <p>
                A estilista Adelina do Rosário combina técnicas de costura refinadas com um olhar contemporâneo 
                para criar peças que contam histórias. Cada vestido é desenvolvido de forma exclusiva, 
                respeitando o estilo e a personalidade de cada cliente.
              </p>
              <p className="italic text-lg text-white border-l-4 border-gold-500 pl-4 py-2 bg-white/5">
                "Aqui, produzimos mais do que vestidos — criamos momentos, memórias e sensações. 
                A sua confiança é costurada na nossa perfeição."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};