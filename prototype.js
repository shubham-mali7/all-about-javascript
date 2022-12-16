function hello(){
    console.log('hello world') //-------------------Prototype is present in functions
}

// const hello = {key1 : 'Value1'} ---------------Prototype is not present in objects 

// const hello = ['value1','value2']  //---------------Prototype is not present in arrays


//.................................................................................
// Javascript functions are ===> Functions and also are treated as objects

// console.log(hello.name)

// you can also add your own properties 


hello.myOwnProperty = 'Very Unique Property'

// console.log(hello.myOwnProperty);

// Overhere we can see how we are treating a function like an object 
// So remeber : 'Function Function ki tarah kaam toh karenge lekin sath mai vo object ki taraha bhi kaam karenge'


// Function provides more useful properties 
// Function provide methods like call, apply and bind 

// Function provide empty object to us // {} // --------> Prototype

console.log(hello.prototype);

//Only Functions provide prototype property --------->!important 

if(hello.prototype){
console.log('Prototype is present');

}else{
console.log('Prototype is not present');
}


// hello.prototype.color = 'orange';
// hello.prototype.letters = 'abc';
// hello.prototype.sing = function(){
//     return `Lets Sing Zingat`;
// };
// console.log(hello.prototype.sing());
// hello.secondProp = 'my Second Property';
// console.log(hello.prototype);