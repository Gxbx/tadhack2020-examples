const Sipcentric = require('@sipcentric/pbx-client');

const sipcentric = new Sipcentric({
username: 'myusername',
password: 'mypassword',
});

// Usaremos el evento 'incomingcall', en este ejemplo
sipcentric.stream.subscribe('incomingcall', (call) => {
console.log(call);
});

// const Sipcentric = require('@sipcentric/pbx-client');
 
// (async () => {
//   const sipcentric = new Sipcentric({
//     username: 'myusername',
//     password: 'mypassword',
//   });
 
//   // Cree una instancia de un agente de usuario, pasando refs a su <audio>elements
//   const ua = await sipcentric.getUA({
//     extensionId: '12345',
//     audio: {
//       local: localAudioRef,
//       remote: remoteAudioRef,
//     },
//   }) ;
 
//   // Para simplificar, marcaremos un número tan pronto como nos conectemos
//   ua.on('connected', () => {
//     // *52 es una prueba de eco, útil para el desarrollo
//     const session = ua.dial('*52'); // Cambie esto al número al que le gustaría llamar
 
//     // Con esta sesión se puede (.mute(), .hold(), .terminate(), etc.)
 
//     // Pongamos la llamada en espera durante unos segundos.
//     session.hold();
 
//     setTimeout(() => {
//       // Si sigue en espera
//       if (session.isOnHold()) {
//         // Retomar llamada
//         session.unhold();
//       }
//     }, 3000);
// });
 
//   // Inicie y conecte el agente de usuario
//   ua.start();
// })
// ().catch((error) => {
//     console.log(error,'Promise error');
//   });


