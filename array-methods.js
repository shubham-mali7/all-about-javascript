// importnat array methods /

// for each 
// map 
// filter 
// reduce

// const numbers = [4,3,5,8]

// function myFunc(number, index){

//     console.log(`number is ${number} and multiplied by 2 is ${number *2}`);
//     console.log(`index no is ${index}`);
// }

// multiplyBy2(numbers[0], 0)
// multiplyBy2(numbers[1], 1)
// multiplyBy2(numbers[2], 2)
// multiplyBy2(numbers[3], 3)




// for(i=0; i<numbers.length; i++){
//     myFunc(numbers[i], i);
// }
   

// now we can use fore each instead of the for loop above it will run the loop on its own 

// numbers. forEach(myFunc);

// ............................................................
// const numbers = [2,3,5,6,7];

// function myfun(number, index){
   
//         console.log(`number is ${number} and multiplied by 2 is ${number*2}, ${index}`)
    
//     }

// numbers.forEach(myfun);

// .....................................

// const users = [
//     {firstName: 'Shubham', age : 22},
//     {firstName: 'rohan', age : 21},
//     {firstName: 'rajesh', age : 22},
//     {firstName: 'rajiv', age : 23}
// ]

// function info(user){
//     console.log(`firstname of user is ${user.firstName}`)
// }

// users.forEach(info);


// out :
// firstname of user is Shubham
// firstname of user is rohan
// firstname of user is rajesh
// firstname of user is rajiv

// ........................................................
// const students = [
//     {identifier: 'user-1',firstname: 'shubham',age: 22 },
//     {identifier: 'user-2',firstname: 'rohan',age: 22 },
//     {identifier: 'user-3',firstname: 'bhaskar',age: 22 },
//     {identifier: 'user-4',firstname: 'Dev',age: 22 },
//     {identifier: 'user-5',firstname: 'Ram',age: 22 }
// ]

// function info(student){
//     console.log(`${student.firstname} is student in Terna Engineering College with id ${student.identifier} and age - ${student.age} `);
// }


// students.forEach(info);     


// out:
// shubham is student in Terna Engineering College with id user-1 and age - 22 
// mapping.js:10 rohan is student in Terna Engineering College with id user-2 and age - 22 
// mapping.js:10 bhaskar is student in Terna Engineering College with id user-3 and age - 22 
// mapping.js:10 Dev is student in Terna Engineering College with id user-4 and age - 22 
// mapping.js:10 Ram is student in Terna Engineering College with id user-5 and age - 22 