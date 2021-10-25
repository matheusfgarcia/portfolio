import { combineReducers } from 'redux';
import { cardReducer } from './card'
import { pageReducer } from './page'

export const rootReducer = combineReducers({
    card: cardReducer,
    page: pageReducer
})