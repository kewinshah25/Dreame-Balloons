"use client";

import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import CloseBtn from "../../../public/assets/icons/close-square.svg";
import Logo from "../../../public/assets/icons/logo.svg";
import MenuBurger from "../../../public/assets/icons/menu.svg";
import "./Header.css";

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
          <a href='/' className={`logo ${scrolling ? "scrolling" : ""}`}>
            <Logo aria-label='logo' />
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
              <Link
                to='main'
                smooth={true}
                offset={-70}
                onClick={handleToggleMenu}
              >
                Home
              </Link>
              <Link
                to='about'
                smooth={true}
                offset={-100}
                onClick={handleToggleMenu}
              >
                About Us
              </Link>
              <Link
                to='reviews'
                smooth={true}
                offset={-100}
                onClick={handleToggleMenu}
              >
                Reviews
              </Link>
              <Link
                to='contacts'
                smooth={true}
                offset={-80}
                onClick={handleToggleMenu}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
