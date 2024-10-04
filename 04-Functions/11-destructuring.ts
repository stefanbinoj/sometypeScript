function add ({a ,b,c,d}:{a:number,b:number , c?:number , d?:number}){
    return ;
}
add({a:22,b:3})

// Same as prior example
type ABC = { a: number; b: number; c?: number };
function sum({ a, b, c }: ABC) {
  console.log(a + b + c!);
}
