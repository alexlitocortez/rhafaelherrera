import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Hamburger from './components/Hamburger/Hamburger';
import HamburgerMenu from './components/HamburgerMenu/HamburgerMenu';
import HeroSection from './components/HeroSection/HeroSection';
import ContactForm from './components/ContactForm/ContactForm';
import Footer from './components/Footer/Footer';
import SkillsSection from './components/SkillsSection/SkillsSection';
import Grid from './components/Grid/Grid';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='App'>
      <NavBar />
      <div>
        <Hamburger open={open} setOpen={setOpen} />
        <HamburgerMenu open={open} setOpen={setOpen} />
      </div>
      <HeroSection />
      <SkillsSection />
      <Grid />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;


