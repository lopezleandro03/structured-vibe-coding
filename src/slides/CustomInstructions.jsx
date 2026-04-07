import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './CustomInstructions.module.css'

export default function CustomInstructions({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>Skill #2</p>
        <h1>
          Custom <span className={styles.highlight}>Instructions</span>
        </h1>
        <p className={styles.subtitle}>
          File-scoped rules that travel with your repo. Agents read them automatically — no prompting needed.
        </p>

        <div className={styles.columns}>
          <div className={styles.codeCard}>
            <div className={styles.codeHeader}>
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeDot} />
              <span className={styles.codeTitle}>.github/instructions/react.instructions.md</span>
            </div>
            <pre className={styles.codeBlock}>
{`---
applyTo: "**/*.jsx"
---

# React Conventions

- Use functional components only
- Prefer named exports
- Use CSS Modules for styling
- Never use inline styles
- Always add PropTypes or TS types`}
            </pre>
          </div>

          <div className={styles.benefits}>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>📁</span>
              <div>
                <h3>File-pattern scoped</h3>
                <p>Rules apply only to matching files — <code>**/*.jsx</code>, <code>**/api/**</code>, <code>**/tests/**</code>. Precise, not noisy.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🤖</span>
              <div>
                <h3>Auto-loaded by agents</h3>
                <p>Copilot reads matching instructions before every edit. No need to paste rules into prompts.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🔄</span>
              <div>
                <h3>Version-controlled</h3>
                <p>Instructions live in your repo, evolve with your code, and apply to every contributor — human or AI.</p>
              </div>
            </div>
            <div className={styles.benefitItem}>
              <span className={styles.benefitIcon}>🧱</span>
              <div>
                <h3>Composable</h3>
                <p>Multiple instruction files can target the same file. Stack conventions, security rules, and style guides.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
