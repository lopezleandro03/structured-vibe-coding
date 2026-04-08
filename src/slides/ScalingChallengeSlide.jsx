import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './ScalingChallengeSlide.module.css'

const demands = [
  { icon: '👥', label: 'Collaboration' },
  { icon: '🔗', label: 'Sharing' },
  { icon: '🚀', label: 'Publishing' },
  { icon: '💳', label: 'Billing' },
  { icon: '🔐', label: 'Auth & SSO' },
  { icon: '📊', label: 'Analytics' },
]

export default function ScalingChallengeSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />

      <div className={`${styles.body} content-frame content-gutter`}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>The Challenge</span>
          <h2 className={styles.title}>
            From npm package to{' '}
            <span className={styles.accent}>SaaS platform</span>
          </h2>
        </div>

        <p className={styles.subtitle}>
          DECKIO started as an open-source engine. Then teams wanted
          collaboration, sharing, and publishing — a full SaaS.
          One agent wasn't enough anymore.
        </p>

        <div className={styles.grid}>
          {demands.map((d) => (
            <div key={d.label} className={styles.demandCard}>
              <span className={styles.demandIcon}>{d.icon}</span>
              <span className={styles.demandLabel}>{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
