import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './MeetSquadSlide.module.css'

export default function MeetSquadSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Answer</p>
        <h1>
          Meet <span className={styles.highlight}>Squad</span>
        </h1>
        <p className={styles.subtitle}>
          Describe what you're building. Get a team of specialists that live in your repo. Agents fan out, build in parallel, and land PRs in minutes.
        </p>

        <div className={styles.columns}>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🚀</span>
            <h3>Parallel AI Teamwork</h3>
            <p>Give a task to the team and multiple agents fan out simultaneously. Results land in minutes, not hours.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🧠</span>
            <h3>Persistent Memory</h3>
            <p>Agents remember decisions and conventions across sessions. Your team gets smarter every time you work together.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🐙</span>
            <h3>GitHub-Native</h3>
            <p>Squad lives in your repo as <code>.squad/</code>. Commit it, share it, clone it. Your team travels with your code.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🛡️</span>
            <h3>Built-in Governance</h3>
            <p>File-write guards, reviewer lockout, human review gates — rules enforced in code, not suggestions in prompts.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>⚡</span>
            <h3>SDK-First Design</h3>
            <p>Define your team in TypeScript with <code>squad.config.ts</code>. Typed, testable, version-controlled.</p>
          </div>
          <div className={styles.featureCard}>
            <span className={styles.featureIcon}>🔄</span>
            <h3>Ralph — Work Monitor</h3>
            <p>A built-in agent that watches the backlog, auto-triages issues, and keeps the team working until the board is clear.</p>
          </div>
        </div>

        <code className={styles.installCmd}>npm i -g @bradygaster/squad-cli</code>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
