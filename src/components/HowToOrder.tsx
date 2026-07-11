import React from 'react';
import { Eye, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

export default function HowToOrder() {
  const steps = [
    {
      number: "01",
      title: "Choisissez votre modèle",
      description: "Parcourez notre catalogue et filtrez les articles par catégorie (Homme, Femme, Enfant ou Promo).",
      icon: Eye,
      color: "bg-zinc-900 border-zinc-800 text-amber-400"
    },
    {
      number: "02",
      title: "Sélectionnez pointure & couleur",
      description: "Cliquez sur 'Commander' pour ouvrir notre formulaire sécurisé. Choisissez vos critères exacts sans risque d'erreur.",
      icon: CheckCircle2,
      color: "bg-amber-400 text-zinc-950"
    },
    {
      number: "03",
      title: "Validez sur WhatsApp",
      description: "Envoyez le message généré automatiquement d'un seul clic. Nous planifions la livraison ou le retrait en magasin immédiatement !",
      icon: MessageSquare,
      color: "bg-zinc-900 border-zinc-800 text-amber-400"
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 text-white border-t border-zinc-900" id="comment-commander">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-white">
            Comment <span className="text-amber-400">commander ?</span>
          </h2>
          <div className="h-1.5 w-16 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-zinc-400 font-sans text-base sm:text-lg">
            Un processus ultra-rapide et transparent conçu pour l'utilisateur mobile. Pas de formulaires interminables, juste de la simplicité.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative bg-zinc-900/40 border border-zinc-800/80 rounded-2xl p-8 hover:border-zinc-700/60 transition-all duration-300 hover:translate-y-[-4px] group"
              >
                {/* Connection line for desktop */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-zinc-800 z-10"></div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-xl ${step.color} transition-all duration-300 group-hover:scale-110 shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  {/* Step number watermark */}
                  <span className="font-sans font-black text-5xl text-zinc-800 tracking-tighter select-none">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-sans text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="font-sans text-zinc-400 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Informative reassurance banner */}
        <div className="mt-16 bg-gradient-to-r from-zinc-900 to-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-amber-400/10 p-3 rounded-xl border border-amber-400/20 text-amber-400 hidden sm:block">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-sans text-lg font-bold text-white">Aucun paiement risqué en ligne</h4>
              <p className="font-sans text-zinc-400 text-sm mt-1">Vous payez uniquement après vérification du produit à la livraison ou lors de votre retrait en magasin.</p>
            </div>
          </div>
          <a
            href="#catalogue"
            className="bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-sm px-6 py-3 rounded-lg transition-all duration-300 text-center w-full md:w-auto"
          >
            Commencer mes achats
          </a>
        </div>

      </div>
    </section>
  );
}
