//exercise 12 of 13
var http = require('http');

function callback (request, response) {
  if (request.method !== 'POST'){
    return;
  }
  var fullData = '';
  response.writeHead(200, {'content-type' : 'text/plain'});
  request.on('data', function(chuck){
    fullData += chuck;}
  );
  request.on('end', function(){
    //sends back (as uppercased string) what was received.
     response.end(fullData.toString().toUpperCase()); 
   });
};

var server = http.createServer(callback);
server.listen(process.argv[2]);
