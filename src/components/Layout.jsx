import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import StarBackground from './StarBackground';
import CustomCursor from './CustomCursor';

const Layout = ({ children }) => {
    return (
        <div className="app-container">
            <CustomCursor />
            <div className="grain-overlay"></div>
            <StarBackground />
            <Navbar />
            <main style={{ minHeight: '100vh' }}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
