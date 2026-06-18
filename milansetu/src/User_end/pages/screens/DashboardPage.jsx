import React from 'react';
import styles from '../styles/dashboard_page.module.css';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import priyaImg from '../../../assets/User_end_assets/pro.png';
import arjunImg from '../../../assets/User_end_assets/pro1.png';
import ananyaImg from '../../../assets/User_end_assets/pro2.png';
import rohanImg from '../../../assets/User_end_assets/pro3.png';

// SVG Icons
const Icons = {
  Profile: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Matches: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.84-8.84 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  Sent: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  Meetings: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Notifications: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  Settings: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  Pencil: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ),
  Eye: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  )
};

const DashboardPage = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <Sidebar activePage="dashboard" />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <TopBar searchPlaceholder="Search connections..." />

        <div className={styles.dashboardBody}>
          {/* Hero Banner */}
          <section className={styles.heroBanner}>
            <h1 className={styles.heroHeading}>Welcome back, Aditya!</h1>
            <p className={styles.heroSubtext}>
              Your perfect match is waiting. We've found 12 new potential partners that align with your lifestyle and values.
            </p>
            <button className={styles.heroCta} onClick={() => window.location.hash = '#matches'}>
              Explore Matches <Icons.ArrowRight />
            </button>
          </section>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Total Matches</span>
              <span className={styles.statValue}>248</span>
              <div className={styles.statIconContainer}><Icons.Profile /></div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Sent Interests</span>
              <span className={styles.statValue}>42</span>
              <div className={styles.statIconContainer}><Icons.Sent /></div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Received</span>
              <span className={styles.statValue}>15</span>
              <div className={styles.statIconContainer}><Icons.Matches /></div>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>Upcoming</span>
              <span className={styles.statValue}>3</span>
              <div className={styles.statIconContainer}><Icons.Meetings /></div>
            </div>
          </div>

          {/* Analytics & Strength Row */}
          <div className={styles.analyticsSection}>
            <div className={styles.analyticsCard}>
              <div className={styles.cardHeader}>
                <div>
                  <h3 className={styles.cardTitle}>Match Success Analytics</h3>
                  <p className={styles.cardSubtitle}>Interest acceptance trends over the last 30 days</p>
                </div>
                <div className={styles.filterDropdown}>
                  Last 30 Days <span>▼</span>
                </div>
              </div>
              <div className={styles.chartContainer}>
                {[
                  { label: 'Week 1', h1: 40, h2: 30, h3: 20 },
                  { label: 'Week 2', h1: 50, h2: 35, h3: 25 },
                  { label: 'Week 3', h1: 60, h2: 40, h3: 30 },
                  { label: 'Week 4', h1: 80, h2: 50, h3: 40 }
                ].map((week, i) => (
                  <div key={i} className={styles.barWrapper}>
                    <div className={styles.bar}>
                      <div className={`${styles.barSegment} ${styles.segment1}`} style={{ height: week.h3 }}></div>
                      <div className={`${styles.barSegment} ${styles.segment2}`} style={{ height: week.h2 }}></div>
                      <div className={`${styles.barSegment} ${styles.segment3}`} style={{ height: week.h1 }}></div>
                    </div>
                    <span className={styles.barLabel}>{week.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.strengthCard}>
              <h3 className={styles.cardTitle}>Profile Strength</h3>
              <div className={styles.progressContainer}>
                <svg className={styles.progressRing} viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="#f2f2f2" strokeWidth="8" />
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="#B8860B" strokeWidth="8" 
                    strokeDasharray="282.7" strokeDashoffset="42.4" strokeLinecap="round" />
                </svg>
                <div className={styles.progressText}>
                  <span className={styles.percentValue}>85%</span>
                  <span className={styles.percentLabel}>Complete</span>
                </div>
              </div>
              <p className={styles.strengthDesc}>
                Add your professional details to reach 100% and unlock high-quality matches.
              </p>
              <button className={styles.completeProfileBtn}>
                <Icons.Pencil /> Complete Profile
              </button>
              <div className={styles.badgeRow}>
                <div className={`${styles.badgeIcon} ${styles.verifiedBadge}`}>✓</div>
                <div className={`${styles.badgeIcon} ${styles.workBadge}`}><Icons.Briefcase /></div>
                <div className={`${styles.badgeIcon} ${styles.securityBadge}`}>🛡</div>
              </div>
            </div>
          </div>

          {/* Top Picks Section */}
          <section className={styles.topPicksSection}>
            <div className={styles.topPicksHeader}>
              <h2 className={styles.sectionTitle}>Top Picks for You</h2>
              <a href="#dashboard" className={styles.viewAllLink}>View All ›</a>
            </div>
            <div className={styles.profileGrid}>
              {[
                { name: 'Ananya Gupta', age: 26, match: '98%', prof: 'Medical Professional', loc: 'Mumbai', img: ananyaImg },
                { name: 'Priya Sharma', age: 25, match: '94%', prof: 'Creative Director', loc: 'Bangalore', img: priyaImg },
                { name: 'Ishani Verma', age: 27, match: '91%', prof: 'UX Designer', loc: 'Delhi', img: rohanImg }
              ].map((profile, i) => (
                <div key={i} className={styles.profileCard}>
                  <div className={styles.imageSection}>
                    <img src={profile.img} alt={profile.name} className={styles.profilePhoto} />
                    <div className={styles.imageOverlay}></div>
                    <div className={styles.matchBadge}>
                      <span className={styles.starIcon}>★</span> {profile.match} Match
                    </div>
                    <div className={styles.verifiedTag}>VERIFIED</div>
                    {i === 2 && <div className={styles.watermark}>Shubh Milan</div>}
                    <div className={styles.uiIcons}>
                      <div className={styles.uiIcon}>♡</div>
                      <div className={styles.uiIcon}>💬</div>
                    </div>
                  </div>
                  <div className={styles.cardDetails}>
                    <div className={styles.profileNameAge}>{profile.name}, {profile.age}</div>
                    <div className={styles.profileLocation}>
                      <Icons.Briefcase /> {profile.prof} • {profile.loc}
                    </div>
                    <div className={styles.actionRow}>
                      <button className={styles.sendInterestBtn}>Send Interest</button>
                      <button className={styles.viewBtn}><Icons.Eye /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Footer */}
          <footer className={styles.dashboardFooter}>
            <span>© 2024 ShubhMilan Matrimonial Services. All rights reserved.</span>
            <div className={styles.divider}></div>
            <span>Premium Executive Dashboard v4.2</span>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
