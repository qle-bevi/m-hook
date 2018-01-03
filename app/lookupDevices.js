import { Client } from 'react-native-ssdp'

export default (interval, onNewDevice) => {
  const ssdpClient = new Client()

  const startDiscovery = _ => { 
    ssdpClient.search('urn:schemas-upnp-org:service:AVTransport:1')
    setTimeout(startDiscovery, interval)
  }

  ssdpClient.on('response', (headers, statusCode, rInfo) => {
    console.log(rInfo)
    if (onNewDevice && statusCode === 200) {
      onNewDevice(headers["LOCATION"], rInfo["address"])
    }
  })

  startDiscovery()
}
