import { BottomBar, Slide } from '@deckio/deck-engine'
import styles from './UseCaseVideo.module.css'
import videoSrc from '../../.github/attachments/attach-deckio-intro-1775550503524.mp4'

export default function UseCaseVideo({ index, project }) {
  return (
    <Slide index={index} className={styles.useCaseVideo}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <h2 className={styles.title}>
          The use case we will use to learn Agentic Engineering Skills
        </h2>
        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            src={videoSrc}
            controls
            playsInline
          />
        </div>
      </div>
      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
