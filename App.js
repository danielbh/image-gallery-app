import { StackNavigator } from 'react-navigation'
import { ImageDetails, ImageList } from './Scenes'

const RootNavigator = StackNavigator({
  ImageList: {
    screen: ImageList,
    navigationOptions: {
      headerTitle: 'Images'
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

