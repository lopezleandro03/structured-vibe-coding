import AITourHeroSlide from './src/slides/AITourHeroSlide.jsx'
import CoverSlide from './src/slides/CoverSlide.jsx'
import KarpathyOrigin from './src/slides/KarpathyOrigin.jsx'
import VibeCodingLimits from './src/slides/VibeCodingLimits.jsx'
import AgenticDivider from './src/slides/AgenticDivider.jsx'
import SdlcInfographic from './src/slides/SdlcInfographic.jsx'
import UseCaseVideo from './src/slides/UseCaseVideo.jsx'
import CustomInstructions from './src/slides/CustomInstructions.jsx'
import AgentsMdSlide from './src/slides/AgentsMdSlide.jsx'
import SkillsAndPlans from './src/slides/SkillsAndPlans.jsx'
import AwesomeCopilotSlide from './src/slides/AwesomeCopilotSlide.jsx'
import SquadSlide from './src/slides/SquadSlide.jsx'
import Skill4Divider from './src/slides/Skill4Divider.jsx'
import MeetSquadSlide from './src/slides/MeetSquadSlide.jsx'
import SquadArchSlide from './src/slides/SquadArchSlide.jsx'
import DeckioSquadSlide from './src/slides/DeckioSquadSlide.jsx'
import ClosingSlide from './src/slides/ClosingSlide.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'

export default {
  private: false,
  id: 'structured-vibe-coding',
  title: 'From Vibe Coding to Agentic Engineering',
  subtitle: 'Vibes → Structure → Squad',
  description: 'How a tweet became a movement — and how to evolve from vibe coding to orchestrating teams of GitHub agents.',
  icon: '🎪',
  accent: '#10b981',
  theme: 'shadcn',
  designSystem: 'shadcn',
  appearance: 'dark',
  aurora: {
    palette: 'forest',
    colors: ["#10b981","#06b6d4","#3b82f6"],
  },
  order: 1,
  slides: [
    AITourHeroSlide,
    CoverSlide,
    KarpathyOrigin,
    VibeCodingLimits,
    AgenticDivider,
    SdlcInfographic,
    UseCaseVideo,
    AgentsMdSlide,
    CustomInstructions,
    SkillsAndPlans,
    AwesomeCopilotSlide,
    Skill4Divider,
    SquadSlide,
    MeetSquadSlide,
    SquadArchSlide,
    DeckioSquadSlide,
    ClosingSlide,
    ThankYouSlide,
  ],
}
