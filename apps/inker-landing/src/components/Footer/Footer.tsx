import styles from './Footer.module.scss';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <img alt="Inker" height={28} src="/logo.svg" width={96} />
        </div>
        <nav className={styles.links}>
          {footerLinks.map((link) => (
            <a key={link.label} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.divider} />
        <p className={styles.copyright}>
          &copy; {new Date().getFullYear()} Inker. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
