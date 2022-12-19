// new keyword

// 1)  this = {} // creates empty obj which is equal to this
// 2) add and return key value pairs{}
// 3)  const user = Object.create(createUser.prototype) => This step will be completed by new keyword

// __proto__
// offocial ecma script document ==>[[Prototype]]
// Dont get confused both of the above are same

// Constructor function --- Because it is a function which is constructing an object for us
function CreateUser(firstName, lastName, address, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addr = address;
  this.age = age;
  this.email = email;
  // return this; // no need to write this because new keyword return it on its own
}

console.log(CreateUser.prototype);

CreateUser.prototype.about = function () {
  console.log(
    `${this.firstName} ${this.lastName} lives in ${this.addr} and is ${this.age} years old his email ID is ${this.email}`
  );
};

CreateUser.prototype.is18 = function () {
  return this.age >= 18;
};

CreateUser.prototype.sing = function () {
  return `Hrudayat vaje something sare jug vatte happening`;
};

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

console.log(userInfo2);
userInfo1.about();
console.log(userInfo1.is18());

//-----------------------------new keyword is very important!!!

// if we want all keys

// for(key in userInfo1){
//     console.log(key);
// }

// if we want specific keys

// for( let key in userInfo1){

//     if(userInfo1.hasOwnProperty(key)){
//         console.log(key);
//     }

// }
