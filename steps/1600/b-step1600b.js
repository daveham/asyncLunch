

async function simple() {
  return 'data';
}

async function consumer() {
  console.log('before');

  const myData = await simple();

  console.log('I have', myData);

  console.log('after');
}

consumer();
