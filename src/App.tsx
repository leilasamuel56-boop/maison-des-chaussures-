import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Catalogue from './components/Catalogue';
import HowToOrder from './components/HowToOrder';
import Reviews from './components/Reviews';
import ContactMap from './components/ContactMap';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import WhatsAppButton from './components/WhatsAppButton';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState<boolean>(false);

  const handleOrderProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsOrderModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-amber-400 selection:text-zinc-950 font-sans antialiased scroll-smooth">
      {/* Navigation Header */}
      <Header />

      {/* Hero Presentation Banner */}
      <Hero />

      {/* Main Product Catalog Grid */}
      <Catalogue onOrderProduct={handleOrderProduct} />

      {/* Interactive Step Guide */}
      <HowToOrder />

      {/* Testimonials & Communities */}
      <Reviews />

      {/* Interactive Map & Detailed Location */}
      <ContactMap />

      {/* Standardized Footer */}
      <Footer />

      {/* Floating Call CTA Action button */}
      <WhatsAppButton />

      {/* Dynamic Pop-up Ordering Form Modal */}
      <OrderModal 
        product={selectedProduct} 
        isOpen={isOrderModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
}

