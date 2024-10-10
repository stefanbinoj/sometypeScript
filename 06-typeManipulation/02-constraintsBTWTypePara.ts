function getpp <Type,Key extends keyof Type>(obj:Type,key:Key){
    return obj[key];
}

let x ={a:1,b:2,c:3};
getpp(x,'a');
//getpp(x,'z') error


//class constructor funciton
function create<Type>(c:{new ():Type}):Type{
    return new c();
}

// adv class constructor func :
class BeeKeeper {
    hasMask: boolean = true;
  }
   
  class ZooKeeper {
    nametag: string = "Mikle";
  }
   
  class Animal {
    numLegs: number = 4;
  }
   
  class Bee extends Animal {
    numLegs = 6;
    keeper: BeeKeeper = new BeeKeeper();
  }
   
  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }
   
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
   
  createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask;