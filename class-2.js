// practise of class

// 1. create an animal class
// 2. animal will have 2 properties - name and age
// 3. create a method named eat

// we are writing this constructor function because it returns object
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat(){
    if (this.age > 6 ){
        console.log(`Animal can eat anything as its age is ${this.age}`)
    }else{
        console.log(`Animal should only drink milk as recommended by Veterinarian.`)
    }
  }
}

// new keyword should always be used if we want to call the constructor 
const animal1 = new Animal('Bali', 10);

console.log(animal1);
animal1.eat()




//-------------------------------------------

class Dog {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    eat(){
      if (this.age > 6 ){
          console.log(`Animal can eat anything as its age is ${this.age}`)
      }else{
          console.log(`Animal should only drink mothers milk as recommended by Veterinarian.`)
      }
    }
  }
  
  // new keyword should always be used if we want to call the constructor 
  const tom = new Dog('tom', 5);
  
  console.log(tom);
  tom.eat()



  // To simplify this code and to learn about extends lets go into new file class-3.js