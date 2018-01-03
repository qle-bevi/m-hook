import { combineReducers } from 'redux'

import {
  ADD_ACCOUNT,
  FETCHING_ACCOUNT,
  SELECT_ACCOUNT
} from '../actions/realDebridActions'

const account = (state = { selected: false }, action) => {
  switch(action.type) {
    case ADD_ACCOUNT:
      return { ...state, ...action.account }
    default:
      return state
  }
}

const accounts = (state = [], action) => {
  switch(action.type) {
    case ADD_ACCOUNT:
      return [...state, account(null, action)]
    case SELECT_ACCOUNT:
      return state.map((account) => {
        account.selected = action.id === account.id
        return account
      })
    default:
      return state
  }
}

const fetching = (state = false, action) => {
  switch(action.type) {
    case FETCHING_ACCOUNT:
      return true;
    case ADD_ACCOUNT:
      return false;
    default:
      return state;
  }
}

export default combineReducers({
  accounts,
  fetching
})
