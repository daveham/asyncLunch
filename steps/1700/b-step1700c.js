

import co from 'co';

function api(data) {
  return new Promise(resolve => setTimeout(() => resolve(data), 2000));
}

function* generator() {
  let data = yield api('one');
  console.log('data:', data);

  data = yield api('two');
  console.log('data:', data);

  data = yield api('three');
  console.log('data:', data);

  return 'done';
}

co(generator())
  .then((result) => console.log('result from generator:', result));
