## If written in a blocking language (python):

```python
import requests

r = requests.get('someUrl')

print r.text

print 'after the request'
```

![step100a.png](step1100a.png)

<br/><br/><br/><br/>

## Written in non-blocking language (JavaScript)

```javascript
import request from 'request';

request('someUrl', function(error, response, body) {
  console.log(body);
});

console.log('after the request');
```

![step100a.png](step1100b.png)

<br/><br/><br/><br/>

[next](../1150/a-step1150.md)
