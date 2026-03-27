import styles from './CollectorsSection.module.scss';

const steps = [
  {
    number: '01',
    title: 'Discover Artists',
    description:
      'Browse by style, location, or availability. Find exactly the artist who fits your vision.',
  },
  {
    number: '02',
    title: 'Follow & Save',
    description:
      'Follow your favorite artists and stay updated on new work, guest spots, and availability.',
  },
  {
    number: '03',
    title: 'Book Direct',
    description:
      'Send tattoo appointment requests directly through the app. No DMs required.',
  },
  {
    number: '04',
    title: 'Explore Events',
    description:
      'Find conventions and guest artist appearances near you before they sell out.',
  },
];

export function CollectorsSection() {
  return (
    <section className={styles.section} id="collectors">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>For Collectors</span>
          <h2 className={styles.title}>
            Find Your Next{' '}
            <span className={styles.highlight}>Tattoo</span>
          </h2>
          <p className={styles.subtitle}>
            Discover tattoo artists based on style, location, and availability.
            Browse portfolios. Follow your favorite artists. Request
            appointments. Inker makes tattoo discovery simple.
          </p>
        </div>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.number} className={styles.step}>
              <span className={styles.stepNumber}>{step.number}</span>
              <div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
