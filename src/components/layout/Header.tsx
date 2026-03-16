
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
            <NavLink to="/" className="btn btn-muted">Inicio</NavLink>
            <NavLink to="/about" className="btn btn-muted">Sobre mí</NavLink>
            <NavLink to="/vision" className="btn btn-muted">Visión</NavLink>
            <NavLink to="/projects" className="btn btn-muted">Proyectos</NavLink>
            <NavLink to="/blog" className="btn btn-muted">Blog</NavLink>
          </nav>
          {/* Mobile nav button */}
          <button
            className="Header-navMobile"
            aria-label="Abrir menú"
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
            Contacto
          </Button>
        </div>
      </div>
      {/* Mobile nav panel */}
      {mobileMenuOpen && (
        <nav className="Header-navMobile mobilePanel" id="mobilePanel">
          <NavLink to="/" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Inicio</NavLink>
          <NavLink to="/about" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Sobre mí</NavLink>
          <NavLink to="/vision" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Visión</NavLink>
          <NavLink to="/projects" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Proyectos</NavLink>
          <NavLink to="/blog" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Blog</NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;