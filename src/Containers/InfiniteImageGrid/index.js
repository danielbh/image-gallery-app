import React, { Component } from 'react'
import {
  Image,
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { withNavigation } from 'react-navigation'
import ImageGrid from 'react-native-image-grid'
import { selectImageData } from './selectors'
import { getMoreImages, setImage } from './actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  well: {
    fontSize: 23,
    marginTop: 100,
    fontStyle: 'italic',
    color: 'darkgray'
  }
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
    src,
    fullSizeImage
  }) {
    this.props.setImage({
      user,
      tags,
      imageHeight,
      imageWidth,
      src,
      fullSizeImage
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
              itemsPerRow={this.props.isPortrait ? 3 : 6}
              onItemTouch={this.goToImageDetails}
              renderItem={this.renderItem}
              loadMoreContentAsync={this.props.loadMoreImages}
              deviceWidth={this.props.deviceWidth}
            /> :
            <Text style={styles.well}>Search for beautiful images...</Text>
        }
      </View>
    )
  }
}

InfiniteImageGrid.propTypes = {
  images: PropTypes.array,
  setImage: PropTypes.func.isRequired,
  loadMoreImages: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
  deviceWidth: PropTypes.number.isRequired,
  isPortrait: PropTypes.bool.isRequired
}

InfiniteImageGrid.defaultProps = {
  images: []
}

const mapState = (({ images, orientation }) => ({
  images: selectImageData(images.items),
  deviceWidth: orientation.deviceWidth,
  isPortrait: orientation.isPortrait
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
