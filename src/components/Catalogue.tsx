import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal, Tag, Filter, Check } from 'lucide-react';
import { Product, Category } from '../types';
import { PRODUCTS_DATA } from '../data';

interface CatalogueProps {
  onOrderProduct: (product: Product) => void;
}

export default function Catalogue({ onOrderProduct }: CatalogueProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  // Available unique sizes in our data for filtering
  const allSizes = useMemo(() => {
    const sizesSet = new Set<number>();
    PRODUCTS_DATA.forEach(p => {
      p.pointuresDisponibles.forEach(s => sizesSet.add(s));
    });
    return Array.from(sizesSet).sort((a, b) => a - b);
  }, []);

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      // 1. Category Filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'promo') {
          if (!product.prixPromo) return false;
        } else if (product.categorie !== selectedCategory) {
          return false;
        }
      }

      // 2. Search Query Filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.nom.toLowerCase().includes(query);
        const matchesDesc = product.description?.toLowerCase().includes(query) || false;
        const matchesColor = product.couleurs.some(c => c.toLowerCase().includes(query));
        if (!matchesName && !matchesDesc && !matchesColor) return false;
      }

      // 3. Size Filter
      if (selectedSize !== null) {
        if (!product.pointuresDisponibles.includes(selectedSize)) return false;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, selectedSize]);

  // Categories definition
  const categoriesList: { value: Category | 'all'; label: string }[] = [
    { value: 'all', label: 'Toutes les paires' },
    { value: 'homme', label: 'Homme' },
    { value: 'femme', label: 'Femme' },
    { value: 'enfant', label: 'Enfant' },
    { value: 'promo', label: 'Promos & Bons Plans' },
  ];

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setSelectedSize(null);
  };

  return (
    <section className="py-24 bg-zinc-900 text-white scroll-mt-20" id="catalogue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-black text-amber-400">Catalogue e-commerce</span>
          <h2 className="font-sans text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mt-1">
            Découvrez nos <span className="text-amber-400">collections</span>
          </h2>
          <div className="h-1.5 w-16 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="mt-4 text-zinc-400 font-sans text-base sm:text-lg">
            Tous nos modèles sont inspectés et garantis de haute qualité à Abidjan. Commandez en toute confiance.
          </p>
        </div>

        {/* Filters and Search Bar Container */}
        <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 mb-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* Search input (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-zinc-500">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une paire (ex: Nike, Jordan, Mocassin...)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl pl-11 pr-4 py-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all font-sans"
              />
            </div>

            {/* Category horizontal scroll / chips (7 cols) */}
            <div className="lg:col-span-7 flex gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
              {categoriesList.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`flex-shrink-0 px-4.5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase tracking-wider ${
                    selectedCategory === cat.value
                      ? 'bg-amber-400 text-zinc-950 shadow-lg shadow-amber-400/20'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>

          {/* Sizing Filter row */}
          <div className="mt-6 pt-6 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span className="font-sans text-xs uppercase tracking-wider text-zinc-400 font-bold">
                Filtrer par Pointure :
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedSize(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedSize === null
                    ? 'bg-zinc-800 text-amber-400 border border-amber-400/30'
                    : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:text-zinc-300'
                }`}
              >
                Toutes
              </button>
              {allSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                  className={`w-9 h-9 rounded-lg text-xs font-mono font-bold transition-all flex items-center justify-center ${
                    selectedSize === size
                      ? 'bg-amber-400 text-zinc-950 font-black shadow-md'
                      : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => {
              const hasPromo = !!product.prixPromo;
              const formattedPrice = product.prix.toLocaleString('fr-FR');
              const formattedPromoPrice = product.prixPromo?.toLocaleString('fr-FR');
              
              // Calculate promo savings to write TikTok badge style: e.g. "Promo 10k"
              let promoBadgeText = '';
              if (hasPromo && product.prixPromo) {
                promoBadgeText = `Promo ${Math.round(product.prixPromo / 1000)}k`;
              }

              return (
                <div 
                  key={product.id}
                  className="group bg-zinc-950 border border-zinc-800/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-zinc-700/60 transition-all duration-300 hover:shadow-2xl shadow-zinc-950/50"
                >
                  {/* Image Block: Height 220px, width 100%, object-fit: cover, rounded corners at the top */}
                  <div className="relative h-[220px] w-full overflow-hidden bg-zinc-900 flex items-center justify-center rounded-t-2xl">
                    {/* Promo Badge */}
                    {hasPromo && (
                      <span className="absolute top-4 left-4 z-10 bg-amber-400 text-zinc-950 text-xs font-black px-3 py-1.5 rounded-lg uppercase tracking-wider shadow-lg animate-pulse flex items-center gap-1.5">
                        <Tag className="w-3 h-3 fill-current" />
                        {promoBadgeText}
                      </span>
                    )}

                    {/* Category Label */}
                    <span className="absolute top-4 right-4 z-10 bg-zinc-900/90 backdrop-blur-sm text-zinc-300 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-widest border border-zinc-800">
                      {product.categorie}
                    </span>

                    <img 
                      src={product.image} 
                      alt={product.nom}
                      className="w-full h-[220px] object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-t-2xl"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Custom image fallback block if Unsplash/Imgur links fail
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=80';
                      }}
                    />
                  </div>

                  {/* Description / Text Info */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      {/* Bouton Chaussures placé en haut de la carte */}
                      <div className="mb-3.5">
                        <button className="flex items-center gap-1.5 bg-zinc-900 hover:bg-amber-400 hover:text-zinc-950 text-amber-400 border border-zinc-800 hover:border-amber-400 text-xxs font-black px-3 py-1.5 rounded-full uppercase tracking-widest transition-all duration-300 shadow-sm">
                          Chaussures
                        </button>
                      </div>

                      <h3 className="font-sans font-bold text-white text-base tracking-wide group-hover:text-amber-400 transition-colors duration-200 truncate mb-2">
                        {product.nom}
                      </h3>
                      
                      {product.description && (
                        <p className="font-sans text-zinc-400 text-xs leading-relaxed line-clamp-3 mb-4">
                          {product.description}
                        </p>
                      )}

                      {/* Sizes indicator */}
                      <div className="mb-4">
                        <span className="font-sans text-[10px] font-bold uppercase tracking-wider text-zinc-500 block mb-1.5">
                          Pointures dispo :
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {product.pointuresDisponibles.map((p) => (
                            <span 
                              key={p} 
                              className={`font-mono text-[10px] px-2 py-0.5 rounded border font-bold ${
                                selectedSize === p 
                                  ? 'bg-amber-400 text-zinc-950 border-amber-400' 
                                  : 'bg-zinc-900 text-zinc-300 border-zinc-800'
                              }`}
                            >
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Durée de livraison / disponibilité */}
                      {product.duree && (
                        <div className="flex items-center gap-2 text-zinc-400 font-sans text-xs bg-zinc-900/50 p-2.5 rounded-xl border border-zinc-800/60 mb-2">
                          <span className="text-amber-400">⏱</span>
                          <span className="text-xxs uppercase tracking-wider font-bold">Durée : <strong className="text-amber-400 font-extrabold normal-case">{product.duree}</strong></span>
                        </div>
                      )}
                    </div>

                    {/* Bottom price and order section */}
                    <div className="mt-4 pt-4 border-t border-zinc-900/80 flex items-center justify-between gap-2">
                      <div className="flex flex-col">
                        {hasPromo ? (
                          <>
                            <span className="font-mono text-base font-black text-amber-400 leading-none">
                              {formattedPromoPrice} FCFA
                            </span>
                            <span className="font-mono text-xs text-zinc-500 line-through mt-1">
                              {formattedPrice} FCFA
                            </span>
                          </>
                        ) : (
                          <span className="font-mono text-base font-black text-white leading-none">
                            {formattedPrice} FCFA
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => onOrderProduct(product)}
                        className="bg-amber-400 text-zinc-950 hover:bg-amber-300 font-black text-xs uppercase tracking-wider py-2.5 px-4.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-amber-400/20"
                      >
                        Commander
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search / Filters state */
          <div className="text-center py-16 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 max-w-lg mx-auto">
            <Filter className="w-10 h-10 text-zinc-600 mx-auto mb-4" />
            <h3 className="font-sans font-bold text-white text-lg">Aucun modèle trouvé</h3>
            <p className="font-sans text-zinc-500 text-sm mt-2 leading-relaxed">
              Nous n'avons aucun modèle correspondant à vos filtres de recherche ou de pointure en ce moment.
            </p>
            <button
              onClick={handleResetFilters}
              className="mt-6 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-bold text-xs px-5 py-2.5 rounded-xl transition-all uppercase tracking-widest"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
