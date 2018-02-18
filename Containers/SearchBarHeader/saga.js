import { put, takeLatest, all, call } from 'redux-saga/effects'
import {
  GET_IMAGES,
  RECEIEVE_IMAGES,
  ERROR_RECEIVING_IMAGES
} from '../../constants'

import { imagesAPI } from '../../api'

function* getImages({ query }) {
  try {
    const images = yield call(imagesAPI.getImages, query)
    yield put({ type: RECEIEVE_IMAGES, items: images })
  } catch (error) {
    yield put({ type: ERROR_RECEIVING_IMAGES, error })
  }
}

export default function* getImagesSaga() {
  yield all([
    takeLatest(GET_IMAGES, getImages),
  ])
}
