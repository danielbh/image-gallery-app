import React, { Component } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import PhotoGrid from './PhotoGrid'

class InfinitePhotoGrid extends Component {
  constructor() {
    super()
    this.state = { items: [] }
    this.loadMoreContent = this.loadMoreContent.bind(this)
  }

  componentDidMount() {
    this.setState({ items: this.generateImages(60) })
  }

  generateImages(n) {
    return Array(...Array(n)).map((v, i) => (
      { id: i, src: `http://placehold.it/200x200?text=${i + 1}` }
    ))
  }

  async loadMoreContent() {
    this.setState({ items: this.state.items.concat(this.generateImages(40)) })
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
        loadMoreContentAsync={this.loadMoreContent}
      />
    )
  }
}

export default InfinitePhotoGrid
