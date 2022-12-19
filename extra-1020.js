// let numbers = [1,2,3,4];
let numbers = new Array(1, 2, 3, 4, 5);
// console.log(Array.prototype);
console.log(Object.getPrototypeOf(numbers));

// prototype --- functions

// internally javascript creates array by using array constructor
console.log(numbers);

function hello() {
  console.log("Hello world");
}

// hello();
// console.log(hello.prototype);
// hello.prototype = [];
// console.log(hello.prototype);
// hello.prototype.push('shubham');
// console.log(hello.prototype);

//-----------------------------------------------------------------------------------------------
// New keyword in JavaScript is used to create an instance of an object that has a constructor function. On calling the constructor function with ‘new’ operator, the following actions are taken:

//1 A new empty object is created.
//2 The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
//3 The ‘this’ variable is made to point to the newly created object. It binds the property which is declared with ‘this’ keyword to the new object.
//4 About the returned value, there are three situations below.
//5 If the constructor function returns a non-primitive value (Object, array, etc), the constructor function still returns that value. Which means the new operator won’t change the returned value.
//6 If the constructor function returns nothing, ‘this’ is return;
//7 If the constructor function returns a primitive value,  it will be ignored, and ‘this’ is returned.
