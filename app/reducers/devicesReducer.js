import * as ACTIONS from '../actions/devicesActions'

export default (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADD_DEVICE:
      return [...state, { ...action.device }]
    case ACTIONS.SELECT_DEVICE:
      return state.map((device) => {
          device.selected = device.UDN === action.UDN
          return device
      })
    default:
      return state;
  }
}
