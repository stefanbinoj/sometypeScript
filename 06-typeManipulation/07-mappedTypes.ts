// Mapped types build on the syntax for index signatures,
interface Horse{
    name:string ,
    id:number

}
type onlyBoolAndHorse = {
    [key:string]:boolean | Horse ;
}

const conforms: onlyBoolAndHorse = {
    del: true,
    rodney: false,
  };
// A mapped type is a generic type which uses a union of PropertyKeys (frequently created via a keyof) to iterate through keys to create a type:

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};


type Features = {
    darkMode: () => void;
    newUserProfile: () => void;
  };
type FeatureOptions = OptionsFlags<Features>;
           
//   type FeatureOptions = {
//       darkMode: boolean;
//       newUserProfile: boolean;
//   }
  


// You can remove or add these modifiers by prefixing with - or +. If you don’t add a prefix, then + is assumed.
// Removes 'readonly' attributes from a type's properties
type LockedAccount = {
    readonly id: string;
    readonly name: string;
  };
   
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
  };
  type UnlockedAccount = CreateMutable<LockedAccount>; // now readonly is substracted
           
//   type UnlockedAccount = {
//       id: string;
//       name: string;
//   }
  

// Removes 'optional' attributes from a type's properties
type MaybeUser = {
    id: string;
    name?: string;
    age?: number;
  };
type Concrete<Type> = {
    [Property in keyof Type]-?: Type[Property];
  };
type User = Concrete<MaybeUser>; // no optionals heere
      
//   type User = {
//       id: string;
//       name: string;
//       age: number;
//   }

//using as 
interface Person2 {
    name: string;
    age: number;
    location: string;
}
type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
 
type LazyPerson = Getters<Person2>; // all are func
         
// type LazyPerson = {
//     getName: () => string;
//     getAge: () => number;
//     getLocation: () => string;
// }


// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
           
// type KindlessCircle = {
//     radius: number;
// }