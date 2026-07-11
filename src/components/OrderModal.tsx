import React, { useState, useEffect } from 'react';
import { X, MessageSquare, ShieldCheck, CheckCircle } from 'lucide-react';
import { Product } from '../types';

interface OrderModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ product, isOpen, onClose }: OrderModalProps) {
  if (!isOpen || !product) return null;

  const [selectedPointure, setSelectedPointure] = useState<string>('');
  const [selectedCouleur, setSelectedCouleur] = useState<string>('');
  const [clientName, setClientName] = useState<string>('');
  const [deliveryArea, setDeliveryArea] = useState<string>('');
  const [error, setError] = useState<string>('');

  // Pre-select first options on load or product change
  useEffect(() => {
    if (product) {
      if (product.pointuresDisponibles && product.pointuresDisponibles.length > 0) {
        setSelectedPointure(product.pointuresDisponibles[0].toString());
      } else {
        setSelectedPointure('');
      }

      if (product.couleurs && product.couleurs.length > 0) {
        setSelectedCouleur(product.couleurs[0]);
      } else {
        setSelectedCouleur('');
      }
      
      // Clear errors
      setError('');
    }
  }, [product]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!clientName.trim()) {
      setError('Veuillez entrer votre nom complet.');
      return;
    }
    if (!deliveryArea.trim()) {
      setError('Veuillez préciser votre quartier ou zone de livraison.');
      return;
    }

    const priceToDisplay = product.prixPromo ? product.prixPromo : product.prix;

    // Message construction matching requested format:
    // "Bonjour, je souhaite commander : Sneaker Nike Air Max, pointure 42, couleur Noir. Mon nom : Jean Kouassi, quartier : Riviera 3."
    const message = `Bonjour, je souhaite commander : ${product.nom}, pointure ${selectedPointure}, couleur ${selectedCouleur}. Mon nom : ${clientName.trim()}, quartier : ${deliveryArea.trim()}.`;
    
    // WhatsApp URL
    const whatsappNumber = "2250777775022";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp URL in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    
    // Clear inputs and close
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="order-modal-container">
      {/* Backdrop overlay */}
      <div 
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl z-10 animate-scaleUp">
        
        {/* Header */}
        <div className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-amber-400 text-zinc-950 rounded-lg">
              <MessageSquare className="w-4 h-4 fill-current" />
            </div>
            <h3 className="font-sans text-lg font-black text-white uppercase tracking-wide">
              Formulaire de Commande
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors duration-200"
            aria-label="Close Modal"
            id="close-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Selected Product (Disabled/Read-only representation) */}
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">
              Modèle Sélectionné
            </label>
            <div className="flex items-center gap-3 bg-zinc-950 border border-zinc-800 p-3.5 rounded-xl">
              <img 
                src={product.image} 
                alt={product.nom}
                className="w-12 h-12 object-cover rounded-lg border border-zinc-800"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=100&auto=format&fit=crop&q=80';
                }}
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-sans font-bold text-white text-sm truncate">{product.nom}</h4>
                <div className="flex items-center gap-2 mt-0.5">
                  {product.prixPromo ? (
                    <>
                      <span className="font-mono text-xs font-black text-amber-400">
                        {product.prixPromo.toLocaleString('fr-FR')} FCFA
                      </span>
                      <span className="font-mono text-xxs text-zinc-500 line-through">
                        {product.prix.toLocaleString('fr-FR')} FCFA
                      </span>
                    </>
                  ) : (
                    <span className="font-mono text-xs font-black text-zinc-300">
                      {product.prix.toLocaleString('fr-FR')} FCFA
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Size & Color row */}
          <div className="grid grid-cols-2 gap-4">
            {/* Size Select */}
            <div>
              <label htmlFor="pointure-select" className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">
                Pointure
              </label>
              <select
                id="pointure-select"
                value={selectedPointure}
                onChange={(e) => setSelectedPointure(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans cursor-pointer transition-colors"
                required
              >
                {product.pointuresDisponibles.map((pointure) => (
                  <option key={pointure} value={pointure} className="bg-zinc-900 text-white">
                    Taille {pointure}
                  </option>
                ))}
              </select>
            </div>

            {/* Color Select */}
            <div>
              <label htmlFor="couleur-select" className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">
                Couleur
              </label>
              <select
                id="couleur-select"
                value={selectedCouleur}
                onChange={(e) => setSelectedCouleur(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-amber-400 font-sans cursor-pointer transition-colors"
                required
              >
                {product.couleurs.map((couleur) => (
                  <option key={couleur} value={couleur} className="bg-zinc-900 text-white">
                    {couleur}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Buyer Name Input */}
          <div>
            <label htmlFor="buyer-name" className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">
              Votre Nom Complet
            </label>
            <input
              type="text"
              id="buyer-name"
              placeholder="Ex: Jean Kouassi"
              value={clientName}
              onChange={(e) => {
                setClientName(e.target.value);
                if (error) setError('');
              }}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans placeholder-zinc-600 transition-colors"
              required
            />
          </div>

          {/* Delivery District Input */}
          <div>
            <label htmlFor="delivery-area" className="block text-xs uppercase tracking-widest font-bold text-zinc-400 mb-2">
              Quartier / Zone de livraison
            </label>
            <input
              type="text"
              id="delivery-area"
              placeholder="Ex: Riviera 3, Angré, M'Badon, Plateau..."
              value={deliveryArea}
              onChange={(e) => {
                setDeliveryArea(e.target.value);
                if (error) setError('');
              }}
              className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-amber-400 font-sans placeholder-zinc-600 transition-colors"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-rose-500 text-xs font-semibold font-sans mt-1">
              * {error}
            </p>
          )}

          {/* Action Button */}
          <div className="pt-4 space-y-3">
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-xl font-extrabold text-sm transition-all duration-300 shadow-lg shadow-[#25d366]/10 hover:translate-y-[-1px]"
              id="whatsapp-submit-btn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span>Envoyer la commande sur WhatsApp</span>
            </button>
            <div className="flex items-center justify-center gap-2 text-xxs text-zinc-500 font-sans">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              <span>Paiement sécurisé à la livraison ou retrait en boutique</span>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
}
