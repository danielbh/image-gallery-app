import axios from 'axios'
import config from '../../config'

/**
 * @param {String} query search query
 * @param {Integer} page current page, used for pagination
 */
function getImages(query, page = 1) {
  return axios
    .post(`https://pixabay.com/api/?key=${config.PIXABAY_API_KEY}&q=${query}&page=${page}`)
    .then(res => res.data.hits)
}

export default {
  getImages
}
