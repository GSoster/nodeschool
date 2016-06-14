//exercise 10 of 13
var net = require('net');//to make use of TCP
//handle socket and sends current time in the following format: 'YYYY-MM-DD hh:mm'.
function connection (socket) {
  var date = new Date();
  var stringDate = '';
  stringDate += date.getFullYear();
  var month = date.getMonth() + 1;
  if (month.toString().length === 1) {
     month = '0' + month;
   }
  stringDate += '-' + month;
  stringDate += '-' + date.getDate();
  stringDate += ' ';
  stringDate += date.getHours() + ':' + date.getMinutes();
  stringDate += '\n';
  socket.end(stringDate);
};
var server = net.createServer(connection);
server.listen(process.argv[2]);
