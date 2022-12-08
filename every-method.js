// every-method 
// callback function returns boolean output
// evry method returns boolean
// evry method returns true when  condition applied is true for all elements else will return false

// const numbers = [2,4,6,8,10];

// const out = numbers.every((num)=>{
// return num % 2 === 0 ;
// })


// console.log(out);
// ............................................

// Every method check each element and matches the condition if not then output will be false

// const students = [
//     {studentId:1, studentName: 'Raghav', stream: 'Science'},
//     {studentId:2, studentName: 'Raj', stream: 'Science'},
//     {studentId:3, studentName: 'Ram', stream: 'Commerce'},
//     {studentId:4, studentName: 'Ritesh', stream: 'Science'},
//     {studentId:5, studentName: 'Rajeev', stream: 'Arts'},
// ]

// const result = students.every((student)=>{
// return student.stream === 'Science'
// })

// console.log(result);

// out: false

//......................................................


const userCart = [
    {productId: 01, productName: 'mobile', price:30000},
    {productId: 02, productName: 'laptop', price:90000},
    {productId: 01, productName: 'watch', price:20000},
    {productId: 01, productName: 'tv', price:70000}
]

// check wether every product has price less than 30000


const evaluation = userCart.every((product)=>{
return product.price < 30000
})

console.log(evaluation);


out: false

