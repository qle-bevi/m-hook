import { StackNavigator } from 'react-navigation'

import HomeScreen from '@containers/HomeScreen'
import ConfigScreen from '@components/ConfigScreen'
import RdAccountsScreen from '@containers/RdAccountsScreen'
import DevicesScreen from '@containers/DevicesScreen'

const MainNavigation = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Config: {
    screen: ConfigScreen
  },
  RdAccounts: {
    screen: RdAccountsScreen
  },
  Devices: {
    screen: DevicesScreen
  }
}, {
  navigationOptions: {
    headerTintColor: '#353535',
    headerStyle : {
      backgroundColor: '#f7f7f7'
    },
  }
})

export default MainNavigation
