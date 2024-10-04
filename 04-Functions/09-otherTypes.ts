//void 
function foo(){
    return ; // returns undefined
}// void !== undefined 

//object refers to any value that isn’t a primitive (string, number, bigint, boolean, symbol, null, or undefined). 
//{}

//Note that in JavaScript, function values are objects: They have properties, have Object.prototype in their prototype chain, are instanceof Object, you can call Object.keys on them, and so on. For this reason, function types are considered to be objects in TypeScript.


//unknown rep any but more safer and law enfroced 
function f1(a: any) {
    a.b(); // OK
  }
  function f22(a: unknown) {
    //a.b();
  }  


//never : for functions that never return a value
// function throws an exception or terminates execution of the program.
function fail(msg: string): never {
    throw new Error(msg);
  }


  //Functions : describes properties like bind, call, apply, and others present on all function values in JavaScript. It also has the special property that values of type Function can always be called; these calls return any:
  function doSomething(f: Function) {
    return f(1, 2, 3);
  }