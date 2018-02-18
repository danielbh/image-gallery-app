import React, { Component } from 'react'
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import PhotoGrid from './PhotoGrid'
import { selectImageData } from './selectors'
import { getMoreImages, incrementPage } from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class InfinitePhotoGrid extends Component {
  renderItem(item, itemSize) {
    return (
      <TouchableOpacity
        key={item.id}
        style={{ width: itemSize, height: itemSize }}
        onPress={() => { }}
      >
        <Image
          resizeMode="cover"
          style={{ flex: 1 }}
          source={{ uri: item.src }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.props.images.length ?
            <PhotoGrid
              data={this.props.images}
              itemsPerRow={3}
              itemMargin={1}
              renderItem={this.renderItem}
              loadMoreContentAsync={this.props.loadMoreImages}
            /> : <Text>Please enter a search query</Text>
        }
      </View>
    )
  }
}

InfinitePhotoGrid.propTypes = {
  images: PropTypes.array
}

InfinitePhotoGrid.defaultProps = {
  images: []
}

const mapState = (({ images }) => ({
  images: selectImageData(images.items)
}))

const mapDispatch = (dispatch => ({
  loadMoreImages() {
    dispatch(getMoreImages())
  }
}))

export default connect(mapState, mapDispatch)(InfinitePhotoGrid)
