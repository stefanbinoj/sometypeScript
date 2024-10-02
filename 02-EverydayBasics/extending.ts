type animeal = {
    name : string
}
type bird = animeal & {
    legs:number;
}
// type animeal = {
//     fly:boolean
// }

// using interface :

interface animal1  {
    name: string
}
interface bird1 extends animal1{
    legs:number
}
interface animal1{
    fly:boolean
}