function myForEach(arr: any[], callback: (arg: any, index: number) => void) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
    }
  }
//toFixed function must recieve atleast one digit as per para or else error 
myForEach([1, 2, 3], (a, i) => {
    console.log(i.toFixed());// now it must have index so remove ? from it would be the gerater idea 

  });