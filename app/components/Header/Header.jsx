"use client";

import { useEffect, useState } from "react";
import CloseBtn from "@/public/assets/icons/close-square.svg";
import MenuBurger from "@/public/assets/icons/menu.svg";
import "./Header.css";

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


    const handleEscape = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);
  
  const handleToggleMenu = () => {
    setIsOpen(prev => !prev);
    const htmlElement = document.documentElement;
    isOpen ? (htmlElement.style.overflow = 'auto') : (htmlElement.style.overflow = 'hidden');
  };

  return (
    <header className={`header ${scrolling ? "scrolling" : ""}`}>
      <div className='container'>
        <nav className={`navigation ${scrolling ? "scrolling" : ""}`}>
          <a href='/' className={`logo ${scrolling ? "scrolling" : ""}`} aria-label="Dreame Balloons">
            Dreame Balloons
          </a>
          <button type='button' className='menu-btn' onClick={handleToggleMenu}>
            <p className={`menu-text ${scrolling ? "scrolling" : ""}`}>Menu</p>
            <MenuBurger aria-label='menu' />
          </button>
        </nav>
      </div>

      {isOpen && (
        <div className='mobile-bcg'>
          <div className='mobile-menu container'>
            <div className='mobile-header'>
              <a href='/' className='logo'>
                Dreame Balloons
              </a>
              <button
                type='button'
                className='btn-close'
                onClick={handleToggleMenu}
                aria-label='close-btn'
              >
                <CloseBtn aria-label='close-btn' />
              </button>
            </div>
            <div className='mobile-links'>
              <a href="#main" onClick={(e) => { e.preventDefault(); handleToggleMenu(); scrollToSection("main"); }}>
                Home
              </a>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleToggleMenu(); scrollToSection("about"); }}>
                About Us
              </a>
              <a href="#reviews" onClick={(e) => { e.preventDefault(); handleToggleMenu(); scrollToSection("reviews"); }}>
                Reviews
              </a>
              <a href="#contacts" onClick={(e) => { e.preventDefault(); handleToggleMenu(); scrollToSection("contacts"); }}>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
