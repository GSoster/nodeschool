//exercise 2 of 13
'use strict';
//requrire('es6-promise');

var promise = new Promise (function (fulfill, reject) {
  setTimeout(function() {
    fulfill('FULFILLED!');
  }, 300);
});

promise.then(console.log);
