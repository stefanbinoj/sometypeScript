type voidFun = () => void;

const f11: voidFun = () => { return true; }; // Error: Type 'boolean' is not assignable to type 'void'

const f3: voidFun = () => {
    return 1; // Error: Type 'number' is not assignable to type 'void'
};

const v1 = f3(); // Type: void

//There is one other special case to be aware of, when a literal function definition has a void return type, that function must not return anything.
function f2(): void {
    // @ts-expect-error
    return true;
  }
   
  const f31 = function (): void {
    // @ts-expect-error
    return true;
  };