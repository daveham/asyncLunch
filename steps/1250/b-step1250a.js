

const helper = (args, cb) => cb(args);

function caller() {
  console.log('before');

  helper('hello', (result) => console.log(result));

  console.log('after');
}

caller();

