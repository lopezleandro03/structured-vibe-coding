import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SquadArchSlide.module.css'

export default function SquadArchSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>How It Works</p>
          <h1>
            Squad <span className={styles.highlight}>Architecture</span>
          </h1>
          <p className={styles.subtitle}>
            One request flows through a routing engine, fans out to parallel agents, and lands labeled results — all coordinated through shared memory.
          </p>
        </div>

        <div className={styles.flow}>
          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>Your Request</h3>
              <p>"Team, build the recipe listing page"</p>
            </div>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>Coordinator</h3>
              <p>Reads routing rules, decomposes work, decides who to spawn</p>
            </div>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>Parallel Agents</h3>
              <p>Each reads shared memory, works independently, writes results</p>
            </div>
          </div>

          <div className={styles.arrow}>→</div>

          <div className={styles.flowStep}>
            <div className={styles.stepNumber}>4</div>
            <div className={styles.stepContent}>
              <h3>Results</h3>
              <p>Scribe merges decisions, Ralph tracks issues, you get labeled PRs</p>
            </div>
          </div>
        </div>

        <div className={styles.components}>
          <div className={styles.compCard}>
            <span className={styles.compIcon}>🧭</span>
            <h3>Coordinator</h3>
            <p>Routing engine that reads <code>routing.md</code> and dispatches work. Say "team" for parallel fan-out, or name an agent for direct routing.</p>
          </div>
          <div className={styles.compCard}>
            <span className={styles.compIcon}>🤖</span>
            <h3>Agents</h3>
            <p>Independent specialists with charters, roles, and persistent history. Spawned as separate processes — never see each other's conversations.</p>
          </div>
          <div className={styles.compCard}>
            <span className={styles.compIcon}>🧠</span>
            <h3>Memory</h3>
            <p><code>.squad/</code> — roster, routing, decisions, charters, histories. All agents read this before every task. You own and edit these files.</p>
          </div>
          <div className={styles.compCard}>
            <span className={styles.compIcon}>📝</span>
            <h3>Scribe</h3>
            <p>Silent agent that merges decisions from all agents into <code>decisions.md</code>. Logs sessions. You never talk to Scribe directly.</p>
          </div>
          <div className={styles.compCard}>
            <span className={styles.compIcon}>🔄</span>
            <h3>Ralph</h3>
            <p>Work monitor that watches issues, tracks progress, auto-triages, and keeps the team working until the board is clear.</p>
          </div>
        </div>
      </div>

      <BottomBar text="Structured Vibe Coding with a Team of Agents" />
    </Slide>
  )
}
