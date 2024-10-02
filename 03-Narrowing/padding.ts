function padLeft(padding: number | string, input: string): string {
    if (typeof padding === "number") {
      return (" ".repeat(padding) + input);
    }
    return padding + input;
  }

//typeof values :
//symbol undefined objects functions



// both of these result in 'true'
Boolean("hello"); // type: boolean, value: true
!!"world"; // type: true,    value: true