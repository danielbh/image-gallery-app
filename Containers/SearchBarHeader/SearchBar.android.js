import React from 'react'
import PropTypes from 'prop-types'
import { SearchBar as RNSearchBar } from 'react-native-elements'

const SearchBar = ({ onChangeText, onClearText, value }) => (
  <RNSearchBar
    platform="android"
    onChangeText={onChangeText}
    onClearText={onClearText}
    value={value}
    placeholder="Type Here..."
  />
)

SearchBar.propTypes = {
  onChangeText: PropTypes.func.isRequired,
  onClearText: PropTypes.func.isRequired,
  value: PropTypes.string
}

SearchBar.defaultProps = {
  value: ''
}

export default SearchBar
