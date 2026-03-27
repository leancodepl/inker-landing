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
          <img alt="Inker" height={32} src="/logo.svg" width={110} />
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
