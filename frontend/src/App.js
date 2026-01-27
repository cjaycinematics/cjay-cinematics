import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import MemorialServices from './components/MemorialServices';
import EventServices from './components/EventServices';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Services />
      <MemorialServices />
      <EventServices />
      <Portfolio />
      <Testimonials />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
