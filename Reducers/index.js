import { combineReducers } from 'redux'
import imagesReducer from './imagesReducer'
import setImageReducer from './setImageReducer'

export default combineReducers({
  images: imagesReducer,
  currentImage: setImageReducer
})
