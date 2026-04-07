import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ClosingSlide.module.css'

export default function ClosingSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.quoteCard}>
          <div className={styles.quoteIcon}>"</div>
          <blockquote className={styles.quote}>
            We're not building a big team of engineers.<br />
            We're building a <span className={styles.highlight}>small, elite team</span> that knows how to <span className={styles.highlight}>harness agents</span>.
          </blockquote>
          <p className={styles.elaboration}>
            The skill isn't writing code anymore — it's orchestrating the ones who do. Defining scope, setting guardrails, reviewing output, and evolving the system. The fewer humans, the sharper the focus. The sharper the focus, the better the agents perform.
          </p>
          <div className={styles.author}>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>Omar</span>
              <span className={styles.authorRole}>Engineering Leadership</span>
            </div>
          </div>
        </div>

        <div className={styles.pillars}>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>🎯</span>
            <h3>Define, don't code</h3>
            <p>Write AGENTS.md, instructions, and skills — not implementations.</p>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>🏗️</span>
            <h3>Architect, don't build</h3>
            <p>Design the system of agents, scope their domains, set their boundaries.</p>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>🔍</span>
            <h3>Review, don't write</h3>
            <p>Your job is quality gates, not pull requests. Agents ship — you approve.</p>
          </div>
          <div className={styles.pillar}>
            <span className={styles.pillarIcon}>⚡</span>
            <h3>Multiply, don't add</h3>
            <p>One human + five agents > five humans. Leverage scales. Headcount doesn't.</p>
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
