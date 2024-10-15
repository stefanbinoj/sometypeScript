interface Animal {
    dateOfBirth: any;
  }
class AnimalHouse {
    resident: Animal;
    constructor(animal: Animal) {
      this.resident = animal;
    }
  }


interface Dog extends Animal {
    breed: any;
  }
 
class DogHouse extends AnimalHouse {
    declare resident: Dog;
    constructor(dog: Dog) {
      super(dog);
    }
  }