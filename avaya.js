var cpaas = require('@avaya/cpaas');
var enums = cpaas.enums;

var connector = new cpaas.SmsConnector({
    accountSid: 'AC777c3e322e90e9b30f694ef38848d089',
    authToken: 'e8bc0b7e16df4ad3b0e5209329a68f8b'
});

//send sms message
connector.sendSmsMessage({
    to: '+573113696125',
    from: '+654321',
    body: 'Hello from Avaya CPaaS!',
    statusCallback: 'http://mycallback.url.com',
    statusCallbackMethod: enums.HttpMethod.GET,
    allowMultiple: true
}).then(function (data) {
    console.log(data);
});