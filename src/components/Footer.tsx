import React from 'react';
import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-900 py-16" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand block (5 columns) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="https://i.imgur.com/jd2pkkz.jpeg"
                alt="La Maison des Chaussures Logo"
                className="w-10 h-10 object-cover rounded-lg border border-amber-400 shadow-md"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-sans font-black text-base tracking-wider">
                  LA MAISON
                </span>
                <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-amber-400 font-bold -mt-1">
                  des chaussures
                </span>
              </div>
            </div>
            <p className="font-sans text-sm text-zinc-400 max-w-sm leading-relaxed">
              La boutique de référence à Cocody Riviera M'Badon pour trouver des chaussures de qualité supérieure à des tarifs abordables. "La qualité à petit prix".
            </p>
          </div>

          {/* Navigation Links block (3 columns) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-black text-amber-400">Liens Rapides</h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              <li>
                <a href="#accueil" onClick={(e) => handleScroll(e, "#accueil")} className="hover:text-white transition-colors duration-200">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#catalogue" onClick={(e) => handleScroll(e, "#catalogue")} className="hover:text-white transition-colors duration-200">
                  Catalogue
                </a>
              </li>
              <li>
                <a href="#comment-commander" onClick={(e) => handleScroll(e, "#comment-commander")} className="hover:text-white transition-colors duration-200">
                  Comment commander
                </a>
              </li>
              <li>
                <a href="#avis-clients" onClick={(e) => handleScroll(e, "#avis-clients")} className="hover:text-white transition-colors duration-200">
                  Avis clients
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleScroll(e, "#contact")} className="hover:text-white transition-colors duration-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support / Contact block (4 columns) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-sans text-xs uppercase tracking-widest font-black text-amber-400">Support Client</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-center gap-2">
                <span>WhatsApp :</span>
                <a href="https://wa.me/2250777775022" className="text-white hover:text-amber-400 transition-colors duration-200 font-bold">
                  +225 07 77 77 50 22
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>Instagram :</span>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors duration-200 font-bold">
                  @la_maison_des_chaussures
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>TikTok :</span>
                <a href="https://www.tiktok.com/@la.maison.des.chaussure1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-amber-400 transition-colors duration-200 font-bold">
                  @la.maison.des.chaussure1
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-sans font-medium">
          <div>
            &copy; {currentYear} La Maison des Chaussures. Tous droits réservés.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Fait avec</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>pour Abidjan</span>
            <span className="text-zinc-700">•</span>
            <span>La qualité à petit prix</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
