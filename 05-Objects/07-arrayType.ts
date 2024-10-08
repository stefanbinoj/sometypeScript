// numbers [] ===Array<numbers>
//string [] === Array<string>
//Much like the Box type above, Array itself is a generic type.

//read only array 

function dosmth1 (values : ReadonlyArray<string>){
    //cant mutatte value here since readonly is present 
    const copy = values.slice();
  console.log(`The first value is ${values[0]}`);
 
  // ...but we can't mutate 'values'.
  //values.push("hello!");

}

// ReadonlyArray<Type> === readonly type[]