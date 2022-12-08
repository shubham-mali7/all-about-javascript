// some method 


// const numbers = [1, 3, 4, 5, 8];

// // check wether isme kya koi aisa number hai jo even hai 

// const out = numbers.some((num)=>{
//     return num % 2 === 0 ;
// })


// console.log(out);

// out: true


//.........................................

// const numbers = [1, 3, 1, 7, 9];

// // check wether isme kya koi aisa number hai jo even hai 

// const out = numbers.some((num)=>{
//     return num % 2 === 0 ;
// })


// console.log(out);

// // out: false


//...............................................


const userCart = [
    {productId: 01, productName: 'mobile', price:30000},
    {productId: 02, productName: 'laptop', price:90000},
    {productId: 01, productName: 'watch', price:20000},
    {productId: 01, productName: 'tv', price:70000}
]

// check wether isme kya koi aisa product hai jiska price 80000 se bada hai 


const result = userCart.some((product)=>{
return product.price > 80000;
})

console.log(result);

// out: true

