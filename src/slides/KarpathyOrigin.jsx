import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './KarpathyOrigin.module.css'

export default function KarpathyOrigin({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>February 2025</p>
        <h1>
          The tweet that started <span className={styles.highlight}>everything</span>
        </h1>

        <div className={styles.columns}>
          <div className={styles.tweetCard}>
            <div className={styles.tweetHeader}>
              <div className={styles.avatar}>AK</div>
              <div>
                <span className={styles.tweetAuthor}>Andrej Karpathy</span>
                <span className={styles.tweetHandle}>@karpathy</span>
              </div>
            </div>
            <blockquote className={styles.tweetBody}>
              "There's a new kind of coding I call <strong>"vibe coding"</strong>, where you fully give in
              to the vibes, embrace exponentials, and forget that the code even exists."
            </blockquote>
            <p className={styles.tweetMeta}>
              Feb 2, 2025 · 14.2M views
            </p>
          </div>

          <div className={styles.impact}>
            <div className={styles.impactItem}>
              <span className={styles.impactIcon}>🌊</span>
              <h3>A new paradigm</h3>
              <p>Developers everywhere started "vibing" — describing what they wanted and letting AI write the code.</p>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactIcon}>⚡</span>
              <h3>Instant adoption</h3>
              <p>The term went viral. Suddenly everyone from hobbyists to startups was vibe coding their way to MVPs.</p>
            </div>
            <div className={styles.impactItem}>
              <span className={styles.impactIcon}>❓</span>
              <h3>But then what?</h3>
              <p>The vibes were great for prototypes. But what happens when you need to ship, maintain, and scale?</p>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
