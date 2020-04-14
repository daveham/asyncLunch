

const helper = (args, cb) => cb(args);

function caller() {
  helper('hello', (result1) => {
    console.log(result1);

    helper('how', (result2) => {
      console.log(result2);

      helper('are', (result3) => {
        console.log(result3);

        helper('you?', (result4) => {
          console.log(result4);
        });
      });
    });
  });
}

caller();
