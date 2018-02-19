import { Dimensions } from 'react-native'
import { CHANGE_ORIENTATION } from '../../constants'

const dim = Dimensions.get('screen')

const orientationReducer = (
  state = {
    isPortrait: dim.height >= dim.width,
    deviceWidth: Dimensions.get('window').width
  },
  action
) => {
  switch (action.type) {
    case CHANGE_ORIENTATION:
      return {
        ...state,
        isPortrait: action.isPortrait,
        deviceWidth: action.deviceWidth
      }
    default:
      return state
  }
}

export default orientationReducer
