

const helper = (args, cb) => {
  if (args) {
    cb(null, args);
  } else {
    cb(new Error('bad data'));
  }
};

function caller(data) {
  console.log('before');

  helper(data, (err, result) => {
    if (err) {
      console.log('oops', err.message);
    } else {
      console.log(result);
    }
  });

  console.log('after');
}

// caller('hello');
caller();
