var emotifyLocation = process.argv[2];
var emotify = require(emotifyLocation);
console.log(emotify(process.argv[3]));
