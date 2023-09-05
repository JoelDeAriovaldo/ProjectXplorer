import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';

const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  )
} 

export default App
