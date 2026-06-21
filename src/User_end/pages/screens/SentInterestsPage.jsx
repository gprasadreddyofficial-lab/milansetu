import React from 'react';
import styles from '../styles/sent_interests_page.module.css';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

// Assets
import proImg from '../../../assets/User_end_assets/pro.png';
import pro1Img from '../../../assets/User_end_assets/pro1.png';
import pro2Img from '../../../assets/User_end_assets/pro2.png';
import pro3Img from '../../../assets/User_end_assets/pro3.png';

// Icons
const Icons = {
  Bell: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  Medal: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 15l-2 5 2-1 2 1-2-5z" /><circle cx="12" cy="9" r="7" />
    </svg>
  ),
  Diamond: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 3h12l4 6-10 12L2 9z" /><path d="M11 3v19" /><path d="M7 3l5 19" /><path d="M17 3l-5 19" /><path d="M2 9h20" />
    </svg>
  ),
  Settings: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Sparkle: () => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
      <path d="M12 2L14.5 9L21.5 11.5L14.5 14L12 21L9.5 14L2.5 11.5L9.5 9L12 2Z" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Trash: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  )
};

const SentInterestsPage = () => {
  return (
    <div className={styles.container}>
      <Sidebar activePage="sent" />

      <main className={styles.mainContent}>
        {/* Top Bar */}
        <TopBar searchPlaceholder="Search interests..." />

        <div className={styles.pageBody}>
          {/* Header Row */}
          <div className={styles.headerRow}>
            <div>
              <h1 className={styles.pageTitle}>Sent Interests</h1>
              <div className={styles.journeyPill}>
                <div className={styles.dotIcon}></div>
                Active Journey: 48 Interests
              </div>
            </div>
            <div className={styles.statsBox}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>RESPONSE RATE</span>
                <span className={styles.statValue}>78%</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>TOTAL ACCEPTED</span>
                <span className={styles.statValue}>
                  12 <span className={styles.checkBadge}><Icons.Check /></span>
                </span>
              </div>
            </div>
          </div>

          {/* Timeline Content */}
          <div className={styles.contentArea}>
            <div className={styles.timeline}></div>

            {/* Recent Connections Section */}
            <div className={styles.sectionHeader}>
              <div className={styles.marker}></div>
              <h2 className={styles.sectionTitle}>Recent Connections</h2>
            </div>

            <div className={styles.cardList}>
              {/* Card 1: Ananya Gupta */}
              <div className={styles.card}>
                <div className={styles.cardPhoto}>
                  <img src={proImg} alt="Ananya Gupta" className={styles.photoImg} />
                  <div className={styles.matchOverlay}>
                    <Icons.Sparkle /> ✦ 94% MATCH
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.name}>Ananya Gupta, 26</h3>
                    <div className={`${styles.statusPill} ${styles.statusAccepted}`}>
                      <div className={`${styles.statusDot} ${styles.dotAccepted}`}></div>
                      ● ACCEPTED
                    </div>
                  </div>
                  <p className={styles.subtitle}>Software Engineer at Google • Delhi</p>
                  <div className={styles.timestampRow}>
                    <Icons.Clock /> Sent 2 days ago
                  </div>
                  <div className={styles.tagRow}>
                    <span className={styles.tag}>Tech Enthusiast</span>
                    <span className={styles.tag}>Traveler</span>
                  </div>
                  <div className={styles.cardActions}>
                    <a href="#messages" className={styles.filledBtn}>Message Now</a>
                    <button className={styles.moreBtn}>•••</button>
                  </div>
                </div>
              </div>

              {/* Card 2: Priya Sharma */}
              <div className={styles.card}>
                <div className={styles.cardPhoto}>
                  <img src={pro2Img} alt="Priya Sharma" className={styles.photoImg} />
                  <div className={styles.matchOverlay}>
                    <Icons.Sparkle /> ✦ 88% MATCH
                  </div>
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.name}>Priya Sharma, 28</h3>
                    <div className={`${styles.statusPill} ${styles.statusPending}`}>
                      <div className={`${styles.statusDot} ${styles.dotPending}`}></div>
                      ● PENDING
                    </div>
                  </div>
                  <p className={styles.subtitle}>Creative Director • Mumbai</p>
                  <div className={styles.timestampRow}>
                    <Icons.Clock /> Sent 5 hours ago
                  </div>
                  <div className={styles.tagRow}>
                    <span className={styles.tag}>Art Lover</span>
                    <span className={styles.tag}>Yoga</span>
                  </div>
                  <div className={styles.cardActions}>
                    <button className={styles.outlineBtn}>Follow Up</button>
                    <a href="#sent" className={styles.withdrawLink}>Withdraw</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Last Week Section */}
            <div className={styles.sectionHeader}>
              <div className={`${styles.marker} ${styles.markerOutline}`}></div>
              <h2 className={styles.sectionTitle}>Last Week</h2>
            </div>

            <div className={styles.cardList}>
              {/* Card 3: Meera Verma */}
              <div className={styles.card}>
                <div className={styles.cardPhoto}>
                  <img src={pro3Img} alt="Meera Verma" className={styles.photoImg} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <h3 className={styles.name}>Meera Verma, 27</h3>
                    <div className={`${styles.statusPill} ${styles.statusDeclined}`}>
                      <div className={`${styles.statusDot} ${styles.dotDeclined}`}></div>
                      ● DECLINED
                    </div>
                  </div>
                  <p className={styles.subtitle}>Pediatrician • Pune</p>
                  <div className={styles.quoteBox}>
                    "Thank you for your interest. I'm currently looking for someone in my home city."
                  </div>
                  <div className={styles.cardActions}>
                    <button className={styles.archivedBtn} disabled>Profile Archived</button>
                    <button className={styles.deleteBtn}><Icons.Trash /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SentInterestsPage;
