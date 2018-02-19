import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { SearchBar as RNSearchBar } from 'react-native-elements'
import { Platform, View } from 'react-native'
// eslint-disable-next-line
import { getImages, setSearchQuery, clearQuery } from './actions'

const SearchBarHeader = ({
  // eslint-disable-next-line no-shadow
  sendQuery, clearQuery, query, isPortrait, deviceWidth
}) => (
    isPortrait ? (
      <View style={{ width: deviceWidth }} >
        <RNSearchBar
          width={deviceWidth}
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          onChangeText={sendQuery}
          onClearText={clearQuery}
          value={query}
          placeholder="Search for images"
        />
      </View>
    ) : null
  )

SearchBarHeader.propTypes = {
  sendQuery: PropTypes.func.isRequired,
  clearQuery: PropTypes.func.isRequired,
  isPortrait: PropTypes.bool.isRequired,
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
      // Clear images if no query
    } else {
      dispatch(clearQuery())
    }
  },
  clearQuery() {
    dispatch(clearQuery())
  }
}))

const mapState = (({ images, orientation }) => ({
  query: images.query,
  isPortrait: orientation.isPortrait,
  deviceWidth: orientation.deviceWidth
}))

export default connect(mapState, mapDispatch)(SearchBarHeader)
