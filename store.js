import { createStore, applyMiddleware } from 'redux'
import freeze from 'redux-freeze'
import reducers from './Reducers'
// const sagaMiddleware = createSagaMiddleware()


export default function configureStore(initialState) {
  const middlewares = [
    freeze,
    // sagaMiddleware,
  ]

  const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
  )

  // store.runSaga = sagaMiddleware.run(
  //   function* mainSaga() {
  //     yield all([
  //     ])
  //   })
  return store
}
