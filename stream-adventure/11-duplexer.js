//Exercise 11 of 15
//The child_process module provides the ability to spawn child processes
var spawn = require('child_process').spawn;
var duplexer = require('duplexer2');

module.exports = function (cmd, args) {
  var childProcess = spawn(cmd, args);
  return duplexer(childProcess.stdin, childProcess.stdout);
}
