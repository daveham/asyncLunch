# Why Is JavaScript So Async?

## JavaScript is Single-Threaded

> Only one thing can happen at a time, on a single main thread,
> and everything else is blocked until an operation completes.

<br/>

### Multi-threaded programming is hard to get right
* Managing shared data
* Synchronization

### Many threads means
*  many execution stacks -> memory
* context switching -> CPU

<br/><br/>

## JavaScript Hosts

### Browsers
* Load quickly (or appear to) - manage network requests, render early
* Smooth interaction -> responsive to events

### Node
* Optimize for I/O
* Maximize throughput (getting work done)

<br/><br/>

## Language Support
This line of code implies the entire process blocks, or there are multiple execution stacks:

```javascript
result = db.query('select...');
```

This line of code implies an event loop:

```javascript
db.query('select...', (result) => {
  // do something with results
});
```

<br/>

## JavaScript is an "ideal" language for both environments
* Designed for event programming
* Closures
* Anonymous functions

<br/><br/>
