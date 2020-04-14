
import { testPromise } from './z-step1300';

testPromise(true).then((data) => console.log('success:', data));

// testPromise(true).then(
//   (data) => console.log('success:', data),
//   (err) => console.log('failure:', err)
// );

// testPromise(false).then(
//   (data) => console.log('success:', data),
//   (err) => console.log('failure:', err.message)
// );

// testPromise(false)
//   .then((data) => console.log('success:', data))
//   .catch((err) => console.log('failure:', err.message));
