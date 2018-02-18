import React from 'react'
import { connect } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import PropTypes from 'prop-types'
import { ImageDetails, ImageList } from '../Screens'
import { SearchBarHeader } from '../Containers'

const PortraitNavigator = StackNavigator({
  ImageList: {
    screen: ImageList,
    navigationOptions: {
      headerTitle: <SearchBarHeader />
    }
  },
  ImageDetails: {
    screen: ImageDetails,
    navigationOptions: {
      headerTitle: 'Image Details'
    }
  }
})

const LandscapeNavigator = StackNavigator({
  ImageList: {
    screen: ImageList,
    navigationOptions: {
      header: null
    }
  },
  ImageDetails: {
    screen: ImageDetails,
    navigationOptions: {
      header: null
    }
  }
})

const Navigator = ({ isPortrait }) => (
  isPortrait ? <PortraitNavigator /> : <LandscapeNavigator />
)

Navigator.propTypes = {
  isPortrait: PropTypes.bool.isRequired
}

const mapState = ({ orientation }) => ({
  isPortrait: orientation.isPortrait
})

export default connect(mapState)(Navigator)

