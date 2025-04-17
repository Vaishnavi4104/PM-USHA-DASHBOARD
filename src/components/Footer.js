// src/components/Footer.js
import React from 'react';
import '../assets/css/styles.css'; // Import global styles

const Footer = () => {
  return (
    <footer>
      <p>PM-USHA Project | Contact: <a href="mailto:info@pmusha.gov.in" style={{ color: 'var(--secondary-orange)' }}>info@pmusha.gov.in</a> | © 2025 SNDTWU</p>
      <p>
        <a href="/resources" style={{ color: 'var(--secondary-orange)' }}>Resources</a> |{' '}
        <a href="/support" style={{ color: 'var(--secondary-orange)' }}>Support</a>
      </p>
    </footer>
  );
};

export default Footer;