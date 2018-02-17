import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class ImageList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput editable />
        <Text>Image List</Text>
        <Button
          onPress={
            () => this.props.navigation.navigate('ImageDetails')
          }
          title="Start Game"
        />
      </View>
    )
  }
}
