
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './Navbar.css';

const links = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Journey', id: 'journey' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = links
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0, 0.15, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav
        className="navbar container"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className="brand"
          onClick={closeMenu}
          aria-label="Nakul Solanki, home"
        >
          <span className="brand-mark">N</span>
          <span className="brand-name">
            NAKUL<span className="accent">.</span>
          </span>
        </a>

        <div className="desktop-nav">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${
                activeSection === link.id ? 'active' : ''
              }`}
              aria-current={
                activeSection === link.id ? 'location' : undefined
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href="#contact">
          Let's connect
          <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              className="mobile-backdrop"
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              id="mobile-navigation"
              className="mobile-nav"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
            >
              {links.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`mobile-nav-link ${
                    activeSection === link.id ? 'active' : ''
                  }`}
                  aria-current={
                    activeSection === link.id
                      ? 'location'
                      : undefined
                  }
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                className="button button-primary mobile-connect"
                onClick={closeMenu}
              >
                Let's connect
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
