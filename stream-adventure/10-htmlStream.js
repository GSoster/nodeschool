//Exercise 10 of 15
var trumpt = require('trumpet');
var through = require('through2');
var tr = trumpt();

var r = process.stdin.pipe(tr);;
var stream = tr.select('.loud').createStream();

stream.pipe(through(function (chuck, enconding, next) {
  this.push(chuck.toString().toUpperCase());
  next();
})).pipe(stream);

r.pipe(process.stdout);
