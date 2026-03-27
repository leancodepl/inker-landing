import Image from "next/image"
import { IPhoneMockup } from "../shared/IPhoneMockup/IPhoneMockup"
import { StoreBadges } from "../shared/StoreBadges/StoreBadges"
import styles from "./HeroSection.module.scss"

const featureBadges = ["Artist Discovery", "Booking", "Conventions", "Jobs", "Live Streaming"]

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <Image alt="" className={styles.bgImage} fill priority quality={75} sizes="100vw" src="/bg.png" />
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>Now Available</p>
          <h1 className={styles.title}>
            The Tattoo Industry. <span className={styles.highlight}>Connected.</span>
          </h1>
          <p className={styles.subtitle}>
            Inker is the platform built for tattoo artists and collectors. Discover artists. Book tattoos. Explore
            conventions. Find jobs. Connect with the global tattoo community.
          </p>
          <div className={styles.badges}>
            {featureBadges.map(badge => (
              <a key={badge} className={styles.badge} href="#platform">
                {badge}
              </a>
            ))}
          </div>
          <StoreBadges className={styles.storeBadges} />
        </div>
        <div className={styles.mockupWrapper}>
          <div className={styles.glow} />
          <IPhoneMockup />
        </div>
      </div>
    </section>
  )
}
