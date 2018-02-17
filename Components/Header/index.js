import React from 'react'
import { Header as RNHeader } from 'react-native-elements'
import PropTypes from 'prop-types'

const Header = ({ title }) => (
  <RNHeader
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: title, style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />
)

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: ''
}

export default Header
