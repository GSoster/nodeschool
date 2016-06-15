//exercise 3
/*
* ############ GLOBAL SCOPE ##########
* Global scope object on node: global
* Global scope object on browser: window
* The javascript runtime follows these steps to assign a variable:
* 1) Search within the current scope.
* 2) If not found, search in the immediately outer scope.
* 3) If found, go to 6.
* 4) If not found, repeat 2. Until the Global scope is reched.
* 5) If not found in Global scope, creat it on (window(browser) / global(node) objects).
* 6) Assign the value.
*/

/*
* ############ SHADOWING ##########
* function someFunc () {
*    var foo = 1;
*    function inner () {
*       var foo = 2;
*    }
*  }
* This is called shadowing. the foo inside inner() is said to shadow the foo inside somefunc.
* shadowing means that the inner() scope only has access to its own foo.
* There is no way for it to access the foo defined in someFunc().
*/

function foo () {
  var bar;
  //because quux has no 'var' or 'let' keywords, it will be assgined to the global scope
  quux = 'some value';
  function zip () {
    //shadowing the quux in the global scope, it has no access to the outer quux!
    var quux = 'some other value';
  };
};
