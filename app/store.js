import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import devicesReducer from './reducers/devicesReducer'
import realDebridReducer from './reducers/realDebridReducer'

export default createStore(
  combineReducers({
    devices: devicesReducer,
    realDebrid: realDebridReducer
  }),
  applyMiddleware(thunk)
)
