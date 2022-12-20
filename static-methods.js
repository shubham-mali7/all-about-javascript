// static methods and properties ------------ which can directly called by the class

class student {
  constructor(name, age, field, hobbie) {
    this.name = name;
    this.age = age;
    this.field = field;
    this.hobbie = hobbie;
  }
  //----------> static method
  static classInfo() {
    return `This is student class`;
  }

  //--------> static property
  static prop = "My static property";

  studInfo() {
    return `${this.name} is a student of ${this.field} and his hobbie is ${this.hobbie}.`;
  }

  get is18() {
    if (this.age > 18) {
      return `${this.name} is allowed to apply for driving license`;
    } else {
      return `${this.name} is not allowed to apply for driving license`;
    }
  }
}

const student1 = new student("Bhaskar", 22, "Naval Engineering", "Cricket");
const student2 = new student("Rohan", 18, "Computer Engineering", "Driving");

console.log(student1);
console.log(student1.studInfo());
console.log(student1.is18);

console.log(student.classInfo()); // a class can directly call a method using static keyword
console.log(student.prop);

//----------End of 11 Hours of js tutorial part-1 -----Now lets go for part 2------------->
