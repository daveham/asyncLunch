import { testPromise } from './z-step1300';

testPromise(true)
  .then((data1) => {
    console.log('first .then', data1);
    return testPromise(true);
  })
  .then((data2) => {
    console.log('second .then', data2);
    return testPromise(true);
  })
  .then((data3) => {
    console.log('third .then', data3);
  })
  .then(() => console.log('that took six seconds!'));


// testPromise(true)
//   .then((data1) => {
//     console.log('first .then', data1);
//     testPromise(true);
//   })
//   .then((data2) => {
//     console.log('second .then', data2);
//     testPromise(true);
//   })
//   .then((data3) => {
//     console.log('third .then', data3);
//   })
//   .then(() => console.log('that did not take six seconds?!'));
