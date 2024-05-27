import React from 'react';
import './styling/Footer.css';

const Footer = () => (
  
    <footer className="site-footer">
        <p className="copyright">
            &copy; {new Date().getFullYear()} ArtificialGeneralIntelligence.dev
        </p>
        {/* Add links to privacy policy and terms of use */}
        <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-use">Terms of Use</a>
        </div>
    </footer>
);

export default Footer;
