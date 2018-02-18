import {
  put,
  all,
  call,
  select,
  throttle
} from 'redux-saga/effects'

import {
  GET_MORE_IMAGES,
  RECEIEVE_MORE_IMAGES,
  ERROR_RECEIVING_MORE_IMAGES,
  INCREMENT_PAGE
} from '../../constants'

import { imagesAPI } from '../../api'

function* getMoreImages() {
  try {
    yield put({ type: INCREMENT_PAGE })
    const { page, query } = yield select(({ images }) => images)
    const images = yield call(imagesAPI.getImages, query, page)
    yield put({ type: RECEIEVE_MORE_IMAGES, items: images })
  } catch (error) {
    yield put({ type: ERROR_RECEIVING_MORE_IMAGES, error })
  }
}

export default function* getMoreImagesSaga() {
  yield all([
    // Gives a smooth infinite scroll effect where requests are handled
    // and not lost, at a rate that is reduced from if it was just
    // called normally.
    throttle(500, GET_MORE_IMAGES, getMoreImages),
  ])
}
