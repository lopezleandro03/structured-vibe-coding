import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './Skill4Divider.module.css'

export default function Skill4Divider({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Skill #4</p>
        <h1 className={styles.title}>
          Build and Manage<br />
          a Team of <span className={styles.highlight}>Agents</span>
        </h1>
      </div>

      <BottomBar text="Structured Vibe Coding with a Team of Agents" />
    </Slide>
  )
}
