var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.SmsConnector({
    accountSid: 'TU_accountSid',
    authToken: 'TU_authToken'
});

//send sms message
connector.sendSmsMessage({
    to: 'Numero_telefonico',
    from: '+654321',
    body: 'Hello from Avaya CPaaS!',
    statusCallback: 'http://mycallback.url.com',
    statusCallbackMethod: enums.HttpMethod.GET,
    allowMultiple: true
}).then(function (data) {
    console.log(data);
});