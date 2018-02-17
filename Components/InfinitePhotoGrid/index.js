import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import PhotoGrid from 'react-native-photo-grid'

class InfinitePhotoGrid extends Component {
  constructor() {
    super()
    this.state = { items: [] }
  }

  componentDidMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text=' + (i + 1) }
    })
    this.setState({ items })
  }

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
      <PhotoGrid
        data={this.state.items}
        itemsPerRow={3}
        itemMargin={1}
        renderItem={this.renderItem}
      />
    )
  }
}

export default InfinitePhotoGrid
