// new keyword Demo--------------------


// function createUser(firstName , age){
//     const user = Object.create(createUser.prototype)   {firstname : Shubham}=> user
//     user.firstName = firstName;
//     user.age = age ;
//     console.log(user);
//     return user;
// }




// createUser.prototype.about = function(){
//     console.log(`${this.firstName}'s age is ${this.age}`  )
//     // console.log(createUser.prototype);
// }
// const user1 = createUser('shubham', 23);
// user1.about();
// console.log(user1.firstName);

//.........................................................................Best method using new

function createUser(firstName, age){
    this.firstName = firstName;
    this.age = age;
}

createUser.prototype.about = function(){
    console.log(`My name is ${this.firstName} and my age is ${this.age}`)
}


const user1 = new createUser('shubham', 23);

console.log(user1);
user1.about();
 

// user1.about();


// new keyword
// 1 {} => creates an empty obj this => this refers to empty obj <= new keyword do this things , we don not have to do it manually 
// 2 return this 
// 3 const user = Object.create(createUser.prototype) => This step will be completed by new keyword 