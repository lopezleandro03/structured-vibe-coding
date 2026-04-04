import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './BestPractices.module.css'

export default function BestPractices({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Takeaways</p>
        <h1>
          Best <span className={styles.highlight}>practices</span>
        </h1>

        <div className={styles.columns}>
          <div className={styles.doColumn}>
            <h2 className={styles.columnTitle}>
              <span className={styles.doIcon}>✅</span> Do
            </h2>
            <ul className={styles.list}>
              <li>Write a clear <strong>AGENTS.md</strong> — scope, conventions, boundaries</li>
              <li>Use <strong>custom instructions</strong> per file pattern for automatic guardrails</li>
              <li>Break work into <strong>small, focused issues</strong> — one concern per agent task</li>
              <li>Define <strong>verification steps</strong> — tests, linting, builds that agents run before PRing</li>
              <li>Run <strong>multiple agents in parallel</strong> on independent issues</li>
              <li>Keep the <strong>human in the loop</strong> — review every PR before merging</li>
            </ul>
          </div>

          <div className={styles.dontColumn}>
            <h2 className={styles.columnTitle}>
              <span className={styles.dontIcon}>❌</span> Don't
            </h2>
            <ul className={styles.list}>
              <li>Don't give agents <strong>vague, open-ended prompts</strong> — "make it better" goes nowhere</li>
              <li>Don't let agents <strong>modify scaffolding files</strong> — lock down config, CI, infra</li>
              <li>Don't skip <strong>code review</strong> — AI output needs human judgment</li>
              <li>Don't put <strong>everything in one issue</strong> — decompose for parallel execution</li>
              <li>Don't expect <strong>perfection on first pass</strong> — iterate, refine, converge</li>
              <li>Don't forget to <strong>update instructions</strong> as your codebase evolves</li>
            </ul>
          </div>
        </div>
      </div>

      <BottomBar text="Structured vibe coding with teams of GitHub agents" />
    </Slide>
  )
}
