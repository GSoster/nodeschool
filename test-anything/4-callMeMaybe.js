var repeatCallback = require(process.argv[2]);
var test = require('tape');


test('callback', function(t){
  t.plan(3);//we are going to make 3 assertions
  repeatCallback(3, function(){
    t.pass('callback called!');
  })
});
