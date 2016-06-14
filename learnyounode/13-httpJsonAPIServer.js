//exercise 13 of 13
var http = require('http');
var url = require('url');
function callback (request, response) {
  var myParsedUrl = url.parse(request.url);
  var pathName = myParsedUrl.pathname;
  if (request.method !== 'GET'){
    return response.end('Only GET requests');
  }
  var stringTime = myParsedUrl.query.replace('iso=', '');
  var date = new Date(stringTime);
  switch(pathName){
    case '/api/parsetime':
      var json = '{"hour":'+date.getHours()+',"minute":'+date.getMinutes()+',"second":'+date.getSeconds()+'}';
      response.end(json);
      break;
    case '/api/unixtime':
      response.end('{"unixtime": ' + date.getTime() +'}');
      break;
  }




};
var server = http.createServer(callback);
server.listen(process.argv[2]);
