import React from 'react';
import '../App.css';
import Cards from '../components/card/Cards';
import HeroSection from '../components/herosection/HeroSection';
import Footer from '../components/footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
