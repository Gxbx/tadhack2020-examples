// const SDK = require('@ringcentral/sdk').SDK

// RECIPIENT = '+573113696125'

// RINGCENTRAL_CLIENTID = 'yAyKW4G7RpGv74-qnY8Plg'
// RINGCENTRAL_CLIENTSECRET = '0X727UP3RM-HMolq7yopDg3lF8NZRaTw6jt4FiGdtdIw'
// RINGCENTRAL_SERVER = 'https://platform.devtest.ringcentral.com'

// RINGCENTRAL_USERNAME = '+14244276848'
// RINGCENTRAL_PASSWORD = 'creatic2020!'
// RINGCENTRAL_EXTENSION = '101'

// var rcsdk = new SDK({
//     server: RINGCENTRAL_SERVER,
//     clientId: RINGCENTRAL_CLIENTID,
//     clientSecret: RINGCENTRAL_CLIENTSECRET
// });
// var platform = rcsdk.platform();
// platform.login({
//   username: RINGCENTRAL_USERNAME,
//   password: RINGCENTRAL_PASSWORD,
//   extension: RINGCENTRAL_EXTENSION
// })
// .then(function(resp) {
//     call_ringout()
// });

// function call_ringout() {
//     platform.post('/restapi/v1.0/account/~/extension/~/ring-out', {
//       'from' : { 'phoneNumber': RINGCENTRAL_USERNAME },
//       'to'   : {'phoneNumber': RECIPIENT},
//       'playPrompt' : false
//     })
//     .then(function(resp) {
//       return resp.json()
//     })
//     .then(function(json){
//         console.log("Call placed. Call status: " + json.status.callStatus)
//     })
// }

const SDK = require('@ringcentral/sdk').SDK

RECIPIENT = '+573113696125'

RINGCENTRAL_CLIENTID = 'FMW3kAsiTf6qxLmhbFGDow'
RINGCENTRAL_CLIENTSECRET = 'VW7byPS0TmyTggSMivMXcg37WHSq0WQnS7lj6_DGkl5A'
RINGCENTRAL_SERVER = 'https://platform.devtest.ringcentral.com'

RINGCENTRAL_USERNAME = '+14244276848'
RINGCENTRAL_PASSWORD = 'creatic2020!'
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
        send_sms()
    });

function send_sms(){
  platform.post('/restapi/v1.0/account/~/extension/~/sms', {
       from: {'phoneNumber': RINGCENTRAL_USERNAME},
       to: [{'phoneNumber': RECIPIENT}],
       text: 'Hello World from JavaScript'
     })
     .then(function (resp) {
        console.log("SMS sent. Message status: " + resp.json().messageStatus)
     });
}