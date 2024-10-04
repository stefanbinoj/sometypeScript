// function overload == signature overload 
function makeDate(timestamp: number): Date; //overload signatures.
function makeDate(m: number, d: number, y: number): Date; //overload signatures.
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

//When writing an overloaded function, you should always have two or more signatures above the implementation of the function.

function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

//TypeScript can only resolve a function call to a single overload:

//len(Math.random() > 0.5 ? "hello" : [0]);