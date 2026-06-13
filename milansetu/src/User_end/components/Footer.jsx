import styles from '../pages/styles/footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <span className={styles.logo}>
            <span className={styles.logoMilan}>Milan</span>
            <span className={styles.logoSetu}>Setu</span>
          </span>
          <p className={styles.tagline}>
            Trusted matrimony service since 1998.<br />
            Connecting hearts across communities.
          </p>
          <div className={styles.socials}>
            <button type="button" aria-label="Facebook" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </button>
            <button type="button" aria-label="Instagram" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
            </button>
            <button type="button" aria-label="YouTube" className={styles.socialIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#8b1a2e" />
              </svg>
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Quick Links</h3>
          <ul className={styles.list}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#success">Success Stories</a></li>
            <li><a href="#membership">Membership</a></li>
            <li><a href="#branches">Branches</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Services</h3>
          <ul className={styles.list}>
            <li><a href="#profile">Profile Creation</a></li>
            <li><a href="#verified">Verified Matches</a></li>
            <li><a href="#horoscope">Horoscope Matching</a></li>
            <li><a href="#premium">Premium Membership</a></li>
            <li><a href="#events">Event Matrimony</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h3 className={styles.heading}>Contact Us</h3>
          <ul className={`${styles.list} ${styles.contactList}`}>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              123, Rajpath, New Delhi - 110001
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.84a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 98765 43210
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" aria-hidden="true">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              info@milansetu.com
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} MilanSetu. All rights reserved. &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Service</p>
      </div>
    </footer>
  );
}
