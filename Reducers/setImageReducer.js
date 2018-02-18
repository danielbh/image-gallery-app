import {
  UNSET_IMAGE,
  SET_IMAGE
} from '../constants'

const setImageReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return action.payload
    case UNSET_IMAGE:
      return {}
    default: return state
  }
}

export default setImageReducer
