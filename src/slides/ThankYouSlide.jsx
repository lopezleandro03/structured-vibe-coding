import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ThankYouSlide.module.css'

export default function ThankYouSlide({ index }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.content}>
        <div className={styles.accentDash} />
        <h2 className={styles.title}>Thank You</h2>
        <p className={styles.subtitle}>Structured Vibe Coding with a Team of Agents</p>
      </div>
      <BottomBar text="Structured Vibe Coding with a Team of Agents" />
    </Slide>
  )
}
