import React, { Component } from 'react'
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ImageGrid from './ImageGrid'
import { selectImageData } from './selectors'
import { getMoreImages, setImage } from './actions'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

class InfiniteImageGrid extends Component {

  constructor() {
    super()
    this.goToImageDetails = this.goToImageDetails.bind(this)
  }

  goToImageDetails({
    user,
    tags,
    imageHeight,
    imageWidth,
    src
  }) {
    this.props.setImage({
      user,
      tags,
      imageHeight,
      imageWidth,
      src
    })
    this.props.navigation.navigate('ImageDetails')
  }

  renderItem(item, itemSize, goToImageDetails) {
    return (
      <TouchableOpacity
        key={item.id}
        style={{ width: itemSize, height: itemSize }}
        onPress={() => goToImageDetails(item)}
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
            <ImageGrid
              data={this.props.images}
              itemsPerRow={3}
              itemMargin={1}
              onItemTouch={this.goToImageDetails}
              renderItem={this.renderItem}
              loadMoreContentAsync={this.props.loadMoreImages}
            /> : <Text>Please enter a search query</Text>
        }
      </View>
    )
  }
}

InfiniteImageGrid.propTypes = {
  images: PropTypes.array,
  setImage: PropTypes.func.isRequired
}

InfiniteImageGrid.defaultProps = {
  images: []
}

const mapState = (({ images }) => ({
  images: selectImageData(images.items)
}))

const mapDispatch = (dispatch => ({
  loadMoreImages() {
    dispatch(getMoreImages())
  },
  setImage(payload) {
    dispatch(setImage(payload))
  }
}))

export default withNavigation(connect(mapState, mapDispatch)(InfiniteImageGrid))
