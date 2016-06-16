//Exercise 4 of 15
var through = require('through2');
function write (chuck, enconding, next) {
  //chuck of data received
  this.push(chuck.toString().toUpperCase());
  next();
};

function end (done) {
  done();
};
//both 'write' and 'end' are optional functions.
//default behaviour for write: pass the chucks of data forward.
//default behaviour for end: pass NULL and end stream.
//any of the below will work and pass the Exercise:
//var stream = through(write, end);
var stream = through(write);

process.stdin.pipe(stream).pipe(process.stdout);
