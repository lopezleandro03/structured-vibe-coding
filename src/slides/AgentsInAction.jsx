import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './AgentsInAction.module.css'

export default function AgentsInAction({ index, project }) {
  const steps = [
    { num: '1', label: 'Issue', desc: 'Create a GitHub issue describing the feature or bug. Be specific about acceptance criteria.', icon: '📋' },
    { num: '2', label: 'Assign Agent', desc: 'Assign the coding agent with @copilot. It reads AGENTS.md and custom instructions automatically.', icon: '🤖' },
    { num: '3', label: 'Plan', desc: 'The agent analyzes the codebase, creates a structured plan, and breaks work into trackable tasks.', icon: '📐' },
    { num: '4', label: 'Implement', desc: 'Agent writes code following your conventions. Multiple agents can work different issues in parallel.', icon: '⚡' },
    { num: '5', label: 'Validate', desc: 'Agent runs tests, linters, and builds. Opens a PR with clear descriptions of every change.', icon: '✅' },
    { num: '6', label: 'Review', desc: 'You review the PR — or let the review agent do a first pass. Merge when satisfied.', icon: '👀' },
  ]

  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Workflow</p>
        <h1>
          Agents in <span className={styles.highlight}>action</span>
        </h1>

        <div className={styles.timeline}>
          {steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepHeader}>
                <span className={styles.stepIcon}>{step.icon}</span>
                <span className={styles.stepNum}>{step.num}</span>
              </div>
              <h3>{step.label}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Structured vibe coding with teams of GitHub agents" />
    </Slide>
  )
}
