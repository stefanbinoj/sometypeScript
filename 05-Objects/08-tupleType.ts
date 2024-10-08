// tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions.
type StringNumberPair = [string, number];
// StringNumberPair describes arrays whose 0 index contains a string and whose 1 index contains a number.


interface StringNumberPair1 {
    // specialized properties
    length: 2;
    0: string;
    1: number;
   
    // Other 'Array<string | number>' members...
    slice(start?: number, end?: number): Array<string | number>;
  }
  //adv defining length
  // aslo tuples can have optional elements but  Optional tuple elements can only come at the end, and also affect the type of length.
  function readButtonInput(...args: [string, number, ...boolean[]]) {
    const [name, version, ...input] = args;
    // ...
  }

  //same as :
  function readButtonInput1(name: string, version: number, ...input: boolean[]) {
    // ...
  }//when you want to take a variable number of arguments with a rest parameter, and you need a minimum number of elements, but you don’t want to introduce intermediate variables.