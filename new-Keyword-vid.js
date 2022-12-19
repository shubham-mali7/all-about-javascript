// function createUser(firstName, lastName, address, age, email) {
//     const user = Object.create(createUser.prototype); //{} gives an empty obj and also access to its properties
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.addr = address;
//     user.age = age;
//     user.email = email;

//     return user;
//   }

//   createUser.prototype.about = function(){
//     console.log(`Hello my name is ${this.firstName} and i live in ${this.addr} and my email is ${this.email} and my brothers name is ${this.brother}`)
//   };
//   createUser.prototype.brother = 'Raviraj';

//   const user1 = createUser('Shubham', 'Mali', 'Mumbai', 23, 'shubhammali344@gmail.com')
//   console.log(user1);
//   console.log(user1.brother);

//   user1.about();

//------------------------------

function createUser(firstName, lastName, address, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addr = address;
  this.age = age;
  this.email = email;
}

createUser.prototype.about = function () {
  console.log(`${this.firstName} is a great boy and lives in ${this.addr}`);
};

const user = new createUser(
  "shubham",
  "mali",
  "mumbai",
  23,
  "shubham@gmail.com"
);

console.log(user);
user.about();

//.............................................................................................

// used this file for the purpose of video
