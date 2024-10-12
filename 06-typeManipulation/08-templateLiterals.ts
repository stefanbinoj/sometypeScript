type onEventHandler<Type>={
    on(eventName : `${string & keyof Type}Changed`,callback:(newValue : any)=>void) : void ; };

declare function makeWatchObj <Type>(obj:Type) :Type & onEventHandler<Type> ;

const person = makeWatchObj({
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26
  });
person.on("firstNameChanged", () => {});
//person.on("firstName", () => {}); error
//person.on("frstNameChanged", () => {});
person.on("ageChanged", () => {});



type PropEventSource<Type> = {
    on<Key extends string & keyof Type>
        (eventName: `${Key}Changed`, callback: (newValue: Type[Key]) => void): void;
};
 
declare function makeWatchedObject<Type>(obj: Type): Type & PropEventSource<Type>;
 
const person2 = makeWatchedObject({
  firstName: "Saoirse",
  lastName: "Ronan",
  age: 26
});
 
person2.on("firstNameChanged", newName => {                       
//(parameter) newName: string
    console.log(`new name is ${newName.toUpperCase()}`);
});
person2.on("ageChanged", newAge => {                   
   // (parameter) newAge: number
        if (newAge < 0) {
            console.warn("warning! negative age");
        }
    })
    

