import styles from './IPhoneMockup.module.scss';

interface IPhoneMockupProps {
  className?: string;
}

export function IPhoneMockup({ className }: IPhoneMockupProps) {
  return (
    <div className={`${styles.frame} ${className ?? ''}`}>
      <div className={styles.notch} />
      <div className={styles.screen}>
        <div className={styles.scrollContainer}>
          <div className={styles.placeholder}>
            <div className={styles.statusBar}>
              <span>9:41</span>
            </div>

            <div className={styles.navBar}>
              <div className={styles.navPill} data-active="">
                Explore
              </div>
              <div className={styles.navPill}>Events</div>
              <div className={styles.navPill}>Jobs</div>
            </div>

            <div className={styles.postCard}>
              <div className={styles.postHeader}>
                <div className={styles.avatar} />
                <div>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>Maya Torres</span>
                    <span className={styles.verified}>&#10003;</span>
                  </div>
                  <span className={styles.location}>Austin, Texas</span>
                </div>
              </div>
              <div className={styles.postImage} />
              <div className={styles.postActions}>
                <span>&#9825; 482</span>
                <span>&#9993; 47</span>
              </div>
            </div>

            <div className={styles.postCard}>
              <div className={styles.postHeader}>
                <div className={styles.avatar} />
                <div>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>Lena Brück</span>
                    <span className={styles.verified}>&#10003;</span>
                  </div>
                  <span className={styles.location}>Chicago, IL</span>
                </div>
              </div>
              <div className={styles.postImage} />
              <div className={styles.postActions}>
                <span>&#9825; 318</span>
                <span>&#9993; 29</span>
              </div>
            </div>

            <div className={styles.postCard}>
              <div className={styles.postHeader}>
                <div className={styles.avatar} />
                <div>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>Kai Nakamura</span>
                    <span className={styles.verified}>&#10003;</span>
                  </div>
                  <span className={styles.location}>Los Angeles, CA</span>
                </div>
              </div>
              <div className={styles.postImage} />
              <div className={styles.postActions}>
                <span>&#9825; 256</span>
                <span>&#9993; 18</span>
              </div>
            </div>

            <div className={styles.tabBar}>
              <span>Home</span>
              <span>Search</span>
              <span className={styles.tabActive}>+</span>
              <span>Inbox</span>
              <span>Profile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
