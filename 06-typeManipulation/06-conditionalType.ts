//  SomeType extends OtherType ? TrueType : FalseType;

interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
   
  type Example1 = Dog extends Animal ? number : string;
          
  //type Example1 = number
   
  type Example2 = RegExp extends Animal ? number : string;
          
  //type Example2 = string

  //type NameOrId<T extends number | string> = T extends number ? IdLabel  : NameLabel;

type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;
 
interface Email {
  message: string;
}
 
type EmailMessageContents = MessageOf<Email>; //string

interface Dog {
    bark(): void;
  }
type DogMessageContents = MessageOf<Dog>; //never 


//new one 
type Flatten<T> = T extends any[] ? T[number] : T;
 
// Extracts out the element type.
type Str = Flatten<string[]>;
     //type Str = string
 
// Leaves the type alone.
type Num = Flatten<number>;
     //type Num = number

