import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchAccount, selectAccount } from '../actions/realDebridActions'

import RdAccountsScreen from '@components/RdAccountsScreen'

const mapStateToProps = ({
  realDebrid: {
    accounts
  }
}) => ({
  accounts
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchAccount,
    selectAccount
  }, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(RdAccountsScreen)
