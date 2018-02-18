import {
  RECEIEVE_IMAGES,
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY
} from '../constants'

const imagesReducer = (state = { items: [], query: '' }, action) => {
  switch (action.type) {
    case RECEIEVE_IMAGES:
      return { ...state, items: action.items }
    case SET_SEARCH_QUERY:
      return { ...state, query: action.query }
    case CLEAR_SEARCH_QUERY:
      return { query: '', items: [] }
    default:
      return state
  }
}

export default imagesReducer
