import React from 'react';
import styles from '../styles/received_interests_page.module.css';
import Sidebar from '../../components/Sidebar';

// Assets
import proImg from '../../../assets/User_end_assets/pro.png';
import pro1Img from '../../../assets/User_end_assets/pro1.png';
import pro2Img from '../../../assets/User_end_assets/pro2.png';
import pro3Img from '../../../assets/User_end_assets/pro3.png';

// Icons
const Icons = {
  Search: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Bell: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  Star: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Logout: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  Settings: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  Mail: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  CheckCircle: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Verified: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  ),
  MoreHorizontal: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
    </svg>
  ),
  Sparkle: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2L14.5 9L21.5 11.5L14.5 14L12 21L9.5 14L2.5 11.5L9.5 9L12 2Z" />
    </svg>
  ),
  Info: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  TrendingUp: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
    </svg>
  ),
  Lightning: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  Lock: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
};

const ReceivedInterestsPage = () => {
  const sidebarTopContent = (
    <div className={styles.sidebarBadgeCard}>
      <div className={styles.goldCircleIcon}><Icons.Star /></div>
      <div className={styles.badgeTextInfo}>
        <span className={styles.shubhMilanBrand}>ShubhMilan</span>
        <span className={styles.eliteLabel}>ELITE MEMBERSHIP</span>
      </div>
    </div>
  );

  const sidebarBottomContent = (
    <div style={{ padding: '0 24px 24px' }}>
      <button className={styles.upgradeBtnPill}>Upgrade to Premium</button>
      <div className={styles.sidebarFooterLinks}>
        <div className={styles.sidebarFooterLink}><Icons.Settings /> Settings</div>
        <div className={`${styles.sidebarFooterLink} ${styles.logoutRed}`}><Icons.Logout /> Logout</div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <Sidebar 
        activePage="received" 
        topContent={sidebarTopContent} 
        bottomContent={sidebarBottomContent} 
      />

      <div className={styles.mainLayout}>
        {/* Top Navbar */}
        <header className={styles.topNavbar}>
          <div className={styles.logoText}>MilanSetu</div>
          
          <div className={styles.searchPill}>
            <span className={styles.searchIcon}><Icons.Search /></span>
            <input type="text" placeholder="Search profiles..." className={styles.searchInput} />
          </div>

          <div className={styles.navActions}>
            <div className={styles.actionIcon}><Icons.Bell /></div>
            <img src={pro1Img} alt="User Avatar" className={styles.userAvatar} />
          </div>
        </header>

        {/* Content Body */}
        <div className={styles.pageBody}>
          
          {/* Center Column */}
          <div className={styles.centerColumn}>
            <div className={styles.titleArea}>
              <h1 className={styles.pageTitle}>Received Interests</h1>
              <div className={styles.pageSubtitle}>Review and respond to members who have expressed interest in your profile.</div>
            </div>

            {/* Stats Row */}
            <div className={styles.statsRow}>
              <div className={styles.statCard}>
                <div className={`${styles.statIconCircle} ${styles.bgPink}`}><Icons.Mail /></div>
                <div className={styles.statNumber}>128</div>
                <div className={styles.statLabel}>Total Received</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statIconCircle} ${styles.bgGold}`}><Icons.Clock /></div>
                <div className={styles.statNumber}>14</div>
                <div className={styles.statLabel}>Pending Reply</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statIconCircle} ${styles.bgGreen}`}><Icons.CheckCircle /></div>
                <div className={styles.statNumber}>32</div>
                <div className={styles.statLabel}>Accepted</div>
              </div>
            </div>

            {/* Interest Cards List */}
            <div className={styles.cardList}>
              
              {/* Card 1 */}
              <div className={styles.interestCard}>
                <div className={styles.photoSection}>
                  <img src={pro2Img} alt="Riya Kapoor" className={styles.matchPhoto} />
                  <div className={styles.ribbonBadge}>PREMIUM</div>
                  <div className={styles.matchPercentPill}>94% MATCH</div>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.cardHeaderRow}>
                    <div>
                      <div className={styles.matchName}>
                        Riya Kapoor <span className={styles.verifiedIcon}><Icons.Verified /></span>
                      </div>
                      <div className={styles.matchSubtext}>26 Yrs • 5'5" • Product Designer</div>
                    </div>
                    <div className={styles.actionIcon}><Icons.MoreHorizontal /></div>
                  </div>
                  
                  <div className={styles.tagRow}>
                    <span className={styles.tagPill}>B.Des, NIFT</span>
                    <span className={styles.tagPill}>Mumbai</span>
                    <span className={styles.tagPill}>Vegetarian</span>
                  </div>

                  <div className={styles.messageBox}>
                    "Hi Aditya, I was really impressed by your profile and our shared interest in art and design. I'd love to connect and get to know you better."
                  </div>

                  <div className={styles.actionRow}>
                    <button className={styles.acceptBtn}>Accept Interest</button>
                    <button className={styles.declineBtn}>Decline</button>
                    <a href="#received" className={styles.viewProfileLink}>View Full Profile</a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className={styles.interestCard}>
                <div className={styles.photoSection}>
                  <img src={proImg} alt="Kavita Iyer" className={styles.matchPhoto} />
                  <div className={styles.matchPercentPill}>88% MATCH</div>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.cardHeaderRow}>
                    <div>
                      <div className={styles.matchName}>
                        Kavita Iyer <span className={styles.verifiedIcon}><Icons.Verified /></span>
                      </div>
                      <div className={styles.matchSubtext}>28 Yrs • 5'6" • Data Scientist</div>
                    </div>
                    <div className={styles.actionIcon}><Icons.MoreHorizontal /></div>
                  </div>
                  
                  <div className={styles.tagRow}>
                    <span className={styles.tagPill}>MS, IIT Delhi</span>
                    <span className={styles.tagPill}>Bengaluru</span>
                    <span className={styles.tagPill}>Eggetarian</span>
                  </div>

                  <div className={styles.messageBox}>
                    "Hello! Our profiles seem highly compatible based on values and career goals. Let me know if you'd be open to a conversation."
                  </div>

                  <div className={styles.actionRow}>
                    <button className={styles.acceptBtn}>Accept Interest</button>
                    <button className={styles.declineBtn}>Decline</button>
                    <a href="#received" className={styles.viewProfileLink}>View Full Profile</a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Sidebar Widgets */}
          <div className={styles.rightSidebar}>
            
            {/* Match of the Day */}
            <div className={`${styles.widgetCard} ${styles.goldWidget}`}>
              <div className={styles.sparkleIcon}><Icons.Sparkle /></div>
              <div className={styles.widgetLabel}>MATCH OF THE DAY</div>
              
              <div className={styles.matchDayProfile}>
                <img src={pro3Img} alt="Sneha Verma" className={styles.smallAvatar} />
                <div>
                  <div className={styles.matchDayName}>Sneha Verma</div>
                  <div className={styles.matchDayProf}>Corporate Lawyer</div>
                </div>
              </div>
              
              <div className={styles.goldMatchScore}>99% Preference Match</div>
              <p className={styles.widgetDesc}>Sneha perfectly matches your age, education, and location preferences.</p>
              
              <button className={styles.goldActionBtn}>View Compatibility Report</button>
            </div>

            {/* Interest Trends */}
            <div className={styles.widgetCard}>
              <div className={styles.chartHeader}>
                <div className={styles.widgetLabel} style={{marginBottom: 0}}>INTEREST TRENDS</div>
                <div className={styles.actionIcon}><Icons.Info /></div>
              </div>
              
              <div className={styles.barChart}>
                <div className={styles.bar} style={{ height: '30%' }}></div>
                <div className={styles.bar} style={{ height: '45%' }}></div>
                <div className={styles.bar} style={{ height: '60%' }}></div>
                <div className={styles.bar} style={{ height: '80%' }}></div>
                <div className={styles.bar} style={{ height: '100%' }}></div>
              </div>
              
              <div className={styles.increaseHighlight}>
                <Icons.TrendingUp /> 32% Increase this week
              </div>
            </div>

            {/* Premium Tips */}
            <div className={styles.widgetCard}>
              <div className={styles.widgetLabel}>PREMIUM TIPS</div>
              
              <div className={styles.tipsList}>
                <div className={styles.tipRow}>
                  <div className={styles.tipIcon}><Icons.Lightning /></div>
                  <div className={styles.tipText}>Respond within 24 hours to boost your profile visibility by 2x.</div>
                </div>
                <div className={styles.tipRow}>
                  <div className={styles.tipIcon}><Icons.Lock /></div>
                  <div className={styles.tipText}>Your photos are currently visible only to accepted connections.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceivedInterestsPage;
