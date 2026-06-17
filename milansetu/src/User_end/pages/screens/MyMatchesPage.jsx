import React, { useState } from 'react';
import styles from '../styles/my_matches_page.module.css';
import Sidebar from '../../components/Sidebar';
import sidebarStyles from '../styles/sidebar.module.css';

// Assets
import proImg from '../../../assets/User_end_assets/pro.png';
import pro1Img from '../../../assets/User_end_assets/pro1.png';
import pro2Img from '../../../assets/User_end_assets/pro2.png';
import pro3Img from '../../../assets/User_end_assets/pro3.png';

// Icons
const Icons = {
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
  Heart: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  ),
  Sparkle: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
      <path d="M12 2L14.5 9L21.5 11.5L14.5 14L12 21L9.5 14L2.5 11.5L9.5 9L12 2Z" />
    </svg>
  ),
  Target: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  Check: () => (
    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ChevronDown: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Sliders: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
      <line x1="2" y1="14" x2="6" y2="14" /><line x1="10" y1="12" x2="14" y2="12" />
      <line x1="18" y1="16" x2="22" y2="16" />
    </svg>
  ),
  Chat: () => (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  )
};

const MyMatchesPage = () => {
  const [activeTab, setActiveTab] = useState('Highly Recommended');

  const sidebarBottomContent = (
    <>
      <div className={sidebarStyles.tierCard}>
        <div className={sidebarStyles.tierLabel}>CURRENT TIER</div>
        <div className={sidebarStyles.tierName}>Gold Status</div>
        <button className={sidebarStyles.upgradeBtn}>Upgrade to Platinum</button>
      </div>
      
      <div className={sidebarStyles.agentFooter}>
        <img src={proImg} alt="Vikram Singh" className={sidebarStyles.agentAvatar} />
        <div className={sidebarStyles.agentInfo}>
          <span className={sidebarStyles.agentName}>Vikram Singh</span>
          <span className={sidebarStyles.agentID}>ID: SM-9921</span>
        </div>
      </div>
    </>
  );

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <Sidebar activePage="matches" bottomContent={sidebarBottomContent} />

      {/* Main Content */}
      <main className={styles.mainContent}>
        {/* Top Bar */}
        <header className={styles.topBar}>
          <div className={styles.searchPill}>
            <span className={styles.searchIcon}><Icons.Search /></span>
            <input type="text" placeholder="Search matches..." className={styles.searchInput} />
          </div>

          <div className={styles.topBarActions}>
            <button className={styles.iconBtn}><Icons.Notifications /></button>
            <button className={styles.iconBtn}><Icons.Settings /></button>
            <div className={styles.userBlock}>
              <div className={styles.userInfo}>
                <span className={styles.userName}>Aditya Sharma</span>
                <span className={styles.userRole}>Premium Member</span>
              </div>
              <img src={pro1Img} alt="Aditya Sharma" className={styles.avatar} />
            </div>
          </div>
        </header>

        <div className={styles.pageBody}>
          {/* Page Header */}
          <section className={styles.pageHeader}>
            <div className={styles.headerIcon}>
              <Icons.Heart />
            </div>
            <div className={styles.headerText}>
              <h1 className={styles.pageTitle}>My Matches</h1>
              <p className={styles.pageSubtext}>
                Discover curated profiles selected by our elite matchmaking algorithm based on your lifestyle, values, and professional trajectory.
              </p>
            </div>
          </section>

          {/* Featured Match */}
          <section className={styles.featuredCard}>
            <img src={pro2Img} alt="Ananya Sharma" className={styles.featuredPhoto} />
            <div className={styles.featuredContent}>
              <div className={styles.compatibilityBadge}>
                <span className={styles.scoreValue}>98%</span>
                <span className={styles.scoreLabel}>COMPATIBILITY SCORE</span>
              </div>
              <div className={styles.perfectMatchBadge}>
                <Icons.Sparkle /> Perfect Match
              </div>
              <h2 className={styles.featuredName}>Ananya Sharma, 28</h2>
              <p className={styles.featuredSub}>Software Architect at Google • MBA, Stanford University</p>
              
              <div className={styles.chipRow}>
                <div className={styles.infoChip}>
                  <div className={styles.chipLabel}>VALUES</div>
                  <div className={styles.chipValue}>Traditional yet Modern</div>
                </div>
                <div className={styles.infoChip}>
                  <div className={styles.chipLabel}>LOCATION</div>
                  <div className={styles.chipValue}>Mumbai / New York</div>
                </div>
              </div>

              <div className={styles.featuredActions}>
                <button className={styles.outlineBtn}>View Full Profile</button>
                <button className={styles.filledBtn}>Send Interest</button>
              </div>
            </div>
          </section>

          {/* Grid Layout */}
          <div className={styles.contentGrid}>
            <div className={styles.mainColumn}>
              {/* Filter Bar */}
              <div className={styles.filterBar}>
                <div className={styles.tabs}>
                  {['Highly Recommended', 'New Matches', 'Online Now'].map(tab => (
                    <div 
                      key={tab} 
                      className={`${styles.tab} ${activeTab === tab ? styles.activeTab : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </div>
                  ))}
                </div>
                <div className={styles.filtersRow}>
                  <div className={styles.filterItem}>Religion <Icons.ChevronDown /></div>
                  <div className={styles.filterItem}>Community <Icons.ChevronDown /></div>
                  <div className={styles.filterItem}>Location <Icons.ChevronDown /></div>
                  <div className={styles.moreFilters}><Icons.Sliders /> More Filters</div>
                </div>
              </div>

              {/* Match Grid */}
              <div className={styles.matchGrid}>
                {[
                  { name: 'Riya Kapoor', age: 27, role: 'Product Designer', loc: 'Bengaluru', match: '96%', tags: ['Bachelors in Arts', 'Hindu, Brahmin'], img: pro3Img },
                  { name: 'Kavita Iyer', age: 26, role: 'Data Scientist', loc: 'Hyderabad', match: '94%', tags: ['MS, IIT Delhi', 'Vegetarian'], img: proImg },
                  { name: 'Priya Mehta', age: 28, role: 'Surgeon', loc: 'London', match: '92%', tags: ['MBBS, London', 'NRI Status'], img: pro1Img }
                ].map((match, i) => (
                  <div key={i} className={styles.matchCard}>
                    <div className={styles.cardImageWrapper}>
                      <img src={match.img} alt={match.name} className={styles.cardImage} />
                      <div className={styles.verifiedBadge}>
                        <span className={styles.checkIcon}><Icons.Check /></span> VERIFIED
                      </div>
                      <div className={styles.matchPercentBadge}>{match.match} MATCH</div>
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.matchNameAge}>{match.name}, {match.age}</h3>
                      <p className={styles.matchSubtitle}>{match.role}, {match.loc}</p>
                      <div className={styles.tagRow}>
                        {match.tags.map(tag => <span key={tag} className={styles.tag}>{tag}</span>)}
                      </div>
                      <div className={styles.cardActions}>
                        <button className={styles.smallOutlineBtn}>Profile</button>
                        <button className={styles.smallFilledBtn}>Send Interest</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className={styles.sidebarCards}>
              {/* Matching Intelligence */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>Matching Intelligence</h3>
                  <div className={styles.cardIcon}><Icons.Target /></div>
                </div>
                <div className={styles.metricsList}>
                  {[
                    { label: 'Lifestyle Compatibility', value: '92%' },
                    { label: 'Values & Ethics', value: '88%' },
                    { label: 'Career Trajectory', value: '95%' }
                  ].map(metric => (
                    <div key={metric.label} className={styles.metricItem}>
                      <div className={styles.metricLabelRow}>
                        <span className={styles.metricLabel}>{metric.label}</span>
                        <span className={styles.metricValue}>{metric.value}</span>
                      </div>
                      <div className={styles.progressBar}>
                        <div className={styles.progressFill} style={{ width: metric.value }}></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.highlightPanel}>
                  <div className={styles.aPlusBadge}>A+</div>
                  <p className={styles.panelText}>Your match quality is in the top 5% of all users this month.</p>
                </div>
              </div>

              {/* Recent Views */}
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.cardTitle}>RECENT VIEWS</h3>
                </div>
                <div className={styles.recentViewsList}>
                  {[
                    { name: 'Pooja Verma', time: '2h ago', img: pro2Img },
                    { name: 'Kritika Malhotara', time: '5h ago', img: pro3Img }
                  ].map((view, i) => (
                    <div key={i} className={styles.recentItem}>
                      <img src={view.img} alt={view.name} className={styles.recentAvatar} />
                      <div className={styles.recentInfo}>
                        <div className={styles.recentName}>{view.name}</div>
                        <div className={styles.recentAction}>Viewed your profile</div>
                      </div>
                      <div className={styles.recentTime}>{view.time}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.decorativeIcons}>
                  <div className={styles.sparkleIcon}><Icons.Sparkle /></div>
                  <div className={styles.floatingHeart}><Icons.Heart /></div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Floating Action Button */}
      <div className={styles.fab}>
        <Icons.Chat />
      </div>
    </div>
  );
};

export default MyMatchesPage;
