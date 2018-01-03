import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { playMedia } from '../actions/devicesActions'

import HomeScreen from '@components/HomeScreen'

const mapDispatchToProps = (dispatch) => bindActionCreators({ playMedia }, dispatch) 

export default connect(null, mapDispatchToProps)(HomeScreen)
