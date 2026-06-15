import Header from '../../components/Header';
import AboutFooter from '../../components/AboutFooter';
import { TrustStats } from '../../components/TrustStats';
import OurJourney from '../../components/OurJourney';
import MissionVision from '../../components/MissionVision';
import LeadershipTeam from '../../components/LeadershipTeam';
import styles from '../styles/about_page.module.css';

function AboutHero() {
  const heroBg = '/images/hero_bg.png';
  return (
    <section className={styles.hero}>
      {/* Background image */}
      <img src={heroBg} alt="Couple in traditional wedding attire" className={styles.heroBg} aria-hidden="true" />
      
      {/* Background Image is handled via CSS for overlay control */}
      <div className={styles.heroOverlay} />

      <div className={styles.heroContent}>
        <span className={styles.eyebrow}>LEGACY & EXCELLENCE</span>
        <h1 className={styles.mainHeading}>
          <span className={styles.headingMaroon}>A Legacy of Love and </span>
          <span className={styles.headingCream}>Tradition.</span>
        </h1>
        <p className={styles.description}>
          Crafting meaningful unions for the discerning elite since 2014, where timeless cultural values meet sophisticated modern matchmaking.
        </p>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <AboutHero />
        <TrustStats />
        <OurJourney />
        <MissionVision />
        <LeadershipTeam />
      </main>
      <AboutFooter />
    </div>
  );
}

