import {CLICK} from '../actions/actions'

function reducer (state = [], action) {
  switch (action.type) {
    case CLICK:
      return state
    default:
      return state
  }
}

export default reducer
