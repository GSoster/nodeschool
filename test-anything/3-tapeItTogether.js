var test = require('tape')
var fancify = require(process.argv[2])

test('fancify', function (t) {
  t.equal(fancify('hello'), '~*~hello~*~', 'Wraps a string in ~*~')
  t.equal(fancify('hello', true), '~*~HELLO~*~', 'Optionally makes it allcaps')
  t.equal(fancify('hello', false, '%'), '~%~hello~%~', 'Optionally allows to set the character')
  t.end()
})
