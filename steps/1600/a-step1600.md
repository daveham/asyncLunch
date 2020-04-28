# Async/await

A syntax to write asynchronous code to look like it is synchronous.
- based on promises
- `async` keyword declares a function that returns a promise
- `await` keyword waits for a promise to "settle"
- you can use normal `try/catch`

<br/><br/><br/><br/><br/>

## Async

A function declared with `async` will always return a promise.

If the function returns something other than a promise, it will be wrapped with a promise:

```javascript
async function simple() {
  return 'data';
}
```

becomes:

```javascript
async function simple() {
  return Promise.resolve('data');
}
```

An async function can be used as a promise:

```javascript
async function simple() {
  return 'data';
}

simple.then((data) => console.log(data));
```

[demo](b-step1600a.js)

<br/><br/><br/><br/><br/>

## Await

The `await` keyword can only be used in functions declared with the `async` keyword.

The `await` keyword makes JavaScript wait until the promise settles:

```javascript
async function simple() {
  return 'data';
}

async function consumer() {
  console.log('before');

  const myData = await simple();
  console.log('I have', myData);

  console.log('after');
}
```

[demo](b-step1600b.js)

<br/><br/><br/><br/><br/>

## Error Handling

When a promise rejects, it throws an error. So this `async/await` code:

```javascript
async function simple() {
  await Promise.reject(new Error('bad'));
}
```

is equivalent to:

```javascript
async function simple() {
  throw new Error('bad');
}
```

Use `try/catch` like in synchronous code:

```javascript
async function simple() {
  await Promise.reject(new Error('bad'));
}

async function consumer() {
  try {
    const data = await simple();
  } catch(err) {
    console.log('bad things happened');
  }
}
```
[demo](b-step1600c.js)

<br/>

[next](../1700/a-step1700.md)
