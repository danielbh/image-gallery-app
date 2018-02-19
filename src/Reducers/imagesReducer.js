import {
  RECEIEVE_IMAGES,
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY,
  RECEIEVE_MORE_IMAGES,
  INCREMENT_PAGE
} from '../../constants'

const imagesReducer = (
  state = { items: [], query: '', page: 1 },
  action
) => {
  switch (action.type) {
    case RECEIEVE_IMAGES:
      return { ...state, items: action.items }
    case SET_SEARCH_QUERY:
      return { ...state, query: action.query }
    case RECEIEVE_MORE_IMAGES:
      return { ...state, items: state.items.concat(action.items) }
    case CLEAR_SEARCH_QUERY:
      return { query: '', items: [], page: 1 }
    case INCREMENT_PAGE:
      return { ...state, page: state.page + 1 }
    default:
      return state
  }
}

export default imagesReducer
