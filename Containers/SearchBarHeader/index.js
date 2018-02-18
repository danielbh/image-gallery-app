import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import SearchBar from './SearchBar'
import { getImages, setSearchQuery, clearQuery } from './actions'

// eslint-disable-next-line no-shadow
const SearchBarHeader = ({ sendQuery, clearQuery, query }) => (
  <SearchBar
    value={query}
    onChangeText={sendQuery}
    onClearText={clearQuery}
  />
)

SearchBarHeader.propTypes = {
  sendQuery: PropTypes.func.isRequired,
  clearQuery: PropTypes.func.isRequired,
  query: PropTypes.string
}

SearchBarHeader.defaultProps = {
  query: ''
}

const mapDispatch = (dispatch => ({
  sendQuery(query) {
    if (query.length) {
      dispatch(setSearchQuery(query))
      dispatch(getImages(query))
    } else {
      dispatch(clearQuery())
    }
  },
  clearQuery() {
    dispatch(clearQuery())
  }
}))

const mapState = (({ images }) => ({
  query: images.query
}))

export default connect(mapState, mapDispatch)(SearchBarHeader)
