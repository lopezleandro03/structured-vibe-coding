import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SquadSlide.module.css'

export default function SquadSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Destination</p>
        <h1>
          Meet <span className={styles.highlight}>Squad</span>
        </h1>
        <p className={styles.subtitle}>
          A real-world multi-agent orchestration framework that puts all of this into practice.
        </p>

        <div className={styles.columns}>
          <div className={styles.repoCard}>
            <div className={styles.repoHeader}>
              <span className={styles.repoIcon}>📦</span>
              <div>
                <span className={styles.repoName}>bradygaster/squad</span>
                <span className={styles.repoUrl}>github.com/bradygaster/squad</span>
              </div>
            </div>
            <p className={styles.repoDesc}>
              Squad is a .NET-based framework for orchestrating teams of GitHub Copilot coding agents.
              It assigns issues to multiple agents in parallel, each working within defined guardrails —
              with structured plans, custom instructions, and human review gates.
            </p>
            <div className={styles.repoTags}>
              <span className={styles.tag}>.NET</span>
              <span className={styles.tag}>Multi-agent</span>
              <span className={styles.tag}>GitHub Actions</span>
              <span className={styles.tag}>Copilot Agents</span>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🤖</span>
              <div>
                <h3>Parallel agent orchestration</h3>
                <p>Assign multiple issues to coding agents simultaneously. Each agent works independently within its scope.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>📐</span>
              <div>
                <h3>Built-in structure</h3>
                <p>AGENTS.md, custom instructions, and skills are baked into the workflow — not afterthoughts.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <span className={styles.featureIcon}>🔁</span>
              <div>
                <h3>Issue → PR pipeline</h3>
                <p>From GitHub issue to pull request — automated, structured, and always reviewable by humans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
