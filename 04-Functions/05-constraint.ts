//constraint to limit the kinds of types that a type parameter can accept.

function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
   
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  // longerString is of type 'alice' | 'bob'
  const longerString = longest("alice", "bob");
  // Error! Numbers don't have a 'length' property
  //const notOK = longest(10, 100); // number type doesn’t have a .length property.
function minimumLength<Type extends { length:number}>( obj : Type , min:number):Type{
    if (obj.length>min){
        return obj
    }
    return obj
    // else{
    //     // return {length:min}
    // }
}

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }

//Error : 
//const arr = combine([1, 2, 3], ["hello"]);

//Okay
const arr = combine<string | number>([1, 2, 3], ["hello"]);
