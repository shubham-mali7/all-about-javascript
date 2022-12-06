// parameter destructuring

// used with object
// used mostly in react 

const person = {
    name: 'Shubham Mali',
    Profession : 'Software Developer',
    age: '23',
    gender : 'male'
}
// methods to write function
// function obj(){                   //function declaration

// }

// const obj = function(){          // function expression

// }

// const obj = ()=>{                // arrow function 

// }


// const getDetails = function(obj){
//  console.log(obj.name)
//  console.log(obj.Profession)
//  console.log(obj.age)
//  console.log(obj.gender)
// }
const getDetails = function({name , Profession, age, gender}){
    console.log(name);
     console.log(Profession);
     console.log(age);
     console.log(gender);
}

getDetails(person);