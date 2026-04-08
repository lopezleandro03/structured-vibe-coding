import { BottomBar, Slide } from '@deckio/deck-engine'
import awesomeImg from '../data/awesome-copilot.png'
import styles from './AwesomeCopilotSlide.module.css'

export default function AwesomeCopilotSlide({ index, project }) {
  return (
    <Slide index={index} className={styles.awesomeCopilotSlide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <div className={`${styles.body} content-frame content-gutter`}>
        <img
          src={awesomeImg}
          alt="Awesome GitHub Copilot"
          className={styles.screenshot}
        />
      </div>
      <BottomBar text="From Vibe Coding to Agentic Engineering" />
    </Slide>
  )
}
