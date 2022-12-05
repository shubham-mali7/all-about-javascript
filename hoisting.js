// hoisting 

// hello();  // calling Function before:

// function hello(){
//     console.log('Hello World!');  //////-Function Declaration 
// }

// let hello = function(){
//     console.log('Hello Shubham!')  /////-Function Expression
// }

// error: Uncaught ReferenceError: Cannot access 'hello' before initialization
// at hoisting.js:3:1
// (anonymous) @ hoisting.js:3  /////Error for Function Expression


// const hello = ()=>{
//     console.log('Hello Shubham!');  //////- Arrow Function
// }

// Uncaught ReferenceError: Cannot access 'hello' before initialization
//     at hoisting.js:3:1
// (anonymous) @ hoisting.js:3  /////Error in case of arrow function 

// When we are able to call a function before in function declaration and not in function expression and arrow function, This behavious is called as Hoisting

// ..........................................................................................

// console.log(a);
// var a = 'Hello world';  

// out: undefined

// let a = 'Hello Shubham';

// hoisting.js:29 Uncaught ReferenceError: Cannot access 'a' before initialization
//     at hoisting.js:29:13
// (anonymous) @ hoisting.js:29


// const a = 'Hello Shubham';


// hoisting.js:29 Uncaught ReferenceError: Cannot access 'a' before initialization
//     at hoisting.js:29:13
// (anonymous) @ hoisting.js:29
