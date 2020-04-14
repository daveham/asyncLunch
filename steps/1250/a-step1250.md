# Callbacks

## Generic

No pre-determined convention on parameters or behavior.

```javascript
const helper = (args, cb) => cb(args);

function caller() {
  const genericCallback = (result) => console.log(result);

  helper('hello', genericCallback);
}
```

[demo](b-step1250a.js)

<br/><br/><br/>

## Node-style

- if an error occurred, the error is returned by the first argument
- if no error occurred, the first argument will be null and successful data is returned by the second argument

```javascript
const nodeStyleHelper = (args, cb) => {
  if (args) cb(null, args);  
  else cb(new Error('bad data'));
};

function caller() {
  const nodeStyleCallback = (err, result) => {
    if (err) console.log('oops', err);    
    else console.log(result);
  }

  nodeStyleHelper('hello', );
}
```
[demo](b-step1250a.js)

One of the benefits of this style is that the callback doesn't have to decide the severity of the error.
It is up to the caller to decide to throw an exception or handle the error in some other way.

<br/><br/><br/>

[next](../1260/a-step1260.md)
