"use client";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer-wrapper'>
          <a href='/' className='footer-logo' aria-label='Dreame Balloons'>
            Dreame Balloons
          </a>
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
