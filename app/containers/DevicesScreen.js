import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { selectDevice } from '../actions/devicesActions'

import DevicesScreen from '@components/DevicesScreen'

const mapStateToProps = ({ devices }) => ({
  devices
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ selectDevice }, dispatch) 

export default connect(mapStateToProps, mapDispatchToProps)(DevicesScreen)
