import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Dimensions } from 'react-native'
import Navigation from './Navigation'
import { CHANGE_ORIENTATION } from './constants'
import configureStore from './store'

const store = configureStore()

function createOrientationManager() {
  Dimensions.addEventListener('change', () => {
    const dim = Dimensions.get('screen')
    store.dispatch({
      type: CHANGE_ORIENTATION,
      isPortrait: dim.height >= dim.width,
      deviceWidth: Dimensions.get('window').width
    })
  })
}

class App extends Component {
  componentDidMount() {
    createOrientationManager()
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

export default App

