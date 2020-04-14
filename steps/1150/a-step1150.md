# To be Async

Async code involves blocking code and a callback.

## Is this async code?

```javascript
const helper = (left, right, cb) => {
  const sum = left + right;
  cb(sum);
};

function addition() {
  const callback = (result) => {
    console.log('result is', result);
  };
  helper(4, 6, callback);
}
```

[demo](b-step1150a.js)

<br/><br/><br/>

## What about this?

```javascript
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
  helper(4, 6, callback);
}
```
[demo](b-step1150b.js)

<br/><br/><br/><br/>

## Not all callbacks are async

```javascript
const data = ['one', 'two', 'three'];

const allCaps = data.map((item) => {
  item.toUpperCase()
});
```

<br/><br/><br/>

[next](../1200/a-step1200.md)
