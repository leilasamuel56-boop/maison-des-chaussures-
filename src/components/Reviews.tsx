import React from 'react';
import { Star, MessageCircle, Heart, User } from 'lucide-react';
import { REVIEWS_DATA } from '../data';

export default function Reviews() {
  return (
    <section className="py-20 bg-zinc-900 text-white border-t border-zinc-950" id="avis-clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Ce que disent <span className="text-amber-400">nos clients</span>
          </h2>
          <div className="h-1.5 w-16 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-zinc-400 font-sans text-base sm:text-lg">
            La confiance s'acquiert par la transparence. Découvrez les avis réels de nos acheteurs à Abidjan.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div 
              key={review.id}
              className="bg-zinc-950 border border-zinc-800/60 rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700/60 transition-all duration-300"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-4 h-4 fill-current ${i < review.note ? 'text-amber-400' : 'text-zinc-700'}`} 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="font-sans text-zinc-300 text-sm leading-relaxed mb-6 italic">
                  "{review.texte}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center pt-4 border-t border-zinc-900">
                <div className="min-w-0">
                  <h4 className="font-sans text-sm font-bold text-white truncate">{review.nom}</h4>
                  <p className="font-sans text-[11px] text-zinc-500 font-medium truncate">{review.achat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Banner (TikTok + Insta) */}
        <div className="mt-16 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 border border-zinc-800/80 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
          {/* Subtle background graphics */}
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="bg-rose-500/10 text-rose-400 border border-rose-500/20 text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              Communauté en ligne
            </span>
            
            <h3 className="font-sans text-2xl sm:text-4xl font-black tracking-tight text-white mb-4">
              Rejoignez nos <span className="text-amber-400">118K abonnés</span> sur TikTok
            </h3>
            
            <p className="font-sans text-zinc-400 text-sm sm:text-base mb-8 leading-relaxed">
              Nous publions chaque jour des vidéos réelles de nos arrivages, des essais de pointure en direct et nos promotions flash hebdomadaires. Suivez la page officielle de la boutique !
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://www.tiktok.com/@la.maison.des.chaussure1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2.5 bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3.5 rounded-xl font-extrabold text-sm transition-all duration-300 w-full sm:w-auto"
              >
                {/* Custom TikTok SVG Logo */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.15 1.12 1.15 2.69 1.83 4.28 1.93v3.9c-1.39-.08-2.74-.6-3.87-1.47-.64-.52-1.18-1.16-1.59-1.89v6.52c-.04 2.11-.79 4.15-2.19 5.72-1.48 1.63-3.64 2.59-5.83 2.64-2.28.05-4.52-.8-6.1-2.45C1.19 17.51.35 15.22.4 12.87c-.03-2.3 1.01-4.5 2.81-5.91 1.88-1.45 4.31-2.02 6.64-1.53v4c-1.28-.35-2.67-.13-3.77.58-.96.65-1.56 1.72-1.61 2.89-.04 1.25.54 2.45 1.51 3.2 1 .75 2.31.95 3.48.51 1.09-.43 1.85-1.46 1.95-2.63V.02h1.11z"/>
                </svg>
                <span>@la.maison.des.chaussure1</span>
              </a>
              <a 
                href="https://wa.me/2250777775022" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] px-6 py-3.5 rounded-xl font-bold text-sm transition-all duration-300 w-full sm:w-auto"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Nous écrire sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
