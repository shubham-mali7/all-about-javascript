// methods 
// Function inside object 

// const person = {
//     firstName : 'Shubham',
//     age : 22,
//     about : function(){
//         console.log(`My name is ${this.firstName}, and age is ${this.age}`);
//         console.log(this);
//     }
// }

// console.log(person.firstName)
// console.log(person.age)
// console.log(person.about())



function personInfo(){
    console.log(`My name is ${this.firstName}, and age is ${this.age}`);
    console.log(this);
}

const person1 = {
    firstName : 'Shubham',
    age : 22,
    about : personInfo
}
const person2 = {
    firstName : 'Rohan',
    age : 20,
    about : personInfo
}
const person3 = {
    firstName : 'Bhaskar',
    age : 2,
    about : personInfo
}

person1.about();
person2.about();
person3.about();