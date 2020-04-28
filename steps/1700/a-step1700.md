# Generators

> If you think `async/await` is mind-bending, you won't believe this.

Generators are functions that appear to return a series of values rather than a single value.
<br/>
They are typically used to iterate over a set of data, as simple as an array, or as complex as
a series of asynchronous operations.

```javascript
function* generator() {
  yield 'one';
  yield 'two';
  yield 'three';
}
```

- generator functions are marked with a `*` after the keyword "function"
- anonymous functions cannot be used as generators
- the `yield` keyword is used to "return" a value from within the body of the generator
- the final value produced by the generator is whatever it returns on exit

[demo](b-step1700a.js)

<br/><br/><br/><br/><br/>

### Based on Promises (and the job queue!)
Generators are built on top of promises so you can use promise syntax, `.then(), etc.` and also `async/await` syntax.

```javascript
function* generator() {
  yield new Promise(resolve => setTimeout(() => resolve('data'), 2000));
}

async function consumer() {
  const g = generator();
  for await (let data of g) {
    console.log('generated value', data);
  }
}
```

[demo](b-step1700b.js)

<br/><br/><br/><br/><br/><br/><br/><br/>





## Coroutines
Generators are often used to string a series of async operations into a sequence. This use is called
a "coroutine" and there are packages that support this.

> In our mobile project we use the redux-sagas library which is based on generators.

This example uses a package named "co" that executes generators as coroutines, in other words, executes them
to completion.

```javascript
function* generator() {
  let data = yield api('one');

  data = yield api('two');
}

function consumer() {
  co(generator())
    .then(() => console.log('done'));
}
```

[demo](b-step1700c.js)

<br/><br/><br/><br/><br/><br/><br/><br/>

## Composition
Generators can be composed of other generators using the `yield*` variation of `yield`.

```javascript
function* childGenerator() {
  let data = yield api('red');

  data = yield api('green');

  return 'blue';
}

function* generator() {
  const childData = yield* childGenerator();

  const data = yield api('two');
}

```

[demo](b-step1700d.js)

<br/><br/><br/><br/><br/><br/><br/><br/>
