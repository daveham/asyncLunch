console.log('start of first pass');

setTimeout(() =>
  console.log('message added to callback queue via timeout'), 0);

Promise.resolve()
.then(() => console.log('message added to job queue with Promise.resolve()'));

// node support added in v11
queueMicrotask(() => console.log('message added to job queue with queueMicrotask()'));

process.nextTick(() => console.log('message added to job queue with process.nextTick()'));

console.log('end of first pass*');
