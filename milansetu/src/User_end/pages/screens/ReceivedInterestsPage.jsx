
import React, { useState } from 'react';
import styles from '../styles/received_interests_page.module.css';
import Sidebar from '../../components/Sidebar';
import TopBar from '../../components/TopBar';

// Assets
// static profile images removed; render dynamic avatars instead
import AuthenticatedImage from '../../../components/AuthenticatedImage';

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

const REC_INTERESTS_KEY = 'ms_received_interests_v1';

function getRelativeTime(iso) {
  if (!iso) return '';
  const diff = Date.now() - new Date(iso).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'Just now';
  if (mins < 60) return `${mins}m ago`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h ago`;
  return `${Math.floor(hrs / 24)}d ago`;
}

const ReceivedInterestsPage = () => {
  const [interests, setInterests] = useState(() => {
    try {
      const raw = localStorage.getItem(REC_INTERESTS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  // Reload when localStorage changes (e.g., interest sent from another tab/component)
  React.useEffect(() => {
    const load = () => {
      try {
        const raw = localStorage.getItem(REC_INTERESTS_KEY);
        setInterests(raw ? JSON.parse(raw) : []);
      } catch { setInterests([]); }
    };
    window.addEventListener('storage', load);
    return () => window.removeEventListener('storage', load);
  }, []);

  const handleAccept = (id) => {
    setInterests(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, status: 'accepted' } : i);
      localStorage.setItem(REC_INTERESTS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  const handleDecline = (id) => {
    setInterests(prev => {
      const updated = prev.map(i => i.id === id ? { ...i, status: 'declined' } : i);
      localStorage.setItem(REC_INTERESTS_KEY, JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className={styles.container}>
      <Sidebar activePage="received" />

      <div className={styles.mainLayout}>
        {/* Top Navbar */}
        <TopBar searchPlaceholder="Search profiles..." />

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
                <div className={styles.statNumber}>{interests.length}</div>
                <div className={styles.statLabel}>Total Received</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statIconCircle} ${styles.bgGold}`}><Icons.Clock /></div>
                <div className={styles.statNumber}>{interests.filter(i => i.status === 'pending').length}</div>
                <div className={styles.statLabel}>Pending Reply</div>
              </div>
              <div className={styles.statCard}>
                <div className={`${styles.statIconCircle} ${styles.bgGreen}`}><Icons.CheckCircle /></div>
                <div className={styles.statNumber}>{interests.filter(i => i.status === 'accepted').length}</div>
                <div className={styles.statLabel}>Accepted</div>
              </div>
            </div>

            {/* Interest Cards List */}
            <div className={styles.cardList}>
              {interests.length === 0 ? (
                <div style={{padding: '40px 20px', textAlign: 'center', color: '#999'}}>
                  <p>No interests received yet. Share your profile to get more matches!</p>
                </div>
              ) : (
                interests.map((interest, i) => (
              <div key={i} className={styles.interestCard}>
                <div className={styles.photoSection}>
                  <AuthenticatedImage alt={interest.name} className={styles.matchPhoto} />
                  {interest.premium && <div className={styles.ribbonBadge}>PREMIUM</div>}
                  <div className={styles.matchPercentPill}>{interest.match} MATCH</div>
                </div>
                <div className={styles.cardDetails}>
                  <div className={styles.cardHeaderRow}>
                    <div>
                      <div className={styles.matchName}>
                        {interest.name} <span className={styles.verifiedIcon}><Icons.Verified /></span>
                      </div>
                      <div className={styles.matchSubtext}>{interest.age} Yrs • {interest.height} • {interest.role}</div>
                    </div>
                    <div className={styles.actionIcon}><Icons.MoreHorizontal /></div>
                  </div>
                  
                  <div className={styles.tagRow}>
                    {interest.tags && interest.tags.map((tag, idx) => (
                      <span key={idx} className={styles.tagPill}>{tag}</span>
                    ))}
                  </div>

                  <div className={styles.messageBox}>
                    "{interest.message}"
                  </div>

                  <div className={styles.actionRow}>
                    <button
                      className={styles.acceptBtn}
                      onClick={() => handleAccept(interest.id)}
                      disabled={interest.status !== 'pending'}
                      style={interest.status === 'accepted' ? { background: '#4caf50', cursor: 'default' } : {}}
                    >
                      {interest.status === 'accepted' ? '✓ Accepted' : 'Accept Interest'}
                    </button>
                    <button
                      className={styles.declineBtn}
                      onClick={() => handleDecline(interest.id)}
                      disabled={interest.status !== 'pending'}
                      style={interest.status === 'declined' ? { opacity: 0.5, cursor: 'default' } : {}}
                    >
                      {interest.status === 'declined' ? 'Declined' : 'Decline'}
                    </button>
                    <a href="#received" className={styles.viewProfileLink}>View Full Profile</a>
                  </div>
                </div>
              </div>
              ))
              )}
            </div>
          </div>

          {/* Right Sidebar Widgets */}
          <div className={styles.rightSidebar}>
            
            {/* Match of the Day */}
            <div className={`${styles.widgetCard} ${styles.goldWidget}`}>
              <div className={styles.sparkleIcon}><Icons.Sparkle /></div>
              <div className={styles.widgetLabel}>MATCH OF THE DAY</div>
              
              <div className={styles.matchDayProfile}>
                <AuthenticatedImage alt="Sneha Verma" className={styles.smallAvatar} />
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
