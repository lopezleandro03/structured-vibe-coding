import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './TheProblem.module.css'

export default function TheProblem({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Challenge</p>
        <h1>
          Unstructured vibe coding <span className={styles.highlight}>breaks</span> at scale
        </h1>

        <div className={styles.columns}>
          <div className={styles.painPoints}>
            <div className={styles.painItem}>
              <span className={styles.painIcon}>⚠️</span>
              <div>
                <h3>No guardrails</h3>
                <p>Agents drift without clear boundaries — touching files they shouldn't, inventing patterns that don't match your codebase.</p>
              </div>
            </div>
            <div className={styles.painItem}>
              <span className={styles.painIcon}>🔀</span>
              <div>
                <h3>Inconsistent output</h3>
                <p>Every session starts from zero. No shared conventions, no memory of what was decided before.</p>
              </div>
            </div>
            <div className={styles.painItem}>
              <span className={styles.painIcon}>🐛</span>
              <div>
                <h3>Compounding errors</h3>
                <p>Without verification loops, small mistakes cascade into architectural debt that's expensive to unwind.</p>
              </div>
            </div>
            <div className={styles.painItem}>
              <span className={styles.painIcon}>🤷</span>
              <div>
                <h3>One agent bottleneck</h3>
                <p>A single agent doing everything serially — research, code, test, review — is slow and error-prone.</p>
              </div>
            </div>
          </div>

          <div className={styles.quoteCard}>
            <blockquote className={styles.quote}>
              "We were vibing… and then we looked at the PR and had no idea what happened."
            </blockquote>
            <p className={styles.quoteAuthor}>— Every team that tried unstructured AI coding</p>
          </div>
        </div>
      </div>

      <BottomBar text="Structured vibe coding with teams of GitHub agents" />
    </Slide>
  )
}
