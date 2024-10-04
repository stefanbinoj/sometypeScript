// this is hte signature of passing property 
type desiredfun = {
    desc : string,
    (someNum : number) : boolean //note like arrow function
}
function doSmth(fn:desiredfun){
    console.log(fn.desc + " returned " + fn(6));

}

function myfun(someNum : number){
    return someNum >6;
}
myfun.desc='hfhrufu'

doSmth(myfun)