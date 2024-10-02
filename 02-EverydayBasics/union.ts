function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId(90
  )

function nnn(any: string | number | boolean){
    return any;
}