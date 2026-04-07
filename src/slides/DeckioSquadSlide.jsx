import { BottomBar, Slide } from '@deckio/deck-engine'
import squadScreenshot from '../data/deckio-squad-screenshot.png'
import styles from './DeckioSquadSlide.module.css'

export default function DeckioSquadSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.columns}>
          <div className={styles.left}>
            <div>
              <p className={styles.eyebrow}>In Practice</p>
              <h1>
                The DeckIO <span className={styles.highlight}>Squad</span>
              </h1>
              <p className={styles.subtitle}>A real team of 9 agents — each owning a module, guided by a Coach who watches the game and optimizes the roster.</p>
            </div>

            <div className={styles.roster}>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#f59e0b' }} />
                <strong>Cuti</strong> <span className={styles.roleName}>Product Owner — deck-gateway</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#ef4444' }} />
                <strong>Depaul</strong> <span className={styles.roleName}>Code Expert + Test Lead</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#a855f7' }} />
                <strong>Dibu</strong> <span className={styles.roleName}>QA &amp; Testing Specialist</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#3b82f6' }} />
                <strong>Enzo</strong> <span className={styles.roleName}>Product Owner — deck-saas-core</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#22c55e' }} />
                <strong>Julian</strong> <span className={styles.roleName}>Product Owner — deck-workspace</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#06b6d4' }} />
                <strong>Lautaro</strong> <span className={styles.roleName}>Infra &amp; DevOps</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#ec4899' }} />
                <strong>Messi</strong> <span className={styles.roleName}>Product Owner — deck-engine</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#f97316' }} />
                <strong>Scaloni</strong> <span className={styles.roleName}>Coach — Team Optimization</span>
              </div>
              <div className={styles.rosterItem}>
                <span className={styles.roleColor} style={{ background: '#6b7280' }} />
                <strong>Ralph</strong> <span className={styles.roleName}>Work Monitor</span>
              </div>
            </div>

            <div className={styles.skillTags}>
              <span className={styles.skillTag}>impeccable-ux</span>
              <span className={styles.skillTag}>playwright-testing</span>
              <span className={styles.skillTag}>ux-audit</span>
              <span className={styles.skillTag}>ux-critique</span>
              <span className={styles.skillTag}>ux-polish</span>
            </div>
          </div>

          <div className={styles.screenshotWrapper}>
            <img src={squadScreenshot} alt="DeckIO Squad in VS Code" className={styles.screenshot} />
          </div>
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
