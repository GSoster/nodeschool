//exercise 9 of 13
var http = require('http');
var counter = 0;
var resp = [];

function checkCounter () {
  if (counter === 3) {
    for (var i = 0; i < counter; i++) {
      console.log(resp[i]);
    }
  }
};

/* it is necessary because of the async behaviour, if the http.get were
* made directly inside the for loop the http.get would still be waiting for
* an answer and the loop would already finished.
*/
function getResponse(index){
  http.get(process.argv[2 + index], function (response) {
    response.setEncoding('utf8');
    var fullData = '';
    response.on('data', function(chuck){
      fullData += chuck;
    });
    response.on('end', function(){
        resp[index] = fullData;
        counter++;
        checkCounter();
    });
  });
};

for (var i = 0; i < 3; i++) {
  getResponse(i);
}
