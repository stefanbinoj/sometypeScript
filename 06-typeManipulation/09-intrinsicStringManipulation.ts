// Uppercase<StringType>

type Greeting = "Hello, world"
type ShoutyGreeting = Uppercase<Greeting>
        //type ShoutyGreeting = "HELLO, WORLD"
 
type ASCIICacheKey<Str extends string> = `ID-${Uppercase<Str>}`
type MainID = ASCIICacheKey<"my_app">
       //type MainID = "ID-MY_APP"


// Lowercase<StringType>

type ASCIICacheKey2<Str extends string> = `id-${Lowercase<Str>}`
type MainID2 = ASCIICacheKey2<"MY_APP">
       //type MainID = "id-my_app"


//Capitalize<StringType>
type LowercaseGreeting = "hello, world";
type Greeting3 = Capitalize<LowercaseGreeting>;
        //type Greeting3 = "Hello, world"


//Uncapitalize<StringType>
type UppercaseGreeting = "HELLO WORLD";
type UncomfortableGreeting = Uncapitalize<UppercaseGreeting>;
              //type UncomfortableGreeting = "hELLO WORLD"