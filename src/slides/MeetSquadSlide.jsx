import { BottomBar, Slide } from '@deckio/deck-engine'
import squadLogo from '../data/squad-logo.png'
import styles from './MeetSquadSlide.module.css'

export default function MeetSquadSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <img src={squadLogo} alt="Squad logo" className={styles.logo} />

            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Alpha — Rapidly evolving
            </div>

            <h1>
              Your AI<br />
              <span className={styles.highlight}>Development</span><br />
              <span className={styles.highlight}>Team</span>
            </h1>

            <p className={styles.subtitle}>
              Describe what you're building. Get a team of specialists that live in your repo. Agents fan out, build in parallel, and land pull requests in minutes.
            </p>

            <code className={styles.installCmd}>npm i -g @bradygaster/squad-cli</code>
          </div>

          <div className={styles.right}>
            <div className={styles.terminal}>
              <div className={styles.termHeader}>
                <span className={styles.dot} style={{ background: '#ff5f57' }} />
                <span className={styles.dot} style={{ background: '#febc2e' }} />
                <span className={styles.dot} style={{ background: '#28c840' }} />
                <span className={styles.termTitle}>Copilot Chat</span>
              </div>
              <div className={styles.termBody}>
                <div className={styles.chatBlock}>
                  <span className={styles.chatLabel}>YOU</span>
                  <p className={styles.chatMsg}>Team, build the recipe listing page. We need an API endpoint that returns recipes and a React component that displays them.</p>
                </div>
                <div className={styles.chatBlock}>
                  <span className={styles.chatLabel}>SQUAD RESPONSE</span>
                  <div className={styles.agentLine}><span className={styles.agentDot} style={{ background: '#f59e0b' }} /><strong>Flight</strong> — reviewing requirements, defining API contract</div>
                  <div className={styles.agentLine}><span className={styles.agentDot} style={{ background: '#a855f7' }} /><strong>EECOM</strong> — building RecipeList component</div>
                  <div className={styles.agentLine}><span className={styles.agentDot} style={{ background: '#ef4444' }} /><strong>CAPCOM</strong> — creating GET /api/recipes endpoint</div>
                  <div className={styles.agentLine}><span className={styles.agentDot} style={{ background: '#8b5cf6' }} /><strong>FIDO</strong> — writing test cases from requirements</div>
                  <div className={styles.agentLine}><span className={styles.agentDot} style={{ background: '#6b7280' }} /><strong>Scribe</strong> — logging decisions</div>
                </div>
                <div className={styles.statusLine}>
                  <span className={styles.statusDot} />
                  5 agents working in parallel…
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
