import {
  GET_MORE_IMAGES,
  INCREMENT_PAGE,
  SET_IMAGE
} from '../../constants'

export function getMoreImages() {
  return { type: GET_MORE_IMAGES }
}

export function incrementPage() {
  return { type: INCREMENT_PAGE }
}

export function setImage(payload) {
  return { type: SET_IMAGE, payload }
}
