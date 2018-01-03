const SERVICE_TYPE = 'urn:schemas-upnp-org:service:AVTransport:1'
const ENVELOPE_SCHEMA = 'http://schemas.xmlsoap.org/soap/envelope/'
const ENCODING_SCHEMA = 'http://schemas.xmlsoap.org/soap/encoding/'

const buildBody = (actionName, params) => `
  <s:Envelope xmlns:s="${ENVELOPE_SCHEMA}" s:encodingStyle="${ENCODING_SCHEMA}">
    <s:Body>${buildAction(actionName, params)}</s:Body>
  </s:Envelope>
`

const buildAction = (actionName, params) => `
  <u:${actionName} xmlns:u="${SERVICE_TYPE}">
    ${buildArguments(params)}
  </u:${actionName}>
`

const buildArguments = (params) => Object.keys(params).map(
  param => `
    <${param}>${params[param]}</${param}>
  `
).join('')

export default request = (url, actionName, params) => {
  let config = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml; charset="utf-8"',
      'SOAPAction': `"${SERVICE_TYPE}#${actionName}"` 
    },
    body: buildBody(actionName, params),
    mode: 'cors',
    cache: 'default'
  }

  console.log(config)
 
  return fetch(url, config).then(response => {
    return response.text()
  }).catch(error => {
    console.log(error)
  })
}
