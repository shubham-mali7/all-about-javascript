//getters and setters

class person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" "); // ---------did array destructuring
    // [Rohan ,Singh]----> this list will be made using the above step
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person1 = new person("Shubham", "Mali", 23);
// console.log(person1);
// console.log(person1.fullName());
// console.log(person1.fullName); // ---using get we are able to use fullname as a property

// person1.setName("Raviraj", "Kappor");
// console.log(person1.firstName);
// console.log(person1.lastName);
// console.log(person1.fullName);

person1.fullName = "Rohan Singh";
console.log(person1);
console.log(person1.fullName);
