//exercise 4
function foo () {
  var bar;
  quux = 'some value';
  function zip () {
    bar = true;
    var quux = 'some other value';
  };
  return zip;
};
