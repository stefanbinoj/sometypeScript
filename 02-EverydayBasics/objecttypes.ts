function printObjects (obj : {name : string , age ?: number}):number{
    return obj.name , obj.age;
}

printObjects({name:"stefan"});