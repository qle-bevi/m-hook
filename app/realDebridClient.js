const API_ENDPOINT = 'https://api.real-debrid.com/rest/1.0/'

let authorizationToken = null 

export const setAuthorizationToken = (token) => {
  authorizationToken = token
}

const request = (url, body = null, method = 'GET') => {
  let config = {
    method,
    headers: {
      'Content-Type': 'application/ x-www-form-urlencoded',
      'Authorization': `Bearer ${authorizationToken}` 
    },
    mode: 'cors',
    cache: 'default'
  }

  if (body) {
    config.body = encodeURIComponent(body)
  }

  return fetch(`${API_ENDPOINT}${url}`, config).then(response => {
    return response.json().then(data => {
      if (!response.ok) {
        throw new Error(data.error)
      }
      
      return data
    })
  }).catch(error => {
    if (error.message === 'Network request failed') {
      error.message = 'RealDebrid ne répond pas !\nVérifiez votre connexion à internet.'
    }
    throw error
  })
}

export const getUser = () => request('user')
