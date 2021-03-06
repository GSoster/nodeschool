var test = require('tape')
var feedCat = require(process.argv[2])

test('cat feeding', function (t) {
  t.equal(feedCat('food'), 'yum');
  t.throws(feedCat.bind(null, 'chocolate'));//t.throws(fn, expected, msg)
  t.end();
})


/**
* t.throws(fn, expected, msg)
* Assert that the function call fn() throws an exception.
* expected, if present, must be a RegExp or Function.
* The RegExp matches the string representation of the exception,
* as generated by err.toString().
* The Function is the exception thrown (e.g. Error).
* msg is an optional description of the assertion.
*/
