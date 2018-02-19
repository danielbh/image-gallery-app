import {
  GET_IMAGES,
  SET_SEARCH_QUERY,
  CLEAR_SEARCH_QUERY
} from '../../../constants'

export function getImages(query) {
  return { type: GET_IMAGES, query }
}

export function setSearchQuery(query) {
  return { type: SET_SEARCH_QUERY, query }
}

export function clearQuery() {
  return { type: CLEAR_SEARCH_QUERY }
}
