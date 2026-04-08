import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SquadSlide.module.css'

export default function SquadSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Real-World Problem</p>
        <h1>
          From npm package to <span className={styles.highlight}>SaaS platform</span>
        </h1>
        <p className={styles.subtitle}>
          DECKIO started as an open-source engine. Then teams wanted collaboration, sharing, and publishing — a full SaaS. One agent wasn't enough anymore.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardNumber}>1</div>
            <div>
              <h3>The npm package</h3>
              <p>A slide engine that runs locally. One dev, one agent, fast iterations. The primitives — AGENTS.md, custom instructions, skills — work great at this scale.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>2</div>
            <div>
              <h3>The growth problem</h3>
              <p>Users want auth, real-time collaboration, publishing, billing, analytics. The scope explodes — too much context, too many domains for a single agent.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardNumber}>3</div>
            <div>
              <h3>The solution: a team of agents</h3>
              <p>Frontend, backend, tester, devrel — each with their own charter, memory, and scope. Agents that specialize, coordinate, and build in parallel.</p>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="Structured Vibe Coding with a Team of Agents" />
    </Slide>
  )
}
