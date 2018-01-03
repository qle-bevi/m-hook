import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import { Icon, Button } from 'react-native-elements'

export default class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: 'mHook',
    headerRight: (
      <Icon
        name="settings"
        containerStyle={{marginRight: 20}}
        onPress={() => navigation.navigate('Config')}
      />
    )
  })

  state = {
    searchQuery: ''
  }

  search () {
    console.log('TEST')
  }

  render() {
    return (
      <View style={{flex: 1, padding: 10}}>
          <Button
              large
              iconLeft
              buttonStyle={{backgroundColor: 'white', borderWidth: 1, borderColor: "#ff004c"}}
              color="#ff004c"
              icon={{name:"play", type:"feather", color:"#ff004c"}}
              onPress={() => this.props.playMedia('http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')}
              title='PLAY' />
      </View>
    )
  }
}
