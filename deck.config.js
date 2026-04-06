import CoverSlide from './src/slides/CoverSlide.jsx'
import KarpathyOrigin from './src/slides/KarpathyOrigin.jsx'
import VibeCodingLimits from './src/slides/VibeCodingLimits.jsx'
import AgenticDivider from './src/slides/AgenticDivider.jsx'
import CustomInstructions from './src/slides/CustomInstructions.jsx'
import AgentsMdSlide from './src/slides/AgentsMdSlide.jsx'
import SkillsAndPlans from './src/slides/SkillsAndPlans.jsx'
import SquadSlide from './src/slides/SquadSlide.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'

export default {
  private: false,
  id: 'structured-vibe-coding',
  title: 'From Vibe Coding to Agentic Engineering',
  subtitle: 'Vibes → Structure → Squad',
  description: 'How a tweet became a movement — and how to evolve from vibe coding to orchestrating teams of GitHub agents.',
  icon: '🎪',
  accent: '#7c0303',
  theme: 'dark',
  appearance: 'dark',
  order: 1,
  slides: [
    CoverSlide,
    KarpathyOrigin,
    VibeCodingLimits,
    AgenticDivider,
    CustomInstructions,
    AgentsMdSlide,
    SkillsAndPlans,
    SquadSlide,
    ThankYouSlide,
  ],
}
