// If written in a blocking language (python):
/*
    import requests

    r = requests.get('someUrl')

    print r.text

    print 'after the request'
*/


// Written in non-blocking language (JavaScript)

import request from 'request';

request('someUrl', function(error, response, body) {
  console.log(body);
});

console.log('after the request');
