// Home.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import About from '../components/About';
import Program from '../components/Program';
import Infrastructure from '../components/Infrastructure';
import Faculty from '../components/Faculty';
import Admissions from '../components/Admissions';
import Facilities from '../components/Facilities';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Navbar />
    <Hero />
    <Highlights />
    <About />
    <Program />
    <Infrastructure />
    <Faculty />
    <Admissions />
    <Facilities />
    <Contact />
    <Footer />
  </>
);

export default Home;
