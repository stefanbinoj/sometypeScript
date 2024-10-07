///intersection types 
interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle1 = Colorful & Circle;
  //Here, we’ve intersected Colorful and Circle to produce a new type that has all the members of Colorful and Circle
  