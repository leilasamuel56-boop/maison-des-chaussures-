export type Category = 'homme' | 'femme' | 'enfant' | 'promo';

export interface Product {
  id: number;
  nom: string;
  prix: number;
  prixPromo?: number;
  categorie: Category;
  image: string;
  pointuresDisponibles: number[];
  couleurs: string[];
  description?: string;
  duree?: string;
}

export interface Review {
  id: number;
  nom: string;
  avatar: string;
  note: number;
  texte: string;
  date?: string;
  achat: string; // e.g. "Acheté Nike Air Max 270"
}
