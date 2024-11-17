function myForEach<T>(arr: T[], callback: (arg: T, index: number) => void) {
  for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i);
  }
}

// Example usage
myForEach([1, 2, 3], (a, i) => {
  console.log(i.toFixed(0)); // No error, prints the index as a string with 0 decimal places
});
