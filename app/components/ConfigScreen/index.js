import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { List, ListItem } from 'react-native-elements'

const ConfigScreen = ({ navigation }) => (
  <View style={{flex:1}}>
    <ScrollView style={{flex:1}}>
      <List containerStyle={{ borderTopWidth: 0 }}>
        <ListItem
          wrapperStyle={{paddingTop: 5, paddingBottom:5, paddingRight: 10}}
          titleStyle={{fontSize:15}}
          title="Comptes RealDebrid"
          leftIcon={{name:"user", type:"feather", color:"#ff004c", style: {fontSize: 30, marginLeft: 10, marginRight: 20}}}
          chevronColor="#ff004c"
          chevronStyle={{marginRight:20}}
          subtitle="Séléctionnez le compte à utilisé"
          onPress={() => navigation.navigate('RdAccounts')}
        />
        <ListItem
          wrapperStyle={{paddingTop: 5, paddingBottom:5, paddingRight: 10}}
          titleStyle={{fontSize:15}}
          title="Périphériques"
          leftIcon={{name:"tv", type:"feather", color:"#ff004c", style: {fontSize: 30, marginLeft: 10, marginRight: 20}}}
          chevronColor="#ff004c"
          chevronStyle={{marginRight:10}}
          subtitle="Séléctionnez le périphérqiue à utilisé"
          onPress={() => navigation.navigate('Devices')}
        />
      </List>
    </ScrollView>
  </View>
)

ConfigScreen.navigationOptions = {
  title: 'Configuration'
}

export default ConfigScreen
