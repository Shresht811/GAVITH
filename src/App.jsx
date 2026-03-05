import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Vision from './components/Vision';
import Contact from './components/Contact';
import About from './pages/About';
import Partners from './pages/Partners';
import Features from './pages/Features';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import ScrollToAnchor from './components/ScrollToAnchor';
import ScrollReveal from './components/ScrollReveal';

// Home Page Component assembling the landing page sections
const Home = () => (
  <>
    {/* Hero loads instantly, no scroll reveal needed for the first paint */}
    <Hero />
    <ScrollReveal><Services /></ScrollReveal>
    <ScrollReveal><Products /></ScrollReveal>
    <ScrollReveal><Vision /></ScrollReveal>
    <ScrollReveal><Contact /></ScrollReveal>
  </>
);

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/features" element={<Features />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
