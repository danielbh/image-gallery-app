import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const ImageDetails = ({
  user,
  tags,
  imageHeight,
  imageWidth,
  src
}) => (
  <View style={styles.container}>
    <Image
      style={{ width: 100, height: 100 }}
      source={{ uri: src }}
    />
    <Text>user: {user}</Text>
    <Text>tags: {tags}</Text>
    <Text>resolution: {`${imageWidth}x${imageHeight}`}</Text>
  </View>
)

ImageDetails.propTypes = {
  user: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired
}

const mapState = ({ currentImage }) => {
  const {
    user, tags, imageHeight, imageWidth, src
  } = currentImage

  return {
    user,
    tags,
    imageHeight,
    imageWidth,
    src
  }
}

export default connect(mapState)(ImageDetails)
