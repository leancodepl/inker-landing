import styles from './Header.module.scss';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Artists', href: '#artists' },
  { label: 'Collectors', href: '#collectors' },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a aria-label="Inker home" className={styles.logo} href="/">
          <img alt="Inker" height={32} src="/logo.svg" width={110} />
        </a>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <a key={link.href} className={styles.navLink} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
