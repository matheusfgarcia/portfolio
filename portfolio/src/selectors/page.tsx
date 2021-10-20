import type { RootState } from '../store'

export const getActivePage = (state: RootState) => state.page.active
