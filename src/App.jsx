import { useEffect } from 'react'
import { Navigation, SlideProvider, useSlides } from '@deckio/deck-engine'
import project from '../deck.config.js'
import copilotLogo from './data/copilot-mascot.png'
import mascotCat from './data/mascot-cat.png'
import mascotRobot from './data/mascot-robot.png'
import mascotDuck from './data/mascot-duck.png'

function FloatingCopilotLogo() {
  const { current } = useSlides()
  const lastSlide = project.slides.length - 1
  if (current < 2 || current === lastSlide) return null
  return <img src={copilotLogo} alt="GitHub Copilot" className="floating-copilot-logo" />
}

function ThankYouMascots() {
  const { current } = useSlides()
  const lastSlide = project.slides.length - 1
  if (current !== lastSlide) return null
  return (
    <div className="thankyou-mascots">
      <img src={mascotCat} alt="" className="mascot m1" />
      <img src={mascotRobot} alt="" className="mascot m2" />
      <img src={mascotDuck} alt="" className="mascot m3" />
    </div>
  )
}

export default function App() {
  const { accent, id, slides, theme, title } = project

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
    document.title = title
  }, [accent, title])

  return (
    <SlideProvider totalSlides={slides.length} project={id} slides={slides} theme={theme}>
      <Navigation />
      <div className="deck" data-project-id={id}>
        {slides.map((SlideComponent, index) => (
          <SlideComponent key={`${id}-slide-${index}`} index={index} project={project} />
        ))}
      </div>
      <FloatingCopilotLogo />
      <ThankYouMascots />
    </SlideProvider>
  )
}
