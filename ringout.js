const SDK = require('@ringcentral/sdk').SDK

RECIPIENT = 'NUMERO_A_LLAMAR'

RINGCENTRAL_CLIENTID = 'TU_CLIENTID'
RINGCENTRAL_CLIENTSECRET = 'TU_CLIENTSECRET'
RINGCENTRAL_SERVER = 'https://platform.devtest.ringcentral.com'

RINGCENTRAL_USERNAME = 'TU__USERNAME'
RINGCENTRAL_PASSWORD = 'TU__PASSWORD'
RINGCENTRAL_EXTENSION = '101'

var rcsdk = new SDK({
    server: RINGCENTRAL_SERVER,
    clientId: RINGCENTRAL_CLIENTID,
    clientSecret: RINGCENTRAL_CLIENTSECRET
});
var platform = rcsdk.platform();
platform.login({
  username: RINGCENTRAL_USERNAME,
  password: RINGCENTRAL_PASSWORD,
  extension: RINGCENTRAL_EXTENSION
})
.then(function(resp) {
    call_ringout()
});

function call_ringout() {
    platform.post('/restapi/v1.0/account/~/extension/~/ring-out', {
      'from' : { 'phoneNumber': RINGCENTRAL_USERNAME },
      'to'   : {'phoneNumber': RECIPIENT},
      'playPrompt' : false
    })
    .then(function(resp) {
      return resp.json()
    })
    .then(function(json){
        console.log("Call placed. Call status: " + json.status.callStatus)
    })
}

// const SDK = require('@ringcentral/sdk').SDK

// RECIPIENT = '+573113696125'

// RINGCENTRAL_CLIENTID = 'TU_CLIENTID'
// RINGCENTRAL_CLIENTSECRET = 'TU_CLIENTSECRET'
// RINGCENTRAL_SERVER = 'https://platform.devtest.ringcentral.com'

// RINGCENTRAL_USERNAME = 'TU__USERNAME'
// RINGCENTRAL_PASSWORD = 'TU__PASSWORD'
// RINGCENTRAL_EXTENSION = '101'

// var rcsdk = new SDK({
//     server: RINGCENTRAL_SERVER,
//     clientId: RINGCENTRAL_CLIENTID,
//     clientSecret: RINGCENTRAL_CLIENTSECRET
// });
// var platform = rcsdk.platform();
// platform.login({
//     username: RINGCENTRAL_USERNAME,
//     password: RINGCENTRAL_PASSWORD,
//     extension: RINGCENTRAL_EXTENSION
//     })
//     .then(function(resp) {
//         send_sms()
//     });

// function send_sms(){
//   platform.post('/restapi/v1.0/account/~/extension/~/sms', {
//        from: {'phoneNumber': RINGCENTRAL_USERNAME},
//        to: [{'phoneNumber': RECIPIENT}],
//        text: 'Hello World from JavaScript'
//      })
//      .then(function (resp) {
//         console.log("SMS sent. Message status: " + resp.json().messageStatus)
//      });
// }