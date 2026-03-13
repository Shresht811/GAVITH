import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
import NotFound from './pages/NotFound';
import ScrollToAnchor from './components/ScrollToAnchor';
import ScrollReveal from './components/ScrollReveal';
import ConnectingLines from './components/ConnectingLines';
import ContactModal from './components/ContactModal';

// Home Page Component assembling the landing page sections
const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{ position: 'relative' }} // Added for absolute line tracing
  >
    <ConnectingLines />
    {/* Hero loads instantly, no scroll reveal needed for the first paint */}
    <Hero />
    <ScrollReveal><Services /></ScrollReveal>
    <ScrollReveal><Products /></ScrollReveal>
    <ScrollReveal><Vision /></ScrollReveal>
    <ScrollReveal><Contact /></ScrollReveal>
  </motion.div>
);

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/partners" element={<PageWrapper><Partners /></PageWrapper>} />
        <Route path="/features" element={<PageWrapper><Features /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
        <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => setIsContactModalOpen(true);
    window.addEventListener('open-contact-modal', handleOpenModal);
    return () => window.removeEventListener('open-contact-modal', handleOpenModal);
  }, []);

  return (
    <Router>
      <ScrollToAnchor />
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </Router>
  );
}

export default App;
