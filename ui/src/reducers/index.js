import { combineReducers } from 'redux'
const utils = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { showMenu: !state.showMenu }
    case 'UPDATE_UNIXTIME':
      return { unixtimeInput: action.text }
    case 'INCREMENT':
      return state
    case 'DECREMENT':
      return state
    default:
      return state
  }
}

const utilApp = combineReducers({
  utils
})

export default utilApp