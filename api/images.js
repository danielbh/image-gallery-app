import axios from 'axios'
import config from '../config'

function getImages(query) {
  return axios
    .post(`https://pixabay.com/api/?key=${config.PIXABAY_API_KEY}&q=${query}`)
    .then(res => res.data.hits)
}

export default {
  getImages
}
