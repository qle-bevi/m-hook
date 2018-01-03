import React from 'react'
import { Provider, connect } from 'react-redux'
import { StyleSheet, Text, View, ScrollView, Picker } from 'react-native'

import store from './app/store'
import { addDevice } from './app/actions/devicesActions'
import lookupDevices from './app/lookupDevices'
import MainNavigation from './app/MainNavigation'

lookupDevices(10000, (descURI, address) => {
  store.dispatch(addDevice(descURI, address))
})

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View style={{ flex: 1, paddingTop: 23 }}>
          <MainNavigation />
        </View>
      </Provider>
    )
  }
}
