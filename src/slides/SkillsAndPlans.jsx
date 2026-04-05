import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SkillsAndPlans.module.css'

export default function SkillsAndPlans({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Skill #3</p>
        <h1>
          Skills, Tools &amp; <span className={styles.highlight}>Plans</span>
        </h1>
        <p className={styles.subtitle}>
          Give agents step-by-step workflows for complex tasks — and structured plans to execute them methodically.
        </p>

        <div className={styles.columns}>
          <div className={styles.skillCard}>
            <h3 className={styles.cardLabel}>🔧 Skills</h3>
            <p className={styles.cardDesc}>
              Reusable step-by-step workflows stored in <code>.github/skills/</code>.
              Agents invoke them by name to perform multi-step tasks consistently.
            </p>
            <div className={styles.exampleList}>
              <span className={styles.example}>add-slide</span>
              <span className={styles.example}>run-migration</span>
              <span className={styles.example}>deploy-staging</span>
            </div>
          </div>

          <div className={styles.skillCard}>
            <h3 className={styles.cardLabel}>🛠️ MCP Tools</h3>
            <p className={styles.cardDesc}>
              External capabilities agents can call — databases, APIs, search, file systems.
              Extend what agents can do beyond reading and writing code.
            </p>
            <div className={styles.exampleList}>
              <span className={styles.example}>database queries</span>
              <span className={styles.example}>web search</span>
              <span className={styles.example}>API calls</span>
            </div>
          </div>

          <div className={styles.skillCard}>
            <h3 className={styles.cardLabel}>📋 Plans &amp; Todos</h3>
            <p className={styles.cardDesc}>
              Agents break work into structured plans with dependencies before coding.
              Track progress with todos — no more guessing what's done.
            </p>
            <div className={styles.exampleList}>
              <span className={styles.example}>plan.md</span>
              <span className={styles.example}>todo tracking</span>
              <span className={styles.example}>dependency graphs</span>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
