import React from 'react'
import { StackNavigator } from 'react-navigation'
import { ImageDetails, ImageList } from './Scenes'
import { Header, SearchBarHeader } from './Components'

const RootNavigator = StackNavigator({
  ImageList: {
    screen: ImageList,
    navigationOptions: {
      headerTitle: <SearchBarHeader />
    }
  },
  ImageDetails: {
    screen: ImageDetails,
    navigationOptions: {
      headerTitle: <Header title="Image Details" />
    }
  }
})

export default RootNavigator

