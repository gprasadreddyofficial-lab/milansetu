import React from 'react';
import styles from '../styles/my_profile_page.module.css';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';
import ananyaImg from '../../../assets/User_end_assets/pro2.png'; // Using existing asset for Aditya for now

const Icons = {
  Notifications: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  Settings: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33-1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Search: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Support: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
  Pin: () => (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Pencil: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
    </svg>
  ),
  Share: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
  ),
  SearchSmall: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Users: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Profile: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Dashboard: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
    </svg>
  ),
  Briefcase: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  ),
  Graduation: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 10L12 5L2 10L12 15L22 10Z" /><path d="M6 12V17L12 20L18 17V12" />
    </svg>
  ),
  Moon: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
};

const MyProfilePage = () => {
  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <Sidebar activePage="profile" />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <TopBar searchPlaceholder="Search connections..." avatarSrc={ananyaImg} />

        <div className={styles.profileBody}>
          {/* Profile Header Card */}
          <section className={styles.profileHeaderCard}>
            <div className={styles.bannerStrip}></div>
            <div className={styles.headerContent}>
              <div className={styles.profileInfoWrapper}>
                <div className={styles.photoContainer}>
                  <img src={ananyaImg} alt="Aditya Sharma" className={styles.profilePhoto} />
                  <div className={styles.verifiedBadge}>✓</div>
                </div>
                <div>
                  <div className={styles.nameBadgeRow}>
                    <h1 className={styles.profileName}>Aditya Sharma</h1>
                    <span className={styles.memberBadge}>Premium Member</span>
                  </div>
                  <div className={styles.metaLine}>
                    <Icons.Pin /> New Delhi, India • Software Architect
                  </div>
                </div>
              </div>
              <div className={styles.headerActions}>
                <button className={styles.editBtn}><Icons.Pencil /> Edit Profile</button>
                <button className={styles.shareBtn}><Icons.Share /> Share</button>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <nav className={styles.tabBar}>
            <div className={`${styles.tab} ${styles.activeTab}`}>Overview</div>
            <div className={styles.tab}>Personal Details</div>
            <div className={styles.tab}>Family</div>
            <div className={styles.tab}>Education & Career</div>
            <div className={styles.tab}>Horoscope</div>
            <div className={styles.tab}>Partner Preferences</div>
            <div className={styles.tab}>Photo Gallery</div>
          </nav>

          {/* Info Grid */}
          <div className={styles.infoGrid}>
            {/* Personal Details Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}><Icons.SearchSmall /></div>
                <h2 className={styles.cardTitle}>Personal Details</h2>
              </div>
              <div className={styles.fieldGrid}>
                {[
                  { label: 'Full Name', value: 'Aditya Sharma' },
                  { label: 'Age', value: '28 Years' },
                  { label: 'Height', value: "5'11\" (180 cm)" },
                  { label: 'Religion', value: 'Hindu (Brahmin)' },
                  { label: 'Mother Tongue', value: 'Hindi' },
                  { label: 'Marital Status', value: 'Never Married' }
                ].map((f, i) => (
                  <div key={i} className={styles.field}>
                    <span className={styles.fieldLabel}>{f.label}</span>
                    <div className={styles.fieldValue}>{f.value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Partner Card */}
            <div className={`${styles.infoCard} ${styles.darkCard}`}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle} style={{backgroundColor: 'rgba(255,255,255,0.1)', color: 'white'}}><Icons.Star /></div>
                <h2 className={styles.cardTitle}>Ideal Partner</h2>
              </div>
              <div>
                {[
                  { label: 'Age Range', value: '24 - 27 Years' },
                  { label: 'Height', value: "5'4'' - 5'8''" },
                  { label: 'Religion', value: 'Hindu (Any)' },
                  { label: 'Location', value: 'Delhi NCR / Overseas' }
                ].map((p, i) => (
                  <div key={i} className={styles.prefRow}>
                    <span className={styles.prefLabel}>{p.label}</span>
                    <span className={styles.prefValue}>{p.value}</span>
                  </div>
                ))}
                <button className={styles.updatePrefBtn}>Update Preferences</button>
              </div>
            </div>

            {/* Family Information Card */}
            <div className={styles.infoCard}>
              <div className={styles.cardHeader}>
                <div className={styles.iconCircle}><Icons.Users /></div>
                <h2 className={styles.cardTitle}>Family Information</h2>
              </div>
              <div className={styles.subBoxGrid}>
                <div className={styles.subBox}>
                  <span className={styles.subBoxLabel}>PARENTS</span>
                  <div className={styles.subField}>
                    <Icons.Briefcase />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Father's Occupation</span>
                      <span className={styles.subFieldValue}>Retired Govt. Officer</span>
                    </div>
                  </div>
                  <div className={styles.subField}>
                    <Icons.Profile />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Mother's Occupation</span>
                      <span className={styles.subFieldValue}>Homemaker</span>
                    </div>
                  </div>
                </div>
                <div className={styles.subBox}>
                  <span className={styles.subBoxLabel}>BACKGROUND</span>
                  <div className={styles.subField}>
                    <Icons.Users />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Siblings</span>
                      <span className={styles.subFieldValue}>1 Brother (Married)</span>
                    </div>
                  </div>
                  <div className={styles.subField}>
                    <Icons.Dashboard />
                    <div className={styles.subFieldInfo}>
                      <span className={styles.subFieldLabel}>Family Values</span>
                      <span className={styles.subFieldValue}>Traditional with Modern Outlook</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Card */}
            <div className={`${styles.infoCard} ${styles.careerCard}`}>
              <div className={styles.cardHeader}>
                <div className={`${styles.iconCircle} ${styles.goldCircle}`}><Icons.Graduation /></div>
                <h2 className={styles.cardTitle}>Career</h2>
              </div>
              <div className={styles.careerItem}>
                <span className={styles.careerTitle}>IIT Delhi</span>
                <span className={styles.careerSubtitle}>B.Tech in Computer Science</span>
              </div>
              <div className={styles.careerItem}>
                <span className={styles.careerTitle}>Google India</span>
                <span className={styles.careerSubtitle}>Senior Software Architect</span>
              </div>
              <div className={styles.divider}></div>
              <div className={styles.incomeRow}>
                <span className={styles.subFieldLabel}>Annual Income</span>
                <span className={styles.incomeValue}>₹45 - 50 LPA</span>
              </div>
            </div>

            {/* Horoscope & Kundali Card */}
            <div className={`${styles.infoCard} ${styles.fullWidth}`}>
              <div className={styles.cardHeaderFull}>
                <div style={{display: 'flex', alignItems: 'center', gap: '12px'}}>
                  <div className={styles.iconCircle}><Icons.Moon /></div>
                  <h2 className={styles.cardTitle}>Horoscope & Kundali</h2>
                </div>
                <div className={styles.badgeRow}>
                  <span className={styles.pinkPill}>Non-Manglik</span>
                  <span className={styles.outlinePill}>View Full Kundali</span>
                </div>
              </div>
              <div className={styles.dataRow}>
                {[
                  { label: 'BIRTH DATE', value: '15th July, 1996' },
                  { label: 'BIRTH TIME', value: '09:45 AM' },
                  { label: 'BIRTH PLACE', value: 'Lucknow, UP' },
                  { label: 'SUN SIGN', value: 'Cancer (Karka)' }
                ].map((d, i) => (
                  <div key={i} className={styles.dataItem}>
                    <span className={styles.fieldLabel}>{d.label}</span>
                    <span className={styles.subFieldValue} style={{fontSize: '15px'}}>{d.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className={styles.profileFooter}>
          <div className={styles.footerInner}>
            <div>
              <span className={styles.footerWordmark}>ShubhMilan</span>
              <span className={styles.copyright}>© 2024 ShubhMilan Matrimonials. All rights reserved.</span>
            </div>
            <div className={styles.footerLinks}>
              <a href="#profile" className={styles.footerLink}>Privacy Policy</a>
              <a href="#profile" className={styles.footerLink}>Terms of Service</a>
              <a href="#profile" className={styles.footerLink}>Safety Tips</a>
              <a href="#profile" className={styles.footerLink}>Contact Us</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default MyProfilePage;
