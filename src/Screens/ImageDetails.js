import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ParallaxView from 'react-native-parallax-view'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  description: {
    margin: 20,
  },
  heading: {
    fontSize: 25,
    marginBottom: 5,
    fontWeight: 'bold'
  },
  details: {
    fontSize: 20
  },
  section: {
    marginBottom: 10
  }
})

const ImageDetails = ({
  user,
  tags,
  imageHeight,
  imageWidth,
  src,
}) => {
  return (
    <ParallaxView style={styles.container} backgroundSource={{ uri: src }} >
      <View style={styles.description}>
        <View style={styles.section}>
          <Text style={styles.heading}>User:</Text>
          <Text style={styles.details}>{user}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Resolution:</Text>
          <Text style={styles.details}>{`${imageWidth}x${imageHeight}`}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.heading}>Tags:</Text>
          <Text style={styles.details}>{tags}</Text>
        </View>
      </View>
    </ParallaxView>
  )
}

ImageDetails.propTypes = {
  user: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageWidth: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
}

const mapState = ({ currentImage }) => {
  const {
    user, tags, imageHeight, imageWidth, fullSizeImage
  } = currentImage

  return {
    user,
    tags,
    imageHeight,
    imageWidth,
    src: fullSizeImage,
  }
}

export default connect(mapState)(ImageDetails)
