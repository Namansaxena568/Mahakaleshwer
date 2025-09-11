import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-left">
        <div className="logo">seva</div>
        <div className="tagline">MAHAKALESHWAR, UJJAIN</div>
      </div>

      {/* Desktop Menu */}
      <ul className="navbar-right">
        <li>
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/booking" className="nav-link">
            Bhasm Aarti Booking
          </NavLink>
        </li>
        <li>
          <NavLink to="/temple" className="nav-link">
            Temple Info
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/booking" className="nav-link" onClick={() => setMenuOpen(false)}>Bhasm Aarti Booking</NavLink>
        <NavLink to="/temple" className="nav-link" onClick={() => setMenuOpen(false)}>Temple Info</NavLink>
        <NavLink to="/Contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </div>
    </nav>
  );
}
