//Normal :
function firstElement(arr: number[]) :number{
    return arr[0];
  }
function firstElement1<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}//we’ve created a link between the input of the function (the array) and the output (the return value)


function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }
   
  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
  const parsed = map(["1", "2", "3"], (n) => parseInt(n));