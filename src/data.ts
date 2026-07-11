import { Product, Review } from './types';

// Images d'illustration haute qualité de chaussures sur Unsplash
export const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    nom: "Asics noire/grise/argentée",
    prix: 10000,
    categorie: "homme",
    image: "https://i.imgur.com/rXnGpek.jpeg",
    pointuresDisponibles: [39, 40, 41, 42, 43, 44],
    couleurs: ["Noir/Gris/Argenté"],
    description: "Design sportif ultra-moderne avec amorti gel pour un confort quotidien d'exception. Style running urbain inégalable.",
    duree: "Livraison sous 24h"
  },
  {
    id: 2,
    nom: "Puma Suède noir/rose",
    prix: 15000,
    prixPromo: 12000,
    categorie: "femme",
    image: "https://i.imgur.com/KF5674U.jpeg",
    pointuresDisponibles: [36, 37, 38, 39, 40],
    couleurs: ["Noir/Rose"],
    description: "Le modèle rétro légendaire revisité avec des touches rose pastel pour un contraste élégant et féminin.",
    duree: "Dispo Immédiate"
  },
  {
    id: 3,
    nom: "Asics blanc cassé/marron/argenté",
    prix: 12000,
    categorie: "homme",
    image: "https://i.imgur.com/acJ0ZNk.jpeg",
    pointuresDisponibles: [40, 41, 42, 43, 44, 45],
    couleurs: ["Blanc cassé/Marron/Argenté"],
    description: "Alliance de teintes neutres et d'empiècements métallisés. Confort respirant premium.",
    duree: "Livraison sous 24h"
  },
  {
    id: 4,
    nom: "Nike SB Dunk Low gris/blanc/noir",
    prix: 15000,
    prixPromo: 12000,
    categorie: "homme",
    image: "https://i.imgur.com/U4pNlIG.jpeg",
    pointuresDisponibles: [39, 40, 41, 42, 43, 44],
    couleurs: ["Gris/Blanc/Noir"],
    description: "La sneaker de skate indispensable au design épuré, robuste et passe-partout.",
    duree: "Dispo Immédiate"
  },
  {
    id: 5,
    nom: "Nike Air Jordan 1 Low marron/orange/vert (Nike Zion)",
    prix: 14000,
    categorie: "homme",
    image: "https://i.imgur.com/sdL3LII.jpeg",
    pointuresDisponibles: [40, 41, 42, 43, 44, 45],
    couleurs: ["Marron/Orange/Vert"],
    description: "Coloris terreux et finitions texturées inspirées de la star de la NBA Zion Williamson.",
    duree: "Livraison sous 24h"
  },
  {
    id: 6,
    nom: "Adidas Samba blanc/bleu motif cœurs (Samba CDG)",
    prix: 12000,
    categorie: "femme",
    image: "https://i.imgur.com/wRkSGBP.jpeg",
    pointuresDisponibles: [36, 37, 38, 39, 40, 41],
    couleurs: ["Blanc/Bleu"],
    description: "Style décontracté indémodable relevé par des détails de cœurs fins et sophistiqués.",
    duree: "Dispo Immédiate"
  },
  {
    id: 7,
    nom: "Numeris blanche/grise",
    prix: 50000,
    categorie: "homme",
    image: "https://i.imgur.com/UvaVQQw.jpeg",
    pointuresDisponibles: [40, 41, 42, 43, 44],
    couleurs: ["Blanc/Gris"],
    description: "Modèle de créateur d'exception aux lignes affirmées. Cuir italien de qualité supérieure.",
    duree: "Livraison Express"
  },
  {
    id: 8,
    nom: "Nike TN blanc/noir marbré",
    prix: 14000,
    prixPromo: 11000,
    categorie: "homme",
    image: "https://i.imgur.com/nsCYroo.jpeg",
    pointuresDisponibles: [40, 41, 42, 43, 44],
    couleurs: ["Blanc/Noir Marbré"],
    description: "Amorti Tuned Air puissant marié à une empeigne marbrée hypnotique. Design futuriste.",
    duree: "Dispo Immédiate"
  },
  {
    id: 9,
    nom: "Numeris noire pailletée",
    prix: 50000,
    categorie: "femme",
    image: "https://i.imgur.com/VCSz9uh.jpeg",
    pointuresDisponibles: [36, 37, 38, 39, 40],
    couleurs: ["Noir Pailleté"],
    description: "L'élégance suprême en paillettes sombres pour briller avec assurance dans les soirées huppées.",
    duree: "Livraison Express"
  },
  {
    id: 10,
    nom: "Asics blanc/rose/beige (femme)",
    prix: 12000,
    categorie: "femme",
    image: "https://i.imgur.com/GNaOUw1.jpeg",
    pointuresDisponibles: [36, 37, 38, 39, 40],
    couleurs: ["Blanc/Rose/Beige"],
    description: "Design doux et harmonieux qui offre un confort thermique et d'assise incroyable tout au long de la journée.",
    duree: "Dispo Immédiate"
  },
  {
    id: 11,
    nom: "Asics blanc/gris/argenté (logo rouge)",
    prix: 12000,
    categorie: "homme",
    image: "https://i.imgur.com/iAqdJDS.jpeg",
    pointuresDisponibles: [39, 40, 41, 42, 43, 44],
    couleurs: ["Blanc/Gris/Argenté"],
    description: "Incontournable silhouette sportive soulignée par un logo rouge vif contrasté.",
    duree: "Livraison sous 24h"
  },
  {
    id: 12,
    nom: "New Balance blanc/bleu marine",
    prix: 12000,
    categorie: "homme",
    image: "https://i.imgur.com/CiVIfGY.jpeg",
    pointuresDisponibles: [39, 40, 41, 42, 43, 44],
    couleurs: ["Blanc/Bleu Marine"],
    description: "Une silhouette intemporelle offrant un excellent maintien et une polyvalence absolue au quotidien.",
    duree: "Dispo Immédiate"
  },
  {
    id: 13,
    nom: "Puma Suède tout noir (Puma Suède XL)",
    prix: 12000,
    categorie: "homme",
    image: "https://i.imgur.com/YjJFmE8.jpeg",
    pointuresDisponibles: [39, 40, 41, 42, 43, 44],
    couleurs: ["Tout Noir"],
    description: "Inspirée du style skate rétro avec un rembourrage généreux et des lacets XL iconiques.",
    duree: "Dispo Immédiate"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: 1,
    nom: "Jean-Eudes Kouadio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    note: 5,
    texte: "Franchement, j'hésitais avec les vendeurs sur Facebook, mais ici la qualité est au rendez-vous. J'ai pris une Air Jordan 1, la pointure est exacte et la semelle est très solide. Je recommande vivement !",
    date: "Il y a 3 jours",
    achat: "Acheté Nike Air Jordan 1"
  },
  {
    id: 2,
    nom: "Marie-Claire Touré",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    note: 5,
    texte: "Super service ! J'ai commandé sur WhatsApp le matin, livré l'après-midi même à la Riviera 3. Les chaussures pour mes enfants sont magnifiques, ils adorent les scratchs lumineux. Merci beaucoup !",
    date: "Il y a 1 semaine",
    achat: "Acheté Baskets Scratch"
  },
  {
    id: 3,
    nom: "Arnaud Koffi",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    note: 5,
    texte: "Boutique sérieuse située à Riviera M'Badon. Je suis passé récupérer ma commande à l'entrée de Paradisia, accueil très chaleureux. Les prix sont imbattables pour cette qualité de finition.",
    date: "Il y a 2 semaines",
    achat: "Acheté Mocassins Cuir Riviera"
  },
  {
    id: 4,
    nom: "Awa Diomandé",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    note: 5,
    texte: "Commande sur WhatsApp ultra fluide. Le système de pointure est top, pas d'erreur de taille. Les sneakers Pastel sont encore plus belles en vrai que sur les photos !",
    date: "Il y a 3 semaines",
    achat: "Acheté Sneakers Chunky"
  }
];
