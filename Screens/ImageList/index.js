import React, { Component } from 'react'
import {
  StyleSheet,
  View,
} from 'react-native'
import { connect } from 'react-redux'
import { InfiniteImageGrid } from '../../Containers'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

class ImageList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <InfiniteImageGrid />
      </View>
    )
  }
}

const mapState = ({ orientation }) => ({
  isPortrait: orientation.isPortrait
})

export default connect(mapState)(ImageList)
