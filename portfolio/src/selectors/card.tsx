import type { RootState } from '../store'

export const getCard = (state: RootState) => state.card

export const getCardState = (state: RootState) => getCard(state).isFlipped
