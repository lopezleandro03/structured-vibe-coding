import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './SquadSlide.module.css'

const agents = [
  { icon: '🎨', name: 'Frontend', scope: 'React components, themes, animations' },
  { icon: '⚙️', name: 'Backend', scope: 'APIs, auth, real-time, billing' },
  { icon: '🧪', name: 'Tester', scope: 'E2E, integration, coverage gates' },
  { icon: '🚀', name: 'DevOps', scope: 'CI/CD, infra, deployments' },
  { icon: '📣', name: 'DevRel', scope: 'Docs, examples, changelog' },
]

export default function SquadSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <p className={styles.eyebrow}>The Solution</p>
        <h1>
          I didn't hire.<br />
          I <span className={styles.highlight}>scaled the squad.</span>
        </h1>
        <p className={styles.subtitle}>
          One agent per module. Each with its own charter, context, and expertise.
          They don't share a brain — they own their domain.
        </p>

        <div className={styles.agents}>
          {agents.map((a) => (
            <div key={a.name} className={styles.agentCard}>
              <span className={styles.agentIcon}>{a.icon}</span>
              <h3>{a.name}</h3>
              <p>{a.scope}</p>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="Structured Vibe Coding with a Team of Agents" />
    </Slide>
  )
}
