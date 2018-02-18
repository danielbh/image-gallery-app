import { put, takeLatest, all, call } from 'redux-saga/effects'
import {
  GET_MORE_IMAGES,
  RECEIEVE_MORE_IMAGES,
  ERROR_RECEIVING_MORE_IMAGES
} from '../../constants'

import { imagesAPI } from '../../api'

function* getMoreImages() {
  try {
    const images = yield call(imagesAPI.getImages)
    yield put({ type: RECEIEVE_MORE_IMAGES, items: images })
  } catch (error) {
    yield put({ type: ERROR_RECEIVING_MORE_IMAGES, error })
  }
}

export default function* getMoreImagesSaga() {
  yield all([
    takeLatest(GET_MORE_IMAGES, getMoreImages),
  ])
}
