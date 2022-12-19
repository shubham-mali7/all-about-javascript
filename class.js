// in es6 ------ class
// class keyword
// class are fake actually -----as it works internally
// nothing to return, because it returns an object bydefault

class CreateUser {
  constructor(firstName, lastName, address, age, email) {
    console.log("Constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.addr = address;
    this.age = age;
    this.email = email;
  }

  about() {
    console.log(
      `${this.firstName} ${this.lastName} lives in ${this.addr} and is ${this.age} years old his email ID is ${this.email}`
    );
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    console.log(`Hrudayat vaje something sare jug vatte happening`);
  }
  func(a) {
    if (a % 2 == 0) {
      console.log(`${a} is even`);
    } else {
      console.log(`${a} is odd`);
    }
  }
}

//REMEMBER : without new keyword we cannot create object
const userInfo1 = new CreateUser(
  "Shubham",
  "Mali",
  "Mumbai",
  23,
  "shubhammali31299@gmail.com"
);
const userInfo2 = new CreateUser(
  "Rohan",
  "Singh",
  "Pune",
  24,
  "rohansingh99@gmail.com"
);

console.log(userInfo1);
userInfo1.about();
console.log(userInfo1.is18());
console.log(userInfo2);
userInfo1.func(2822);

console.log(Object.getPrototypeOf(userInfo1));

// Using classes we are able to write constructor functions and methods in prototype together in on place easily
