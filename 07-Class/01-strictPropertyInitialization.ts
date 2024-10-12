// --strictPropertyInitialization : class fields need to be initialized in the constructor.
class BadGreeter {
    name: string;
//   Property 'name' has no initializer and is not definitely assigned in the constructor.
}
class GoodGreeter {
    name: string;
   
    constructor() {
      this.name = "hello";
    }
  }
class OKGreeter {
    // Not initialized, but no error
    name!: string;
  }
    
// In a class always call the fields with this keyword only 
// constructor is same as function but cant have a return type and <Type> 
//user super() to acess parent class fields 


let x: number = 0;
 
class C {
  x: string = "hello";
 
  m() {
    // This is trying to modify 'x' from line 23, not the class property
    //x = "world"; //use this
    this.x="world";
  }
}