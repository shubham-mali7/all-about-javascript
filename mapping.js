// mapping - array method 

// map method is a very important method while dealing with arrays, it is very very important concept we should know while using React 
// in mapping we should always use return in function 
// ...............example-1..............................


// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Rohan", lastname: "Singh"},
//     {firstname : "Shubham", lastname: "Mali"},
//     {firstname : "Mohan", lastname: "Roy"},
// ]

// function getFullName(item){
//     // return [item.firstname+" "+item.lastname];
//     return [item.firstname,item.lastname].join(" ");
// }

// console.log(persons.map(getFullName));



//...............................................................


// const numbers = [2,4,6,8,9,5]

// const square = (number) => {
// return (number * number);
// }

// const final= numbers.map(square);
// console.log(final);

//.....................................................

// const numbers = [2,4,6,8,9,5]

// const func = function(num,a){
//     return (a);
// }

// const final =numbers.map(func);
// console.log(final);

//...........................................

//  AAKASH SIR EXAMPLES........................

// const a = [-1,0,1,2,3];

// const out = a.map((data)=>{
// return data*2 ;
// })

// console.log(out);


// out: [-2, 0, 2, 4, 6]

//........................

// const out = a.filter((data)=>{
//     return data*2 ;
// })

// console.log(out);


// out: [-1, 1, 2, 3]

// All values are truthy unless they are defined as falsy. That is, all values are truthy except false , 0 , -0 , 0n , "" , null , undefined , and NaN .