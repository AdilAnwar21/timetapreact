// import React from 'react';
import Navbar from './components/Navbar';
import Ratings from './components/Ratings';
import SearchSection from './components/SearchSection';
import ServicesSection from './components/Services';
import ShopCards from './components/Shops';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <SearchSection />
      <Ratings></Ratings>
      <ServicesSection></ServicesSection>
      <ShopCards></ShopCards>
      
    </div>
  );
}

export default App;