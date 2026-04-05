import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AgentsMdSlide.module.css'

export default function AgentsMdSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Skill #2</p>
        <h1>
          <span className={styles.highlight}>AGENTS.md</span> — the repo constitution
        </h1>
        <p className={styles.subtitle}>
          A single file that tells every agent who it is, what it owns, and how it should behave.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🎯</div>
            <h3>Role &amp; scope</h3>
            <p>Define what the agent is responsible for — and what it must never touch. Clear boundaries prevent drift.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>📐</div>
            <h3>Conventions</h3>
            <p>Coding patterns, naming rules, architecture decisions. Agents follow them without re-prompting every session.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>🚧</div>
            <h3>Guardrails</h3>
            <p>Files and directories that are off-limits. Config, CI pipelines, infra — protected from accidental modification.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardIcon}>✅</div>
            <h3>Verification</h3>
            <p>What the agent must run before opening a PR — tests, linters, builds. Quality gates baked into the workflow.</p>
          </div>
        </div>

        <div className={styles.callout}>
          <span className={styles.calloutIcon}>💡</span>
          <p>
            Think of AGENTS.md as your team's onboarding doc — but for AI.
            Every agent reads it before writing a single line of code.
          </p>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
