# Callback Hell

Also known as "the pyramid of doom"!

## Generic Callbacks

```javascript
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
```

[demo](b-step1260a.js)


## Node-Style Callbacks

```javascript
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
```

[demo](b-step1260a.js)

<br/>

[next](../1300/a-step1300.md)
