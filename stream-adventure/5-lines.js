//Exercise 5 of 15
//transforms: odd-numbered lines = lower-case, even = upper-case
// odd = PAR, even = ÍMPAR
var split = require('split');
var through = require('through2');
var count = 0;
function write (line, encoding, next) {
  var l = '';
  if (count % 2 === 0) {
    l = line.toString().toLowerCase();
  } else {
    l = line.toString().toUpperCase();
  }
  count++;
  this.push('\n' + l);//'\n'+ is necessary to pass the test that expects \n in the answer.
  next();
};

var stream = through(write);

process.stdin.pipe(split()).pipe(stream).pipe(process.stdout);
