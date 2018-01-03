import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { List, ListItem, Card, FormInput, FormLabel, Button } from 'react-native-elements'

class RdAccountsScreen extends Component {
  static navigationOptions = {
    title: 'Comptes RealDebrid'
  }

  state = {
    tokenInputValue: ''
  }

  onNewAccountSubmit() {
    this.props.fetchAccount(this.state.tokenInputValue).then(
      () => this.setState({ tokenInputValue: '' })
    )
  }

  render() {
    const { accounts } = this.props

    return (
      <View style={{flex:1}}>
        <ScrollView>
          <List containerStyle={{ borderTopWidth: 0 }}>
            {
              accounts.map((account, index) => {
                return (
                  <ListItem
                    key={ index }
                    wrapperStyle={{paddingTop: 5, paddingBottom:5, paddingRight: 10}}
                    titleStyle={{fontSize:15}}
                    title={account.username}
                    avatar={{uri:account.avatar}}
                    avatarContainerStyle={{marginTop: 3, marginLeft: 10, marginRight: 20}}
                    avatarOverlayContainerStyle={{backgroundColor: 'white'}}
                    hideChevron={true}
                    switchButton={true}
                    switched={account.selected}
                    switchOnTintColor="#ffb7cb"
                    switchThumbTintColor="#ff004c"
                    onSwitch={() => this.props.selectAccount(account.id)}
                    subtitle={account.email}
                    onPress={() => navigation.navigate('RdAccounts')}
                  />
                )
              })
            }
          </List>
          <Card title="AJOUTER UN COMPTE">
            <FormLabel>Token RealDebrid</FormLabel>
            <FormInput
              onChangeText={tokenInputValue => this.setState({ tokenInputValue })}
              value={this.state.tokenInputValue}
              onSubmitEditing={this.onNewAccountSubmit.bind(this)}
            />
            <Button
              small
              iconLeft
              buttonStyle={{backgroundColor: 'white', borderWidth: 1, borderColor: "#ff004c"}}
              color="#ff004c"
              icon={{name:"plus-square", type:"feather", color:"#ff004c"}}
              onPress={this.onNewAccountSubmit.bind(this)}
              title='AJOUTER' />
          </Card>
        </ScrollView>
      </View>
    )
  }
}

export default RdAccountsScreen
