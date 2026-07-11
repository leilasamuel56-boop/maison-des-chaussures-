import React from 'react';
import { MapPin, Phone, Clock, MessageSquare } from 'lucide-react';

export default function ContactMap() {
  return (
    <section className="py-20 bg-zinc-950 text-white border-t border-zinc-900" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Où nous <span className="text-amber-400">trouver ?</span>
          </h2>
          <div className="h-1.5 w-16 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-zinc-400 font-sans text-base sm:text-lg">
            Venez essayer vos pointures préférées directement en boutique ou contactez-nous pour une livraison rapide.
          </p>
        </div>

        {/* Contact Info & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Details (4 columns) */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800/80 rounded-3xl p-8 flex flex-col justify-between">
            <div className="space-y-8">
              
              {/* Address card */}
              <div className="flex gap-4">
                <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl border border-amber-400/20 self-start">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-white mb-1">Notre Adresse</h3>
                  <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Cocody Riviera M'Badon, à l'entrée de Paradisia <br />
                    Abidjan, Côte d'Ivoire
                  </p>
                  <p className="font-sans text-amber-400 text-xs font-semibold mt-1">
                    Repère : Près de l'entrée principale de Paradisia
                  </p>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4">
                <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl border border-amber-400/20 self-start">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-white mb-1">Téléphone & WhatsApp</h3>
                  <a 
                    href="tel:+2250777775022" 
                    className="block font-sans text-zinc-300 text-lg font-black hover:text-amber-400 transition-colors duration-200"
                  >
                    +225 07 77 77 50 22
                  </a>
                  <a 
                    href="https://wa.me/2250777775022"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-green-400 hover:text-green-300 font-bold mt-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Discuter en ligne sur WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Hours card */}
              <div className="flex gap-4">
                <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl border border-amber-400/20 self-start">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-sans text-lg font-bold text-white mb-1">Horaires d'Ouverture</h3>
                  <p className="font-sans text-zinc-300 text-sm sm:text-base leading-relaxed">
                    Lundi - Samedi : <strong className="text-white">08h00 - 19h00</strong> <br />
                    Dimanche : Sur rendez-vous uniquement
                  </p>
                </div>
              </div>

            </div>

            {/* CTA action wrapper */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 space-y-3">
              <a 
                href="https://wa.me/2250777775022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 rounded-xl font-black text-center text-sm transition-colors duration-300 shadow-lg shadow-[#25d366]/10"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Discuter en Direct sur WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Interactive Google Map (7 columns) */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800/80 rounded-3xl overflow-hidden min-h-[350px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15888.751167664673!2d-3.9554619!3d5.3883713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xffc1f16da08546b%3A0x633ea88607a718b5!2sRiviera%20M&#39;badon%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1700000000000!5m2!1sfr!2sci"
              className="absolute inset-0 w-full h-full border-0 grayscale opacity-80 hover:grayscale-0 transition-all duration-300"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="La Maison des Chaussures — Riviera M'Badon Location Map"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
