// Now if  we are able to create millions of objects easily, still the methods inside the object (about and is18) are getting repeated again and again  for each user ,which takes lot of space in the memory unneccesarily so create a differe object for the methods

const userMethods = {
  about: function () {
    console.log(
      `${this.firstName} ${this.lastName} lives in ${this.addr} and is ${this.age} years old his email ID is ${this.email}`
    );
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, address, age, email) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.addr = address;
  user.age = age;
  user.email = email;
  //store the reference of the methods
  user.about = userMethods.about;
  user.is18 = userMethods.is18;

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
  5,
  "bhaskarv19@gmail.com"
);

userInfo1.about();
userInfo2.about();
userInfo3.about();

console.log(userInfo1);
console.log(userInfo2);
console.log(userInfo3);

// But still we have to improve more , so lets improve in the next file
