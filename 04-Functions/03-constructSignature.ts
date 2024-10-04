type someConstructor = {
    new (s:string):any;
}

function fub1 (ctor:someConstructor){
    return new ctor("hello")
}

interface CallOrConstruct {
    (n?: number): string;
    new (s: string): Date;
  }
   
function fn(ctor: CallOrConstruct) {

    console.log(ctor(10));
    console.log(new ctor("10"));
                    

}
   
  fn(Date);