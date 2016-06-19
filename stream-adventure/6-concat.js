//Exercise 6 of 15
var concat = require('concat-stream');

function callback (buffer) {
  process.stdout.write(buffer.toString().split('').reverse().join(''));
};

process.stdin.pipe(concat(callback));
