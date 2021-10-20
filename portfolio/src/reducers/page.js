import * as types from '../actions'

export const initialState = {
  active: null,
}

export const pageReducer = (state = initialState, action) => {
  
  let response = action.payload;

  switch (action.type) {
    case types.ACTIVE_PAGE:
      return { ...state, active: response}
    default:
      return state
  }

}