import React from 'react';
import styles from '../styles/logout_page.module.css';
import Sidebar from '../../components/Sidebar';
import pro1Img from '../../../assets/User_end_assets/pro1.png';

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
  Calendar: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  StarSolid: () => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Crown: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15 8 22 9 17 14 18 21 12 17 6 21 7 14 2 9 9 8 12 2" />
    </svg>
  ),
  LogoutIcon: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  LogoutCycle: () => (
    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  ),
  CheckSmall: () => (
    <svg viewBox="0 0 24 24" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="4">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  ArrowRight: () => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  ),
  ShieldSolid: () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" stroke="currentColor" strokeWidth="1">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
};

const LogoutPage = () => {
  const sidebarTopContent = (
    <div className={styles.sidebarHeader}>
      <div className={styles.starBadge}><Icons.StarSolid /></div>
      <div>
        <div className={styles.brandName}>ShubhMilan</div>
        <div className={styles.eliteSubtitle}>ELITE MEMBERSHIP</div>
      </div>
    </div>
  );

  const sidebarBottomContent = (
    <div style={{ padding: '0 24px 24px' }}>
      <button className={styles.upgradePillBtn}>
        <Icons.Crown /> Upgrade to Platinum
      </button>
      <a href="#login" className={styles.logoutLinkRed}>
        Logout <Icons.LogoutIcon />
      </a>
    </div>
  );

  return (
    <div className={styles.container}>
      <Sidebar 
        activePage="logout" 
        topContent={sidebarTopContent}
        bottomContent={sidebarBottomContent} 
      />

      <div className={styles.mainLayout}>
        <div className={styles.overlay}></div>
        
        {/* Top Navbar (Transparent over background) */}
        <header className={styles.topNavbar}>
          <div className={styles.logoNavText}>MilanSetu</div>
          
          <div className={styles.searchPill}>
            <span className={styles.searchIcon}><Icons.Search /></span>
            <input type="text" placeholder="Search profiles..." className={styles.searchInput} />
          </div>

          <div className={styles.navActions}>
            <div className={styles.actionIcon}><Icons.Bell /></div>
            <div className={styles.actionIcon}><Icons.Calendar /></div>
            <img src={pro1Img} alt="User Avatar" className={styles.userAvatar} />
          </div>
        </header>

        {/* Center Modal Card */}
        <div className={styles.modalContainer}>
          <div className={styles.logoutCard}>
            
            <div className={styles.cardBrand}>ShubhMilan</div>
            
            <div className={styles.iconWrapper}>
              <div className={styles.logoutCircle}>
                <Icons.LogoutCycle />
              </div>
              <div className={styles.checkBadge}>
                <Icons.CheckSmall />
              </div>
            </div>

            <h1 className={styles.headingText}>
              Farewell for now, <br/><span className={styles.headingName}>Aditya Singh</span>
            </h1>

            <p className={styles.subtext}>
              You have been securely logged out. We look forward to welcoming you back to your journey soon.
            </p>

            <button className={styles.primaryBtn} onClick={() => window.location.hash = '#login'}>
              RETURN TO LOGIN <Icons.ArrowRight />
            </button>

            <a href="#home" className={styles.secondaryLink}>
              Back to Homepage
            </a>

            <div className={styles.safetyBanner}>
              <div className={styles.shieldIcon}><Icons.ShieldSolid /></div>
              <div className={styles.safetyText}>
                <span className={styles.safetyBold}>Safety Tip:</span> Always ensure you log out when using public devices to protect your elite matchmaking profile and maintain your personal security.
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
