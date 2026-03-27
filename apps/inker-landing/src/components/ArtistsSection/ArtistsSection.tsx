import styles from './ArtistsSection.module.scss';

const benefits = [
  'Professional tattoo portfolio',
  'Direct appointment requests',
  'Guest spot announcements',
  'Convention listings',
  'Tattoo job opportunities',
  'Industry networking',
];

const styleBadges = [
  'Neo-Traditional',
  'Blackwork',
  'Japanese',
  'Realism',
  'Watercolor',
  'Geometric',
];

function CheckIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <circle cx="9" cy="9" fill="#FF8C00" opacity="0.15" r="9" />
      <path
        d="M5.5 9.5l2 2 5-5"
        stroke="#FF8C00"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ArtistsSection() {
  return (
    <section className={styles.section} id="artists">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>For Artists</span>
          <h2 className={styles.title}>
            Built for{' '}
            <span className={styles.highlight}>Tattoo Artists</span>
          </h2>
          <p className={styles.subtitle}>
            Inker gives tattoo artists a professional platform designed
            specifically for the craft. No algorithm battles. No fighting for
            visibility. No scattered tools.
          </p>
          <ul className={styles.benefits}>
            {benefits.map((benefit) => (
              <li key={benefit} className={styles.benefit}>
                <CheckIcon />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.visual}>
          <div className={styles.badgeCloud}>
            {styleBadges.map((badge) => (
              <span key={badge} className={styles.styleBadge}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
