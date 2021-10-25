import * as types from '../actions'

export const initialState = {
  isFlipped: false,
}

export const cardReducer = (state = initialState, action: any) => {
  
  let response = action.payload;

  switch (action.type) {
    case types.FLIP_CARD:
      return { ...state, isFlipped: response}
    default:
      return state
  }

}