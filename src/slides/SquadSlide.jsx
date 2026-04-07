import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SquadSlide.module.css'

export default function SquadSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`orb ${styles.orb3}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div>
              <p className={styles.eyebrow}>The Real-World Problem</p>
              <h1>
                From npm package to <span className={styles.highlight}>SaaS platform</span>
              </h1>
              <p className={styles.subtitle}>
                DeckIO started as an open-source engine. Then teams wanted collaboration, sharing, and publishing — a full SaaS. One agent wasn't enough anymore.
              </p>
            </div>

            <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.cardIcon}>📦</div>
                <div>
                  <h3>The npm package</h3>
                  <p>A slide engine that runs locally. One dev, one agent, fast iterations.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>🚀</div>
                <div>
                  <h3>The growth problem</h3>
                  <p>Users want auth, real-time collab, publishing, billing. Too much for a single agent.</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardIcon}>👥</div>
                <div>
                  <h3>The solution: a team</h3>
                  <p>Frontend, backend, tester, devrel — each with their own skills, memory, and scope.</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.squadIntro}>
              <div className={styles.squadHeader}>
                <span className={styles.squadLogo}>⚡</span>
                <div>
                  <h2>Meet <span className={styles.highlight}>Squad</span></h2>
                  <p className={styles.squadTag}>Multi-agent orchestration framework</p>
                </div>
              </div>
              <p className={styles.squadDesc}>
                Describe what you're building. Get a team of specialists that live in your repo. Agents fan out, build in parallel, and land PRs in minutes.
              </p>
              <div className={styles.squadFeatures}>
                <div className={styles.squadFeature}>
                  <span>🧠</span>
                  <span>Persistent team memory</span>
                </div>
                <div className={styles.squadFeature}>
                  <span>🔀</span>
                  <span>Parallel execution</span>
                </div>
                <div className={styles.squadFeature}>
                  <span>🐙</span>
                  <span>GitHub-native</span>
                </div>
                <div className={styles.squadFeature}>
                  <span>🛡️</span>
                  <span>Built-in governance</span>
                </div>
              </div>
              <code className={styles.installCmd}>npm i -g @bradygaster/squad-cli</code>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
