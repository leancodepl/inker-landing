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
          <svg
            fill="none"
            height="24"
            viewBox="0 0 60 24"
            width="60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              fill="#FF8C00"
              fontFamily="Georgia, 'Times New Roman', serif"
              fontSize="22"
              fontWeight="900"
              letterSpacing="-0.5"
              x="0"
              y="20"
            >
              Inker
            </text>
          </svg>
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
