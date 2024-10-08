function identity<Type>(arg:Type):Type{
    return arg
}

let name1 =  identity<string>("hello");

//set automatically with : 
let output = identity("myString");

//genric classes :
class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType;
  }
   
  let myGenericNumber = new GenericNumber<number>();
  myGenericNumber.zeroValue = 0;
  myGenericNumber.add = function (x, y) {
    return x + y;
  };
