import styles from './ProblemSection.module.scss';

const painPoints = [
  {
    icon: (
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <rect height="16" rx="4" stroke="currentColor" strokeWidth="1.5" width="16" x="2" y="2" />
        <circle cx="7" cy="10" fill="currentColor" r="1.5" />
        <circle cx="13" cy="10" fill="currentColor" r="1.5" />
        <path d="M7 14s1.5-1 3-1 3 1 3 1" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
    text: 'Artists showcase their work on Instagram, competing with every other type of content.',
  },
  {
    icon: (
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <path d="M4 4h12v10H7l-3 3V4z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    text: 'Bookings happen through long, scattered message threads with no system.',
  },
  {
    icon: (
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <rect height="14" rx="2" stroke="currentColor" strokeWidth="1.5" width="14" x="3" y="3" />
        <path d="M3 8h14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 3v5M13 3v5" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
      </svg>
    ),
    text: 'Conventions are listed across dozens of separate websites and pages.',
  },
  {
    icon: (
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <path d="M10 2L2 7v6l8 5 8-5V7l-8-5z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    text: 'Guest spots circulate through private chats and word of mouth.',
  },
  {
    icon: (
      <svg fill="none" height="20" viewBox="0 0 20 20" width="20">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 6v4l3 2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      </svg>
    ),
    text: "Job opportunities are invisible to artists who aren't already connected.",
  },
];

export function ProblemSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>The Problem</span>
          <h2 className={styles.title}>
            Tattooing still runs on{' '}
            <span className={styles.highlight}>Instagram DMs.</span>
          </h2>
          <p className={styles.subtitle}>
            For an industry built on community, the digital infrastructure has
            never caught up.
          </p>
        </div>
        <ul className={styles.list}>
          {painPoints.map((point, i) => (
            <li key={i} className={styles.item}>
              <span className={styles.icon}>{point.icon}</span>
              <p>{point.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
