// Create Functions to create multiplr Objects --------------------------

// const user = {
//     firstName : 'Shubham',
//     lastName : 'Mali',
//     age : 23,
//     address : 'Dombivali, Mumbai',
//     email : 'shubhammali31299@gmail.com',
//     about : function(){
//         console.log(`${this.firstName} ${this.lastName} lives in ${this.address} and is ${this.age} years old his email ID is ${this.email}`)
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }

// }

// console.log(user.firstName);
// console.log(user.lastName);
// user.about();
// console.log(user.is18());

//----------------------------------

// What if I want  such information of million of users in form of object we cant do it likethis on our own , it becomes very tedious ..................
// So to make our work easy we have to create a function which will do this work for us
// We will now make a function which will create objects for us
// This is a better approach
// we will create a functon which will take firstname lastname and other info which we need in form of input and will return us the object of that info
// function
// 1 that function create obj
// 2 add key value pair
// 3 obj ko return karega

function createUser(firstName, lastName, address, age, email) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.addr = address;
  user.age = age;
  user.email = email;
  user.about = function () {
    console.log(
      `${this.firstName} ${this.lastName} lives in ${this.addr} and is ${this.age} years old his email ID is ${this.email}`
    );
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

// Now lets create a object using above function

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
const userInfo3 = createUser(
  "Bhaskar",
  "Vankala",
  "Chembur",
  24,
  "bhaskarv19@gmail.com"
);

console.log(userInfo1);
console.log(userInfo2);
console.log(userInfo3);
userInfo1.about();
userInfo2.about();
userInfo3.about();
console.log(userInfo1.is18());
console.log(userInfo2.is18());
console.log(userInfo3.is18());

// Wohoo! , we have created a function which creates an object for us
// But still it has a loopHole,///////Kamiya hai i mean!
