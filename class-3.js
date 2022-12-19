class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    if (this.age > 6) {
      console.log(`${this.name} can eat anything as its age is ${this.age}`);
    } else {
      console.log(
        `${this.name} should only drink milk as recommended by Veterinarian.`
      );
    }
  }
}

//   Instead of writing same code for dog again we will now use extends which will have all properties and methods of its constructor  (Animal)

// It will get all properties from the constructor above
class Dog extends Animal {}
class Cat extends Animal {}
class Monkey extends Animal {
  constructor(name, age, color, speed) {
    super(name, age); // super class matlab main parent class(animal),hum js ko keh rahe hai name or age animal se he lena
    this.color = color;
    this.speed = speed;
  }
  run() {
    return `${this.name} is runnig at a speed of ${this.speed}Km/h and is of ${this.color} color`;
  }

  //if same method in sub class , it will be executed

  eat() {
    console.log(`${this.name} can eat anything`);
  }
}

const Charlie = new Animal("Charlie", 10);

console.log(Charlie);
console.log(Charlie.name);
Charlie.eat();

const meow = new Animal("meow", 5);

console.log(meow);
console.log(meow.age);
meow.eat();

const makad = new Monkey("makad", 12, "Brown", 40);
console.log(makad);
console.log(makad.color);
makad.eat();
console.log(makad.run());
