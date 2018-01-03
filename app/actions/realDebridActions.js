import { Alert } from 'react-native'

import * as rdClient from '../realDebridClient'

export const ADD_ACCOUNT = 'ADD_ACCOUNT'
export const SET_FETCHING = 'SET_FETCHING'
export const SELECT_ACCOUNT = 'SELECT_ACCOUNT'

const handleError = (error, dispatch) => dispatch(alertError(error))

export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  account
})

export const setFectching = (value) => ({
  type: SET_FETCHING,
  value
})

export const alertError = (error) => (dispatch) => {
  Alert.alert(
    'Erreur !',
    `${error.message}`,
    [{
      text: 'OK',
      onPress: () => dispatch(setFectching(false))
    }],
    { cancelable: false }
  )
}

export const fetchAccount = (token) => (dispatch, getState) => {
  const { realDebrid: { accounts } } = getState()
  const oldAccount = accounts.find(account => account.token === token)
  if (oldAccount) {
    return Alert.alert(
      'Erreur !',
      `Ce compte a déjà été ajouté! (${oldAccount.username})`,
      [{text: 'OK'}],
      { cancelable: false }
    )
  }

  dispatch(setFectching(true))
  rdClient.setAuthorizationToken(token)
  return rdClient.getUser().then(
    account => {
      return dispatch(
        addAccount({
          ...account,
          selected: !accounts.length
        })
      )
    }
  ).catch(error => {
    rdClient.setAuthorizationToken(null)
    handleError(error, dispatch)
  })
}

export const selectAccount = (id) => ({
  type: SELECT_ACCOUNT,
  id
})
