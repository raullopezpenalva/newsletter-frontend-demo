
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '../ui-primitives/Button';
import BrandIcon from '../ui-primitives/icons/BrandIcon';


const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="Header">
      <div className="Header-inner">
        <div className="Header-left">
          <NavLink to="/" className="Header-logo">
            <BrandIcon />
          </NavLink>
        </div>
        <div className="Header-center">
          {/* Desktop nav */}
          <nav className="Header-navDesktop">
            <NavLink to="/" className="btn btn-muted">Home</NavLink>
            <NavLink to="/docs" className="btn btn-muted">Documentation</NavLink>
            <NavLink to="/admin" className="btn btn-muted">Admin</NavLink>
          </nav>
          {/* Mobile nav button */}
          <button
            className="Header-navMobile"
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobilePanel"
            onClick={() => setMobileMenuOpen((open) => !open)}
            /* style={{ display: 'none' }} */
          >
            {/* Simple hamburger icon */}
            <span style={{ fontSize: "32px", lineHeight: 1 }}>&#9776;</span>
          </button>
        </div>
        <div className="Header-right">
          <Button to="/contact" variant="secondary" className="Header-contact-btn">
            Contact
          </Button>
        </div>
      </div>
      {/* Mobile nav panel */}
      {mobileMenuOpen && (
        <nav className="Header-navMobile mobilePanel" id="mobilePanel">
          <NavLink to="/" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Home</NavLink>
          <NavLink to="/docs" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Documentation</NavLink>
          <NavLink to="/admin" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Admin</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;