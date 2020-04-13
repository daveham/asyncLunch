

const helper = (left, right, cb) => {
  const sum = left + right;
  cb(sum);
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
