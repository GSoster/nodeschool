//Exercise 12 of 15
var duplexer2 = require('duplexer2');
var through = require('through2').obj;



module.exports = function (counter) {
  var countries = {};//will store and count countries

  function write (chuck, encoding, next) {
    if (chuck.country in countries) {
      countries[chuck.country]++;
    } else {
      countries[chuck.country] = 1;
    }
    next();
  };

  function end (done) {
    counter.setCounts(countries);
    done();
  };
  var stream = through(write, end);

  duplexer = duplexer2({writableObjectMode:true}, stream, counter);//{options}, writable stream, readable stream
  return duplexer;
};
