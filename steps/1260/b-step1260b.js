
const helper = (args, cb) => {
  if (args) cb(null, args);
  else cb(new Error('bad data'));
};

function caller() {
  helper('hello', (err1, result1) => {
    if (err1) console.log('oops', err1.message);
    else {
      console.log(result1);
      helper('how', (err2, result2) => {
        if (err2) console.log('oops', err2.message);
        else {
          console.log(result2);
          helper('are', (err3, result3) => {
            if (err3) console.log('oops', err3.message);
            else {
              console.log(result3);
              helper('you?', (err4, result4) => {
                if (err4) console.log('oops', err4.message);
                else console.log(result4);
              });
            }
          });
        }
      });
    }
  });
}

caller();
