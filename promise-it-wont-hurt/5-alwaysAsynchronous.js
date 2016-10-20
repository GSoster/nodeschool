//exercise 5 of 13
'use strict';

var promise = new Promise(function(fulfill, reject){
  fulfill('PROMISE VALUE');
});

promise.then(console.log);
console.log('MAIN PROGRAM');
