import React from 'react';
import './Header.scss';

const navLinks = [
  'Services',
  'Case Studies',
  'Industries',
  'Process',
  'About',
  'Blog',
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleMenuClose = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <span className="header__logo-icon">SL</span>
          <span className="header__logo-text">Solidity Labs</span>
        </a>
        {/* Desktop navigation and actions, visible only above 1200px */}
        <nav className="header__nav">
          <ul className="header__nav-list">
            {navLinks.map((label) => (
              <li key={label} className="header__nav-item">
                <a href={`/${label.replace(/\s+/g, '-').toLowerCase()}`}>{label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <button className="header__button header__button--primary">Get Started</button>
        </div>
        {/* Mobile menu button, visible only below 1200px */}
        <button className="header__mobile-menu-btn" onClick={handleMenuToggle} aria-label="Open menu">
          <span className="header__mobile-menu-icon">☰</span>
        </button>
      </div>

      {/* Mobile Menu Overlay and Menu, only rendered below 1200px via CSS */}
      <div className={`header__mobile-menu-overlay ${menuOpen ? 'open' : ''}`} onClick={handleMenuClose}></div>
      <nav className={`header__mobile-menu ${menuOpen ? 'open' : ''}`}>
        <div className="header__mobile-menu-header">
          <a href="/" className="header__logo" onClick={handleMenuClose}>
            <span className="header__logo-icon">SL</span>
            <span className="header__logo-text">Solidity Labs</span>
          </a>
          <button className="header__mobile-menu-close" onClick={handleMenuClose} aria-label="Close menu">×</button>
        </div>
        <ul className="header__mobile-menu-list">
          {navLinks.map((label) => (
            <li key={label} className="header__mobile-menu-item">
              <a href={`/${label.replace(/\s+/g, '-').toLowerCase()}`} onClick={handleMenuClose}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="header__mobile-menu-actions">
          <button className="header__button header__button--primary" onClick={handleMenuClose}>Get Started</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
