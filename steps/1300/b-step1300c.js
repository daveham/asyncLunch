
import { testPromise } from './z-step1300';

testPromise(true)
  .then((data) => console.log('success:', data))
  .finally(() => console.log('good or bad, I am here'));

// testPromise(true).then(
//   (data) => console.log('success:', data),
//   (err) => console.log('failure:', err)
// )
//   .finally(() => console.log('good or bad, I am here'));

// testPromise(false).then(
//   (data) => console.log('success:', data),
//   (err) => console.log('failure:', err.message)
// )
//   .finally(() => console.log('good or bad, I am here'));

// testPromise(false)
//   .then((data) => console.log('success:', data))
//   .catch((err) => console.log('failure:', err.message))
//   .finally(() => console.log('good or bad, I am here'));
