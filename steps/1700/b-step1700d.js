

import co from 'co';

function api(data) {
  return new Promise(resolve => setTimeout(() => resolve(data), 2000));
}

function* childGenerator() {
  let data = yield api('red');
  console.log('child data:', data);

  data = yield api('green');
  console.log('child data:', data);

  return yield api('blue');
}

function* generator() {
  let data = yield api('one');
  console.log('data:', data);

  data = yield* childGenerator();
  console.log('child data:', data);

  data = yield api('two');
  console.log('data:', data);

  return 'done';
}

co(generator())
  .then((result) => console.log('result from generator', result));
