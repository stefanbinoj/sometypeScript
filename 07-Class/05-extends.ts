//Derived must follow Base’s contract

class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
   
class Derived extends Base {
    // not following base 
    // greet(name: string) {
  
    // }
    // following base
    greet(name?: string) {
        if (name === undefined) {
          super.greet();
        } else {
          console.log(`Hello, ${name.toUpperCase()}`);
        }
      }
}

// declare to indicate to TypeScript that there should be no runtime effect for this field declaration.