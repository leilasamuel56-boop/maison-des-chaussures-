import React, { useState } from 'react';
import { Menu, X, ShoppingBag, PhoneCall } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Catalogue", href: "#catalogue" },
    { name: "Comment commander", href: "#comment-commander" },
    { name: "Avis clients", href: "#avis-clients" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-zinc-950/95 border-b border-zinc-800/80 backdrop-blur-md text-white" id="app-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#accueil" className="flex items-center gap-3 group">
              <img
                src="https://i.imgur.com/jd2pkkz.jpeg"
                alt="La Maison des Chaussures Logo"
                className="w-12 h-12 object-cover rounded-lg border border-amber-400 group-hover:scale-105 transition-transform duration-200 shadow-[0_0_15px_rgba(251,191,36,0.3)]"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <span className="font-sans font-black text-lg tracking-wider text-white group-hover:text-amber-400 transition-colors duration-200">
                  LA MAISON
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-amber-400 font-bold -mt-1">
                  des chaussures
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="font-sans text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors duration-200 relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+2250777775022"
              className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-white transition-colors duration-200"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>+225 07 77 77 50 22</span>
            </a>
            <a
              href="#catalogue"
              onClick={(e) => handleScroll(e, "#catalogue")}
              className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-zinc-950 px-5 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.4)]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Catalogue</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 focus:outline-none transition-colors duration-200"
              aria-label="Toggle Menu"
              id="mobile-menu-toggle"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-amber-400" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-900 animate-fadeIn" id="mobile-menu-drawer">
          <div className="px-2 pt-3 pb-6 space-y-2 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="block px-4 py-3 rounded-lg text-base font-semibold text-zinc-300 hover:text-amber-400 hover:bg-zinc-900/60 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-zinc-900 px-4 space-y-4">
              <a
                href="tel:+2250777775022"
                className="flex items-center gap-3 text-base font-semibold text-zinc-300 py-2"
              >
                <PhoneCall className="w-5 h-5 text-amber-400" />
                <span>+225 07 77 77 50 22</span>
              </a>
              <a
                href="https://wa.me/2250777775022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-3 rounded-lg font-bold text-center text-sm transition-colors duration-300"
              >
                <span>Commander sur WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
