//exercise 11 of 13
var http = require('http');
var fs = require('fs');
var fileLocation = process.argv[3];

function handler (request, response) {
  var stream = fs.createReadStream(fileLocation);
  stream.pipe(response);
};

var server = http.createServer(handler);
server.listen(process.argv[2]);
