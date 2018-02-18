import {
  GET_MORE_IMAGES,
  INCREMENT_PAGE
} from '../../constants'

export function getMoreImages() {
  return { type: GET_MORE_IMAGES }
}

export function incrementPage() {
  return { type: INCREMENT_PAGE }
}
