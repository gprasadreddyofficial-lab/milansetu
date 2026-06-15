import styles from '../pages/styles/success_stories.module.css';

export default function SuccessStories() {
  return (
    <section className={styles.section} id="success">
      <div className={styles.container}>
        
        {/* Main Quote Heading */}
        <div className={styles.header}>
          <h2 className={styles.mainQuote}>
            "Our journey began with a single match and ended in a lifetime of love."
          </h2>
        </div>

        {/* Featured Story Block */}
        <div className={styles.featuredStory}>
          
          {/* Left: Image Side */}
          <div className={styles.imageSide}>
            <img 
              src="https://images.unsplash.com/photo-1621112904887-419379ce6824?w=800&q=80" 
              alt="Sneha & Sai" 
              className={styles.featuredImage}
            />
          </div>

          {/* Right: Content Side */}
          <div className={styles.contentSide}>
            <span className={styles.storyTag}>SNEHA & SAI'S STORY</span>
            <blockquote className={styles.testimonial}>
              "Heritage Elite provided the privacy and exclusivity we were looking for. The matchmaking process was so personalized that we felt like we already knew each other before our first meeting. It wasn't just about finding a partner; it was about finding the right soul for the family."
            </blockquote>
            
            <div className={styles.footer}>
              <div className={styles.divider}></div>
              <span className={styles.marriedDate}>Married Oct 2023</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
