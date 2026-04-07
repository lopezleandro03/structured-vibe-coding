import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CoverSlide.module.css'

export default function CoverSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.cover}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className="content-frame content-gutter">
        <div className={styles.content}>
          <p className={styles.eyebrow}>From Vibes to Engineering</p>
          <h1>
            Structured <span className={styles.highlight}>Vibe Coding</span> with a Team of Agents
          </h1>
          <p className={styles.subtitle}>
            How a tweet became a movement — and how to evolve from unstructured AI prompting
            to orchestrating teams of GitHub agents that ship real software.
          </p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Journey</span>
              <span className={styles.metaValue}>Vibes → Structure → Squad</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Stack</span>
              <span className={styles.metaValue}>GitHub Copilot Agents</span>
            </div>
          </div>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          <img src="/deckio.png" alt="" className={styles.watermarkIcon} />
          <span className={styles.watermarkText}>DECKIO</span>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
