import CoverSlide from './src/slides/CoverSlide.jsx'
import WhatIsVibeCoding from './src/slides/WhatIsVibeCoding.jsx'
import TheProblem from './src/slides/TheProblem.jsx'
import StructuredApproach from './src/slides/StructuredApproach.jsx'
import AgentTeams from './src/slides/AgentTeams.jsx'
import AgentsInAction from './src/slides/AgentsInAction.jsx'
import BestPractices from './src/slides/BestPractices.jsx'
import { GenericThankYouSlide as ThankYouSlide } from '@deckio/deck-engine'

export default {
  private: true,
  id: 'structured-vibe-coding',
  title: 'Structured vibe coding with teams of GitHub agents',
  subtitle: 'Agentic Engineering',
  description: 'Agentic Engineering',
  icon: '🎪',
  accent: '#7c0303',
  theme: 'dark',
  appearance: 'dark',
  order: 1,
  slides: [
    CoverSlide,
    WhatIsVibeCoding,
    TheProblem,
    StructuredApproach,
    AgentTeams,
    AgentsInAction,
    BestPractices,
    ThankYouSlide,
  ],
}
