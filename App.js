import React from 'react'
import { Provider } from 'react-redux'
import Navigation from './Navigation'
import configureStore from './store'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
)

export default App

