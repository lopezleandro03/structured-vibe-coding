import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AgentTeams.module.css'

export default function AgentTeams({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Parallel Execution</p>
        <h1>
          Teams of <span className={styles.highlight}>agents</span>, not a single bot
        </h1>
        <p className={styles.subtitle}>
          GitHub Copilot coding agents work like a dev team — multiple agents tackling different parts of the problem simultaneously.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardEmoji}>🏗️</div>
            <h3>Coding Agent</h3>
            <p>Implements features end-to-end: reads the plan, writes code, runs tests, and opens a PR — all autonomously.</p>
            <span className={styles.tag}>Implements</span>
          </div>
          <div className={styles.card}>
            <div className={styles.cardEmoji}>🔍</div>
            <h3>Code Review Agent</h3>
            <p>Reviews PRs with deep context awareness. Catches bugs, suggests improvements, enforces your team's standards.</p>
            <span className={styles.tag}>Reviews</span>
          </div>
          <div className={styles.card}>
            <div className={styles.cardEmoji}>🧪</div>
            <h3>Explore Agent</h3>
            <p>Investigates the codebase, traces dependencies, and answers complex questions — without modifying any files.</p>
            <span className={styles.tag}>Researches</span>
          </div>
          <div className={styles.card}>
            <div className={styles.cardEmoji}>🧠</div>
            <h3>You — the Orchestrator</h3>
            <p>You set the direction, write the AGENTS.md, define tasks, and review outcomes. The human stays in the loop.</p>
            <span className={styles.tag}>Directs</span>
          </div>
        </div>
      </div>

      <BottomBar text="Structured vibe coding with teams of GitHub agents" />
    </Slide>
  )
}
