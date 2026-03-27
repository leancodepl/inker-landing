'use client';

import { useState } from 'react';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Artists', href: '#artists' },
  { label: 'Collectors', href: '#collectors' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a aria-label="Inker home" className={styles.logo} href="/">
          <svg
            fill="none"
            height="32"
            viewBox="0 0 80 32"
            width="80"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              fill="#FF8C00"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="28"
              fontWeight="900"
              letterSpacing="-0.5"
              x="0"
              y="26"
            >
              Inker
            </text>
          </svg>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              className={styles.navLink}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
