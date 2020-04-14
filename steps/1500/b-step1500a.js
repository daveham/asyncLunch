

console.log('start of first pass');

setTimeout(() =>
  console.log('message added to callback queue via timeout'), 0);

Promise.resolve()
  .then(() => console.log('first message added to job queue via promise'))
  .then(() => console.log('second message added to job queue via promise'))
  .then(() => {
    console.log('third message added to job queue via promise');
    setTimeout(() =>
      console.log('message added to callback queue via timeout inside of promise'), 0);
  });

console.log('end of first pass');
