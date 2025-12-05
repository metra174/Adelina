import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Coleções', href: '#collections' },
  { label: 'Sobre', href: '#about' },
  { label: 'Contacto', href: '#contact' },
];

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-deepBlack/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center text-white">
        {/* Logo */}
        <a href="#home" className="relative group">
          <div className="font-serif text-3xl font-bold tracking-widest">
            AR<span className="text-gold-500">.</span>
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-300 block">Atelier do Rosário</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-sm uppercase tracking-wider hover:text-gold-500 transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <button 
            onClick={onOpenBooking}
            className="border border-gold-500 text-gold-500 px-4 py-2 text-xs uppercase tracking-widest hover:bg-gold-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_20px_rgba(212,175,55,0.6)]"
          >
            Agendar Consultoria
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-deepBlack z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navItems.map((item) => (
          <a 
            key={item.label} 
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
          >
            {item.label}
          </a>
        ))}
        <div className="flex flex-col gap-6 mt-8 items-center">
           <button 
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="border border-gold-500 text-gold-500 px-6 py-3 uppercase tracking-widest"
          >
            Agendar Consultoria
          </button>
          <a href="https://instagram.com/byadelinadorosario" className="text-white hover:text-gold-500 transition-colors"><Instagram size={24} /></a>
        </div>
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-white"
        >
          <X size={32} />
        </button>
      </div>
    </header>
  );
};