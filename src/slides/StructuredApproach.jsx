import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './StructuredApproach.module.css'

export default function StructuredApproach({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Solution</p>
        <h1>
          Add <span className={styles.highlight}>structure</span> to the vibe
        </h1>
        <p className={styles.subtitle}>
          Four building blocks that turn chaotic AI sessions into repeatable, high-quality engineering workflows.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardNumber}>01</div>
            <h3>AGENTS.md</h3>
            <p>A single file that tells every agent who it is, what it can touch, and how it should behave. The constitution for your repo.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>02</div>
            <h3>Custom Instructions</h3>
            <p>File-scoped rules that apply automatically — coding conventions, naming patterns, framework constraints. Agents follow them without being told each time.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>03</div>
            <h3>Skills &amp; Tools</h3>
            <p>Reusable skill definitions that give agents step-by-step workflows for complex tasks — like adding a slide, running a migration, or deploying.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>04</div>
            <h3>Plans &amp; Todos</h3>
            <p>Agents create structured plans before coding. Break work into trackable todos with dependencies — then execute methodically.</p>
          </div>
        </div>
      </div>

      <BottomBar text="Structured vibe coding with teams of GitHub agents" />
    </Slide>
  )
}
