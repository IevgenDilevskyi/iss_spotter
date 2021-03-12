const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('184.64.166.171', (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:' , coordinates)
// });

// fetchISSFlyOverTimes({ latitude: '51.0207', longitude: '-114.1011' }, (error, times) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned ISS flyover times:' , times);
// });

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});