import React from 'react'
import { View } from 'react-native'
import { SearchBar as RNSearchBar } from 'react-native-elements'

const SearchBar = () => (
  <View>
    <RNSearchBar
      lightTheme
      platform="ios"
      onChangeText={text => this.setState({ text })}
      onClearText={() => this.setState({ text: '' })}
      placeholder="Type Here..."
    />
  </View>
)

export default SearchBar
