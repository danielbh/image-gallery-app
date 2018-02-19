import React from 'react'
import { StackNavigator } from 'react-navigation'
import { ImageDetails, ImageList } from '../Screens'
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
      title: 'Image Details'
    }
  }
})

export default RootNavigator
