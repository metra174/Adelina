import React, { useState } from 'react';
import { X, Calendar, User, Mail, Phone, FileText, Send } from 'lucide-react';
import { Button } from './Button';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    description: ''
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for WhatsApp
    const message = `*Novo Pedido de Agendamento - Atelier AR*%0A%0A` +
      `*Nome:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Telefone:* ${formData.phone}%0A` +
      `*Data Preferida:* ${formData.date}%0A` +
      `*Pedido:* ${formData.description}`;

    const whatsappUrl = `https://wa.me/244923797350?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Close modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-neutral-900 border border-gold-500/30 w-full max-w-lg rounded-sm shadow-2xl overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="bg-black/50 p-6 flex justify-between items-center border-b border-white/10">
          <div>
            <span className="text-gold-500 text-xs uppercase tracking-widest font-bold">Atelier AR</span>
            <h3 className="text-white font-serif text-2xl">Agendar Consultoria</h3>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          <div className="space-y-4">
            {/* Name */}
            <div className="relative group">
              <div className="absolute left-3 top-3 text-gold-500/70 group-focus-within:text-gold-500">
                <User size={18} />
              </div>
              <input
                type="text"
                name="name"
                required
                placeholder="Seu Nome Completo"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <div className="absolute left-3 top-3 text-gold-500/70 group-focus-within:text-gold-500">
                  <Mail size={18} />
                </div>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Seu Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="relative group">
                <div className="absolute left-3 top-3 text-gold-500/70 group-focus-within:text-gold-500">
                  <Phone size={18} />
                </div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Seu WhatsApp"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            {/* Date */}
            <div className="relative group">
              <div className="absolute left-3 top-3 text-gold-500/70 group-focus-within:text-gold-500">
                <Calendar size={18} />
              </div>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors appearance-none"
                style={{ colorScheme: 'dark' }}
              />
            </div>

            {/* Description */}
            <div className="relative group">
              <div className="absolute left-3 top-3 text-gold-500/70 group-focus-within:text-gold-500">
                <FileText size={18} />
              </div>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Breve descrição do que deseja (Ex: Vestido de noiva, estilo sereia...)"
                value={formData.description}
                onChange={handleChange}
                className="w-full bg-black/40 border border-white/10 rounded-sm py-3 pl-10 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors resize-none"
              />
            </div>
          </div>

          <div className="pt-2">
            <Button type="submit" fullWidth className="py-4 shadow-lg hover:shadow-gold-500/20">
              <Send size={18} className="mr-2" /> Enviar Solicitação
            </Button>
            <p className="text-center text-xs text-gray-500 mt-3">
              Ao enviar, será redirecionada para o WhatsApp para confirmar o agendamento.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};