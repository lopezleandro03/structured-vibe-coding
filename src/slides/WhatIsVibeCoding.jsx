import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './WhatIsVibeCoding.module.css'

export default function WhatIsVibeCoding({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Concept</p>
        <h1>
          What is <span className={styles.highlight}>vibe coding</span>?
        </h1>
        <p className={styles.subtitle}>
          You describe what you want. AI writes the code. You guide, review, and iterate.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>💬</span>
            <h3>Natural language first</h3>
            <p>Express intent in plain English — not syntax. The AI translates your vision into working code.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🔄</span>
            <h3>Iterative refinement</h3>
            <p>Review what the agent produces, give feedback, and converge on the right solution together.</p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>🚀</span>
            <h3>Ship faster</h3>
            <p>Focus your expertise on architecture and design decisions while agents handle implementation.</p>
          </div>
        </div>
      </div>

      <BottomBar text="Structured vibe coding with teams of GitHub agents" />
    </Slide>
  )
}
