import React from 'react'
import { SearchBar as RNSearchBar } from 'react-native-elements'

const SearchBar = () => (
  <RNSearchBar
    platform="android"
    onChangeText={text => this.setState({ text })}
    onClearText={() => this.setState({ text: '' })}
    placeholder="Type Here..."
  />
)

export default SearchBar
