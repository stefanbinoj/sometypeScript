interface Box<Type> {
    contents: Type;
  }

//type alias 
// type Box<Type> = {
//     contents: Type;
//   };


let box: Box<string>;

interface Apple {
  }
   //Box is reusable in that Type can be substituted with anything
  // Same as '{ contents: Apple }'.
  type AppleBox = Box<Apple>;

//Adv
type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
           
type OneOrManyOrNull1<Type> = OneOrMany<Type> | null
 
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;