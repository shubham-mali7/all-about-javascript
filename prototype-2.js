// Using prototype

// const userMethods = {
//     about: function () {
//       console.log(
//         `${this.firstName} ${this.lastName} lives in ${this.addr} and is ${this.age} years old his email ID is ${this.email}`
//       );
//     },
//     is18: function () {
//       return this.age >= 18;
//     },
//     sing: function () {
//       return `Hrudayat vaje something sare jug vatte happening`;
//     },
//   };

function createUser(firstName, lastName, address, age, email) {
  const user = Object.create(createUser.prototype); //{} gives an empty obj and also access to usermethods obj
  user.firstName = firstName;
  user.lastName = lastName;
  user.addr = address;
  user.age = age;
  user.email = email;

  return user;
}

console.log(createUser.prototype);

createUser.prototype.about = function () {
  console.log(
    `${this.firstName} ${this.lastName} lives in ${this.addr} and is ${this.age} years old his email ID is ${this.email}`
  );
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return `Hrudayat vaje something sare jug vatte happening`;
};

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
console.log(userInfo1.is18());

// __proto__ or [[Prototype]] is a reference of chain you create

// prototype is simply a object

// Both are completely different
