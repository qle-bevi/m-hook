import request from '../AVTransportClient'
import { parseString } from 'react-native-xml2js'

export const ADD_DEVICE = 'ADD_DEVICE'
export const SELECT_DEVICE = 'SELECT_DEVICE'

export const addDevice = (descURI, address, port) => (dispatch, getState) => {
  if (getState().devices.find( device => device.descURI === descURI)) {
    return ;
  }
  fetch(descURI)
    .then(res => res.text())
    .then(str => {
      parseString(str, (err, res) => {
        let host = `http://${descURI.split('/')[2]}`
        let newDevice = res["root"]["device"][0]
        let icon = newDevice["iconList"][0]["icon"][0]
        let controlURL = newDevice["serviceList"][0]["service"][0]["controlURL"][0]
        controlURL = `${host}${controlURL}`

        let device = {
          UDN: newDevice["UDN"][0],
          host,
          friendlyName: newDevice["friendlyName"][0],
          descURI,
          icon: {
            height: icon["height"][0],
            width: icon["width"][0],
            url: `${host}${icon["url"][0]}`
          },
          selected: !getState().devices.length,
          controlURL
        }

        console.log(device)

        dispatch({
          type: ADD_DEVICE,
          device
        })
      })
    })
    .catch(console.error)
}

export const selectDevice = (UDN) => ({
  type: SELECT_DEVICE,
  UDN
})

export const playMedia = (url) => (dispatch, getState) => {
  const device = getState().devices.find(device => device.selected)
  request(
    device.controlURL,
    'SetAVTransportURI', 
    {
      'InstanceID': "0",
      'CurrentURI': url,
      'CurrentURIMetaData': '' 
    }
  ).then(response => {
    request(
      device.controlURL,
      'Play', 
      {
        'InstanceID': "0",
        'Speed': "1"
      }
    ).then(console.log)
  })
}
