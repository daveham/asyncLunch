import { testPromise } from './z-step1300';

// start with a promise that waits 2 seconds to resolve
testPromise(true)
  .then((data1) => {
    console.log('success 1:', data1);
    return 'success 1';
  })
  .then((data2) => {
    console.log('success 2:', data2);
    return 'success 2';
  })
  .then((data3) => {
    console.log('success 3:', data3);
    return 'success 3';
  })
    .catch((err) => console.log('failure:', err.message))
    .finally(() => console.log('good or bad, I am here'));
