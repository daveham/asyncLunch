import { testPromise } from './z-step1300';

// broken promise chain
testPromise(true)
.then((data1) => {
  console.log('first .then', data1);
  testPromise(true);
})
.then((data2) => {
  console.log('second .then', data2);
  testPromise(true);
})
.then((data3) => {
  console.log('third .then', data3);
  testPromise(true);
})
.then(() => console.log('that did not take six seconds?!'));

// unbroken promise chain
// testPromise(true)
//   .then((data1) => {
//     console.log('first .then', data1);
//     return testPromise(true);
//   })
//   .then((data2) => {
//     console.log('second .then', data2);
//     return testPromise(true);
//   })
//   .then((data3) => {
//     console.log('third .then', data3);
//     return testPromise(true);
//   })
//   .then(() => console.log('that took six seconds!'));
