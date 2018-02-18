import { createStore, applyMiddleware } from 'redux'
import { all, call } from 'redux-saga/effects'
import createSagaMiddleware from 'redux-saga'
import freeze from 'redux-freeze'
import getImagesSaga from './Containers/SearchBarHeader/saga'
import getMoreImagesSaga from './Containers/InfiniteImageGrid/saga'
import reducers from './Reducers'

const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState) {
  const middlewares = [
    freeze,
    sagaMiddleware,
  ]

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  )

  store.runSaga = sagaMiddleware.run(
    function* mainSaga() {
      yield all([
        call(getImagesSaga),
        call(getMoreImagesSaga),
      ])
    })
  return store
}
