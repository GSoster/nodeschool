//Exercise 8 of 15
var http = require('http');
var request = require('request');//to send post/get

process.stdin.pipe(request.post('http://localhost:8099')).pipe(process.stdout);
