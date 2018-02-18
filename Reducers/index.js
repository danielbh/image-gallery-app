import { combineReducers } from 'redux'
import imagesReducer from './imagesReducer'
import selectedImageReducer from './selectedImageReducer'

export default combineReducers({
  images: imagesReducer,
  selectedImage: selectedImageReducer
})
