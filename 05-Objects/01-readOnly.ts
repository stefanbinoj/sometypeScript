//read Only
interface SomeType {
    readonly prop: string;
}
   
function doSomething(obj: SomeType) {
    // We can read from 'obj.prop'.
    console.log(`prop has the value '${obj.prop}'.`);
   
    // But we can't re-assign it.
    //obj.prop = "hello";
  }

  interface StringArray {
    [index: number]: string;
  }
 //. This index signature states that when a StringArray is indexed with a number, it will return a string.  

 interface ReadonlyStringArray {
  readonly [index: number]: string;
}
 
let myArray: ReadonlyStringArray ;
//myArray[2] = "Mallory";
//readonly 