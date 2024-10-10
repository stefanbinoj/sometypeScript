type Flatten1<Type> = Type extends Array<infer Item> ? Item : Type;
//infer keyword to declaratively introduce a new generic type variable named Item instead of specifying how to retrieve the element type of Type within the true branch.

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return ? Return: never;
 
type Num1 = GetReturnType<() => number>;
     //type Num = number
 
type Str1 = GetReturnType<(x: string) => string>;
     //type Str = string
 
type Bools1 = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
      //type Bools = boolean[]