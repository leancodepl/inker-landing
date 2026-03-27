import styles from './StoreBadges.module.scss';

interface StoreBadgesProps {
  className?: string;
}

export function StoreBadges({ className }: StoreBadgesProps) {
  return (
    <div className={`${styles.badges} ${className ?? ''}`}>
      <a
        aria-label="Download on the App Store"
        className={styles.badge}
        href="https://apps.apple.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg height="40" viewBox="0 0 120 40" width="120">
          <rect fill="#000" height="40" rx="6" width="120" />
          <g fill="#fff">
            <path d="M24.77 20.3a4.95 4.95 0 0 1 2.36-4.15 5.07 5.07 0 0 0-3.99-2.16c-1.68-.18-3.31 1.01-4.17 1.01-.87 0-2.19-.99-3.62-.96a5.32 5.32 0 0 0-4.48 2.73c-1.93 3.34-.49 8.27 1.36 10.97.93 1.33 2.01 2.82 3.44 2.76 1.39-.06 1.91-.88 3.59-.88 1.67 0 2.15.88 3.59.85 1.49-.02 2.43-1.33 3.33-2.67a10.97 10.97 0 0 0 1.52-3.09 4.78 4.78 0 0 1-2.93-4.41z" />
            <path d="M22.04 12.21a4.87 4.87 0 0 0 1.12-3.49 4.96 4.96 0 0 0-3.21 1.66 4.64 4.64 0 0 0-1.14 3.37 4.11 4.11 0 0 0 3.23-1.54z" />
          </g>
          <g fill="#fff">
            <text
              fontFamily="var(--font-inter), sans-serif"
              fontSize="7"
              x="42"
              y="15"
            >
              Download on the
            </text>
            <text
              fontFamily="var(--font-inter), sans-serif"
              fontSize="13"
              fontWeight="600"
              x="42"
              y="29"
            >
              App Store
            </text>
          </g>
        </svg>
      </a>
      <a
        aria-label="Get it on Google Play"
        className={styles.badge}
        href="https://play.google.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg height="40" viewBox="0 0 135 40" width="135">
          <rect fill="#000" height="40" rx="6" width="135" />
          <g fill="#fff">
            <path d="M19.5 10.13l-9.68 10.9a1.84 1.84 0 0 0 0 2.44l9.68 10.9a1.84 1.84 0 0 0 2.74-2.44L14.13 22.47l8.11-9.46a1.84 1.84 0 1 0-2.74-2.44v-.44z" opacity=".7" />
            <path d="M15 11.5l12.35 7.13a2 2 0 0 1 0 3.46L15 29.22" opacity=".5" />
          </g>
          <g fill="#fff">
            <text
              fontFamily="var(--font-inter), sans-serif"
              fontSize="7"
              x="38"
              y="15"
            >
              GET IT ON
            </text>
            <text
              fontFamily="var(--font-inter), sans-serif"
              fontSize="12.5"
              fontWeight="600"
              x="38"
              y="29"
            >
              Google Play
            </text>
          </g>
        </svg>
      </a>
    </div>
  );
}
