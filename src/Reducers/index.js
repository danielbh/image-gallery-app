import { combineReducers } from 'redux'
import imagesReducer from './imagesReducer'
import setImageReducer from './setImageReducer'
import orientationReducer from './orientationReducer'

export default combineReducers({
  images: imagesReducer,
  currentImage: setImageReducer,
  orientation: orientationReducer
})
