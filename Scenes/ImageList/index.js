import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { InfiniteImageGrid } from '../../Containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

export default class ImageList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InfiniteImageGrid />
      </View>
    )
  }
}
