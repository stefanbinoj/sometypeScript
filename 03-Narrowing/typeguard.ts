//type guards:
//if typeof
// truthiness &&
// in operator 
//instance of 

function narrow(a:string | Date | null):void{
    if(a && a instanceof Date){
        //truthiness + instance 
    }
    else if(typeof a ==='string'){
        //
    }
}

type Fish= {swim:()=>{}}
type Bird = {fly:()=>{}}
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }// pet is Fish is our type predicate in this example.