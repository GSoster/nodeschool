//exercise 6 of 13
'use strict';
//Promise CATCH: both examples below are the same
var promiseReject = new Promise(function(fulfill, reject){
  reject(new Error('PROMISE REJECT'));
});

promiseReject.catch(function(error){
  console.error(error.message);
});

promiseReject.then(null, function(error){
  console.error(error.message);
});


//Promise RESOLVE: both examples below are the same
var promiseFulfill = new Promise(function(fulfill, reject){
  fulfill('PROMISE RESOLVE');
});
var resolve = new Promise.resolve('PROMISE RESOLVE');

//Promise REJECT: both examples below are the same
var promiseReject = new Promise(function(fulfill, reject){
  reject(new Error('PROMISE REJECT'));
});
var reject = new Promise.reject(new Error('PROMISE REJECT'));
