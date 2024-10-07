interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: unknown;
  }
  // SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.