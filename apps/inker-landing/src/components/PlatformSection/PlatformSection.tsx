import styles from './PlatformSection.module.scss';

const features = [
  {
    title: 'Artist Discovery',
    description:
      'Find tattoo artists by style, location, and availability. No algorithm — just the work.',
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M16 16l4.5 4.5" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Tattoo Booking',
    description:
      'Request appointments directly through the app. No DMs, no back-and-forth.',
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <rect height="17" rx="3" stroke="currentColor" strokeWidth="2" width="18" x="3" y="4" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="2" />
        <path d="M8 2v4M16 2v4" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Community Feed',
    description:
      'Share work and discover tattoos from artists around the world. Purpose-built for the craft.',
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <rect height="20" rx="3" stroke="currentColor" strokeWidth="2" width="20" x="2" y="2" />
        <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M6 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Conventions',
    description:
      'Explore tattoo conventions and guest artist appearances all in one place.',
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6l3-6z" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Tattoo Jobs',
    description:
      'Studios hiring and artists seeking opportunities. Industry-specific job listings.',
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <rect height="14" rx="3" stroke="currentColor" strokeWidth="2" width="18" x="3" y="7" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Live Streaming',
    description:
      'Watch artists tattoo live. Learn from the community in real time.',
    icon: (
      <svg fill="none" height="24" viewBox="0 0 24 24" width="24">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M7.5 7.5a6.36 6.36 0 0 0 0 9M16.5 7.5a6.36 6.36 0 0 1 0 9" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        <path d="M4.5 4.5a11.3 11.3 0 0 0 0 15M19.5 4.5a11.3 11.3 0 0 1 0 15" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      </svg>
    ),
  },
];

export function PlatformSection() {
  return (
    <section className={styles.section} id="platform">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Platform</span>
          <h2 className={styles.title}>
            One Platform for the{' '}
            <span className={styles.highlight}>Tattoo Industry</span>
          </h2>
          <p className={styles.subtitle}>
            Inker brings the core parts of tattoo culture together into a single
            destination built specifically for this world.
          </p>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <div key={feature.title} className={styles.card}>
              <div className={styles.cardIcon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
