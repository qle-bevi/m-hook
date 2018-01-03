import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const DevicesScreen = ({ devices, selectDevice, navigation }) => (
  <View style={{flex:1}}>
    <ScrollView>
      <List containerStyle={{ borderTopWidth: 0 }}>
        {
          devices.map((device, index) => {
            return (
              <ListItem
                key={ index }
                wrapperStyle={{paddingTop: 5, paddingBottom:5, paddingRight: 10}}
                titleStyle={{fontSize:15}}
                title={device.friendlyName}
                avatar={{uri:device.icon.url}}
                avatarContainerStyle={{marginTop: 2.5, marginLeft: 10, marginRight: 20}}
                avatarOverlayContainerStyle={{backgroundColor: 'white'}}
                hideChevron={true}
                switchButton={true}
                switched={device.selected}
                switchOnTintColor="#ffb7cb"
                switchThumbTintColor="#ff004c"
                onSwitch={() => selectDevice(device.UDN)}
                subtitle={device.address}
                onPress={() => navigation.navigate('RdAccounts')}
              />
            )
          })
        }
      </List>
    </ScrollView>
  </View>
)

DevicesScreen.navigationOptions = {
  title: 'Périphériques'
}

export default DevicesScreen
