import { StoreBadges } from '../shared/StoreBadges/StoreBadges';
import styles from './CommunitySection.module.scss';

export function CommunitySection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <span className={styles.label}>Free to Join</span>
          <h2 className={styles.title}>
            Join the{' '}
            <span className={styles.highlight}>Tattoo Community</span>
          </h2>
          <p className={styles.subtitle}>
            Inker is free for tattoo artists and collectors. Download the app and
            connect with the global tattoo community.
          </p>
          <StoreBadges className={styles.storeBadges} />
        </div>
      </div>
    </section>
  );
}
