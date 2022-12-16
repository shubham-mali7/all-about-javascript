const obj1 = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};
const obj2 = Object.create(obj1); // this will return a empty object
// console.log(obj2);  //{}

obj2.key2 = "Unique";

// console.log(obj1.key1);
// console.log(obj1.key2);
// console.log(obj1.key3);
// console.log(obj2.key1);
// console.log(obj2.key2);
// console.log(obj2);
// console.log(obj2.__proto__);

// __proto__  in js and in ecmascript its written as [[prototype]] are completely same

// but prototype used in js with functions are different from the above mentioned

// abhi hamne bath ki __proto__ jisko documentation mai  [[prototype]] bhi likha hua ho sakta hai
// browser ki console mai __proto__  bhi likha hosakta hai aur [[prototype]] bhi likha ho sakta hia
//javascript mai ek prototype property alag se bhi hoti hai

const userMethods = {
  about: function () {
    console.log(
      `${this.firstName} ${this.lastName} lives in ${this.addr} and is ${this.age} years old his email ID is ${this.email}`
    );
  },
  is18: function () {
    return this.age >= 18;
  },
  sing: function () {
    return `Hrudayat vaje something sare jug vatte happening`;
  },
};

function createUser(firstName, lastName, address, age, email) {
  const user = Object.create(userMethods); //{} gives an empty obj and also access to usermethods obj
  user.firstName = firstName;
  user.lastName = lastName;
  user.addr = address;
  user.age = age;
  user.email = email;

  return user;
}

const userInfo1 = createUser(
  "Shubham",
  "Mali",
  "Mumbai",
  23,
  "shubhammali31299@gmail.com"
);
const userInfo2 = createUser(
  "Rohan",
  "Singh",
  "Pune",
  24,
  "rohansingh99@gmail.com"
);

console.log(userInfo2);
userInfo1.about();

// create ek relationship establish karta hai ek bond tayar karta hai

// ------------------------- Very Very Very Important Concept ------------------------//
