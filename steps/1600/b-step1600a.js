

async function simple() {
  return 'data';
}

console.log('before');

simple().then((data) => console.log('I have', data));

console.log('after');
