# I Have to Learn Async Why?

## JavaScript is Single-Threaded Because it is Safe

> Only one thing can happen at a time, on a single main thread,
> and everything else is blocked until an operation completes.

<br/>

### Multi-threaded programming is hard to get right
* Managing shared data
* Synchronization

### Many threads means
* Many execution stacks -> memory for each thread
* Context switching -> CPU spent not getting work done

<br/><br/><br/>

## JavaScript Hosts

Designed to do work quickly via many small chunks.

Almost all JavaScript primitives and library functions dealing with I/O (file, network, node, etc.) are asynchronous.

Asynchronous is the default; Synchronous is the exception. `fs.ReadFile()` vs `fs.ReadFileSync()`

### Browsers
* Load quickly (or appear to) -> manage network requests, render early
* Smooth interaction -> responsive to events

### Node
* Optimize for I/O
* Maximize throughput (getting work done)

<br/><br/><br/>

## JavaScript is an "ideal" language for both environments
* Designed for event programming
* Closures
* Anonymous functions

<br/>

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

<br/><br/><br/>

