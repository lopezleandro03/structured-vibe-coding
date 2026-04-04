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
          <p className={styles.eyebrow}>Agentic Engineering</p>
          <h1>
            Structured vibe coding with teams of GitHub <span className={styles.highlight}>agents</span>
          </h1>
          <p className={styles.subtitle}>
            How to harness multiple AI agents working in parallel — with guardrails, conventions, and human oversight — to ship faster without losing control.
          </p>

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Topic</span>
              <span className={styles.metaValue}>GitHub Copilot Agents</span>
            </div>
            <div className={styles.metaDivider} />
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Year</span>
              <span className={styles.metaValue}>2026</span>
            </div>
          </div>
        </div>

        <div className={styles.watermark} aria-hidden="true">
          <img src="/deckio.png" alt="" className={styles.watermarkIcon} />
          <span className={styles.watermarkText}>DECKIO</span>
        </div>
      </div>

      <BottomBar text="Structured vibe coding with teams of GitHub agents" />
    </Slide>
  )
}
