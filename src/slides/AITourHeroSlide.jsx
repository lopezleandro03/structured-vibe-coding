import { Slide } from '@deckio/deck-engine'
import heroImg from '../data/ai-tour-hero.png'
import styles from './AITourHeroSlide.module.css'

export default function AITourHeroSlide({ index }) {
  return (
    <Slide index={index} className={styles.hero}>
      <img src={heroImg} alt="Microsoft AI Tour" className={styles.image} />
    </Slide>
  )
}
