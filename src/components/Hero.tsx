import React from 'react';
import { ShoppingBag, MessageSquare, ShieldCheck, Truck, Sparkles } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/2250777775022?text=Bonjour%20La%20Maison%20des%20Chaussures%20!%20Je%20souhaite%20consulter%20les%20derniers%20mod%C3%A8les%20et%20passer%20commande.";

  const handleScrollToCatalogue = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const catalogueSection = document.querySelector('#catalogue');
    if (catalogueSection) {
      catalogueSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-zinc-950 text-white overflow-hidden min-h-[85vh] flex flex-col justify-between" id="accueil">
      {/* Background with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460353581641-37baddff0d21?w=1600&auto=format&fit=crop&q=80"
          alt="La Maison des Chaussures Premium Background"
          className="w-full h-full object-cover object-center opacity-30 scale-105"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-zinc-950/40"></div>
        {/* Subtle grid accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex-grow flex items-center">
        <div className="max-w-3xl">
          {/* Tagline / Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/30 text-amber-400 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Positionnement : Qualité vérifiée à prix mini</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white mb-6">
            La Maison des Chaussures <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">
              La qualité à petit prix
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-lg sm:text-xl text-zinc-300 max-w-2xl mb-8 leading-relaxed">
            Dites adieu aux contrefaçons fragiles d'Abidjan. Découvrez notre collection homme, femme et enfant à <strong className="text-white">Cocody Riviera M'Badon</strong>, à l'entrée de Paradisia.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              onClick={handleScrollToCatalogue}
              className="flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 px-8 py-4 rounded-xl font-extrabold text-base transition-all duration-300 shadow-[0_4px_20px_rgba(251,191,36,0.3)] hover:translate-y-[-2px]"
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Voir le catalogue</span>
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 hover:translate-y-[-2px]"
            >
              <MessageSquare className="w-5 h-5 text-amber-400" />
              <span>Commander sur WhatsApp</span>
            </a>
          </div>

          {/* Value props badges */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 pt-8 border-t border-zinc-900 text-sm text-zinc-400">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>Qualité Vérifiée & Garantie</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-amber-400 flex-shrink-0" />
              <span>Livraison Rapide Abidjan</span>
            </div>
            <div className="hidden md:flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-ping"></span>
              <span>Boutique Physique à Cocody</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social proof band */}
      <div className="relative z-10 w-full bg-zinc-900 border-t border-zinc-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center text-zinc-400 font-sans text-xs sm:text-sm font-semibold tracking-wider uppercase">
            <span className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center bg-amber-400 text-zinc-950 w-5 h-5 rounded-full text-[10px] font-black">✓</span>
              +5 000 avis clients satisfaits
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14.5h-2v-2h2v2zm0-4h-2V7h2v5.5z"/>
              </svg>
              118K Abonnés TikTok
            </span>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
              Stock à Riviera M'Badon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
