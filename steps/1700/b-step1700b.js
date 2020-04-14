

async function* generator() {
  yield await new Promise(resolve => setTimeout(() => resolve('one'), 2000));
  yield await new Promise(resolve => setTimeout(() => resolve('two'), 2000));
  yield await new Promise(resolve => setTimeout(() => resolve('three'), 2000));
}

async function consumer() {
  const g = generator();
  for await (let data of g) {
    console.log('generated value', data);
  }
}

consumer();
