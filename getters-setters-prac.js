/// getters and setters practise--------

class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  //   setName(firstName, lastName){
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //   }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" "); // ---------did array destructuring
    this.firstName = firstName;
    this.lastName = lastName;
    // [Rohan, Singh] ----->this list will be made using the above step
  }
}

const person1 = new person("Shubham", "Mali", 23);
console.log(person1);
console.log(person1.fullName);

// person1.setName('Rohan', 'Singh');
// console.log(person1);
// console.log(person1.fullName);

person1.fullName = "Rohan Singh";
console.log(person1);
console.log(person1.fullName);
