# Promises

A promise is an object that represents the eventual result
of a (usually) asynchronous operation.

- initialized with a state of "pending" and a result of "undefined"
- a promise changes state to either "fulfilled" or "rejected"
- reaches a state of "fulfilled" with `resolve(value)`
- or, reaches a state of "rejected" with `reject(error)`

```javascript
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isOperationSuccessful) {
      resolve(data);
    } else {
      reject(new Error('bad'));
    }
  }, 2000);
});
```

[demo](b-step1300a.js)

<br/><br/><br/>

## Getting the Results

The "consumer" of a promise registers callbacks:
- .then(cbResolve) - provide a single function that will receive results
- .then(cbResolve, cbReject) - provide two functions, one to receive results, a second to receive an error
- .catch(cbError) - provide a single function that will receive an error

```javascript
myPromise.then((data) => console.log('my promise worked', data));

myPromise.then(
  (data) => console.log('my promise worked', data),
  (err) => console.log('my promise errored', err)
);

myPromise
  .then((data) => console.log('my promise worked', data))
  .catch((err) => console.log('my promise errored', err));
```

[demo](b-step1300b.js)

<br/><br/><br/><br/><br/>

## And Finally

Just as `try/catch` has `finally`, so do promises:

```javascript
myPromise
  .then((data) => console.log('my promise worked', data))
  .catch((err) => console.log('my promise errored', err))
  .finally(() => console.log('good or bad, I am here'));
```

[demo](b-step1300c.js)

<br/><br/><br/><br/><br/><br/><br/>

## Promises can be Chained (but only settled once)

- chain multiple `.then()` handlers
- the value returned from `.then()` becomes the input to the next `.then()`
- maintain the chains

```javascript
myPromise
  .then((data1) => console.log('my first promise worked', data1))
  .then((data2) => console.log('my second promise worked', data2))
  .then((data3) => console.log('my third promise worked', data3))
  .catch((err) => console.log('my promise errored', err))
  .finally(() => console.log('good or bad, I am here'));
```

[demo - simple promise chain](b-step1300d.js)
<br/>
[demo - maintain the chain](b-step1300e.js)


<br/><br/><br/><br/><br/><br/><br/>

## Promises can run in Parallel

- parallel promises produce parallel results
- parallel promises can be chained with additional handlers

```javascript
Promise.all([
  myPromise(data1),
  myPromise(data2),
  myPromise(data3)
])
  .then((resultsArray) => {
    console.log('length of results array', resultsArray.length);
  });
```

[demo](b-step1300f.js)

<br/><br/><br/><br/><br/>
[next](../1500/a-step1500.md)
