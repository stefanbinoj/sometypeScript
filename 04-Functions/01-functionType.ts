//function type arrow fun 

function greet(fn:(a:string)=>void){
    fn("Hello World!!")
}

function printToConsole(s: string):void {
    console.log(s);
  }
 greet(printToConsole)  

 // type funciton
 type GreetinFun = (a:string)=>void;
 function greet1(fn:GreetinFun){
    return 'hey'
 }