import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { SearchBar as RNSearchBar } from 'react-native-elements'

const SearchBar = ({ onChangeText, onClearText, value }) => (
  <View>
    <RNSearchBar
      lightTheme
      platform="ios"
      onChangeText={onChangeText}
      onClearText={onClearText}
      value={value}
      placeholder="Type Here..."
    />
  </View>
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
