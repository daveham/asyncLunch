import { testPromise } from './z-step1300';

Promise.all([
  testPromise(true),
  testPromise(true),
  testPromise(true)
])
  .then((resultsArray) => {
    console.log('length of results array', resultsArray.length);
    console.log('first element', resultsArray[0]);
    console.log('second element', resultsArray[1]);
    console.log('third element', resultsArray[2]);
  })
  .then(() => console.log('that did not take six seconds!'));
