import { GalleryCard } from './GalleryCard';
import styles from './ArtistsSection.module.scss';

const benefits = [
  'Professional tattoo portfolio',
  'Direct appointment requests',
  'Guest spot announcements',
  'Convention listings',
  'Tattoo job opportunities',
  'Industry networking',
];

/** Curated Unsplash stock photos (tattoo / body art) — card height follows intrinsic image aspect ratio */
const tattooStockImages = [
  {
    alt: 'Detailed black and grey tattoo on arm',
    src: 'https://images.unsplash.com/photo-1598371833356-10a056cbed4d?w=520&h=680&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Tattoo artist at work in studio',
    src: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=520&h=440&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Floral tattoo design on skin',
    src: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=520&h=600&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Traditional style tattoo',
    src: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=520&h=520&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Tattoo studio workspace',
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=520&h=380&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Geometric tattoo close-up',
    src: 'https://images.unsplash.com/photo-1590246814883-6e86644029b5?w=520&h=640&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Arm sleeve tattoo',
    src: 'https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=520&h=480&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Fine line tattoo',
    src: 'https://images.unsplash.com/photo-1562962230-16b462fcb659?w=520&h=560&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Japanese style tattoo art',
    src: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=520&h=400&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Tattoo session in progress',
    src: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?w=520&h=700&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Bold tattoo ink on skin',
    src: 'https://images.unsplash.com/photo-1565053393858-18b818efc977?w=520&h=460&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Minimal line tattoo',
    src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=520&h=500&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Color tattoo artwork',
    src: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?w=520&h=360&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Tattoo machine detail',
    src: 'https://images.unsplash.com/photo-1607779097290-5799f0d2a6d0?w=520&h=580&auto=format&fit=crop&q=80',
  },
  {
    alt: 'Blackwork tattoo pattern',
    src: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=520&h=620&auto=format&fit=crop&q=80',
  },
];

const columnA = tattooStockImages.filter((_, index) => index % 2 === 0);
const columnB = tattooStockImages.filter((_, index) => index % 2 === 1);

function VerticalColumn({
  direction,
  images,
}: {
  direction: 'down' | 'up';
  images: typeof columnA;
}) {
  return (
    <div className={styles.columnMask}>
      <div className={styles.verticalTrack} data-direction={direction}>
        <div className={styles.scrollGroup}>
          {images.map((item, index) => (
            <GalleryCard
              key={`v1-${index}-${item.src}`}
              alt={item.alt}
              src={item.src}
            />
          ))}
        </div>
        <div aria-hidden="true" className={styles.scrollGroup}>
          {images.map((item, index) => (
            <GalleryCard
              key={`v2-${index}-${item.src}`}
              alt=""
              src={item.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMarquee() {
  const row = tattooStockImages;

  return (
    <div className={styles.mobileMarquee}>
      <div className={styles.horizontalTrack}>
        <div className={styles.horizontalGroup}>
          {row.map((item, index) => (
            <GalleryCard
              key={`h1-${index}-${item.src}`}
              alt={item.alt}
              layout="horizontal"
              src={item.src}
            />
          ))}
        </div>
        <div aria-hidden="true" className={styles.horizontalGroup}>
          {row.map((item, index) => (
            <GalleryCard
              key={`h2-${index}-${item.src}`}
              alt=""
              layout="horizontal"
              src={item.src}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

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
          <div className={styles.desktopGallery}>
            <div className={styles.masonryWrapper}>
              <VerticalColumn direction="up" images={columnA} />
              <VerticalColumn direction="down" images={columnB} />
            </div>
          </div>
          <MobileMarquee />
          <div className={styles.fadeTop} />
          <div className={styles.fadeBottom} />
          <div className={styles.fadeStart} />
          <div className={styles.fadeEnd} />
        </div>
      </div>
    </section>
  );
}
