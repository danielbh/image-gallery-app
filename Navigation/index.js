import React from 'react'
import { StackNavigator } from 'react-navigation'
import { ImageDetails, ImageList } from '../Scenes'
import { SearchBarHeader } from '../Containers'

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
      headerTitle: 'Image Details'
    }
  }
})

export default RootNavigator

