import { GalleryCard } from "./GalleryCard"
import styles from "./ArtistsSection.module.scss"

const benefits = [
  "Professional tattoo portfolio",
  "Direct appointment requests",
  "Guest spot announcements",
  "Convention listings",
  "Tattoo job opportunities",
  "Industry networking",
]

/** Local gallery assets — card height follows intrinsic image aspect ratio */
const tattooGalleryImages = [
  { alt: "Tattoo portfolio image 1", src: "/images/01.png" },
  { alt: "Tattoo portfolio image 2", src: "/images/02.png" },
  { alt: "Tattoo portfolio image 3", src: "/images/03.png" },
  { alt: "Tattoo portfolio image 4", src: "/images/04.png" },
  { alt: "Tattoo portfolio image 5", src: "/images/05.png" },
  { alt: "Tattoo portfolio image 6", src: "/images/06.png" },
  { alt: "Tattoo portfolio image 7", src: "/images/07.png" },
  { alt: "Tattoo portfolio image 8", src: "/images/08.png" },
  { alt: "Tattoo portfolio image 9", src: "/images/09.png" },
  { alt: "Tattoo portfolio image 10", src: "/images/10.jpg" },
]

const columnA = tattooGalleryImages.filter((_, index) => index % 2 === 0)
const columnB = tattooGalleryImages.filter((_, index) => index % 2 === 1)

function VerticalColumn({ direction, images }: { direction: "down" | "up"; images: typeof columnA }) {
  return (
    <div className={styles.columnMask}>
      <div className={styles.verticalTrack} data-direction={direction}>
        <div className={styles.scrollGroup}>
          {images.map((item, index) => (
            <GalleryCard key={`v1-${index}-${item.src}`} alt={item.alt} src={item.src} />
          ))}
        </div>
        <div aria-hidden="true" className={styles.scrollGroup}>
          {images.map((item, index) => (
            <GalleryCard key={`v2-${index}-${item.src}`} alt="" src={item.src} />
          ))}
        </div>
      </div>
    </div>
  )
}

function MobileMarquee() {
  const row = tattooGalleryImages

  return (
    <div className={styles.mobileMarquee}>
      <div className={styles.horizontalTrack}>
        <div className={styles.horizontalGroup}>
          {row.map((item, index) => (
            <GalleryCard key={`h1-${index}-${item.src}`} alt={item.alt} layout="horizontal" src={item.src} />
          ))}
        </div>
        <div aria-hidden="true" className={styles.horizontalGroup}>
          {row.map((item, index) => (
            <GalleryCard key={`h2-${index}-${item.src}`} alt="" layout="horizontal" src={item.src} />
          ))}
        </div>
      </div>
    </div>
  )
}

function CheckIcon() {
  return (
    <svg fill="none" height="18" viewBox="0 0 18 18" width="18">
      <circle cx="9" cy="9" fill="#FF8C00" opacity="0.15" r="9" />
      <path d="M5.5 9.5l2 2 5-5" stroke="#FF8C00" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  )
}

export function ArtistsSection() {
  return (
    <section className={styles.section} id="artists">
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>For Artists</span>
          <h2 className={styles.title}>
            Built for <span className={styles.highlight}>Tattoo Artists</span>
          </h2>
          <p className={styles.subtitle}>
            Inker gives tattoo artists a professional platform designed specifically for the craft. No algorithm
            battles. No fighting for visibility. No scattered tools.
          </p>
          <ul className={styles.benefits}>
            {benefits.map(benefit => (
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
        </div>
      </div>
    </section>
  )
}
