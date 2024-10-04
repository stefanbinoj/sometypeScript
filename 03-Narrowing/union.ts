interface Shape { 
    type:'circle' | 'square',
    radius?:number,
    side?:number,
}

function handleShape(shape: Shape) {
    if (shape.type === "circle") {
        return Math.PI * shape.radius! ** 2;//non-null assertion (a ! after shape.radius) to say that radius is definitely present.

    }
  }

  function getArea(shape: Shape) {
    if(shape.type != 'square'){
        return Math.PI * shape.radius! ** 2;//non-null assertion (a ! after shape.radius) to say that radius is definitely present.

    }

  }  