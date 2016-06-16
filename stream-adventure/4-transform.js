//Exercise 4 of 15
require through = require('through2');
function write (chuck, enconding, next) {
  //chuck of data received
  this.push(chuck.toString().toUpperCase());
  next();
};

function end () {
  done();
};

var stream = through(write, end);

process.stdin.pipe(stream).pipe(process.stdout);
