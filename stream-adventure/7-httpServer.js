//Exercise 7 of 15
var through = require('through2');
var http = require('http');

// through2 stuff
function write (chuck, enconding, next) {
  this.push(chuck.toString().toUpperCase());
  next();
};
var stream = through(write);

//http (server) stuff
function handler (req, resp) {
  if (req.method === 'POST') {
    req.pipe(stream).pipe(resp);
  }
};
var server = http.createServer(handler);
server.listen(process.argv[2]);
