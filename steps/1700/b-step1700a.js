

function* generator() {
  yield 'one';
  yield 'two';
  yield 'three';
}

function consumer() {
  const g = generator();
  for (let data of g) {
    console.log('generated value', data);
  }
}

consumer();
