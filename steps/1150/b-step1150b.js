

const helper = (left, right, cb) => {
  const sum = left + right;
  setTimeout(() => {
    cb(sum);
  }, 0);
};

function addition() {
  const callback = (result) => {
    console.log('result is', result);
  };

  console.log('before call to helper');

  helper(4, 6, callback);

  console.log('after call to helper');
}

addition();
