// reduce method 


// const numbers = [2,3,4,5,6,7,8,9,10];

// // aim : sum of all numbers in array 

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// },0)

// console.log(sum);
// .......................diagram to explain the working ............

// accumulator      currentValue      return
//     2                 3             5  
//     5                  4             9     
//     9                  5             14
//     14                 6             20
//     20                 7             27
//     27                 8             35
//     35                 9             44
//     44                 10            54
// ...............out : 54 .........

const userCart = [
    {productId: 01, productName: 'mobile', price:30000},
    {productId: 02, productName: 'laptop', price:90000},
    {productId: 01, productName: 'watch', price:20000},
    {productId: 01, productName: 'tv', price:70000}
]

const total= userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price;
} ,0)                         //we can use any value also to initialize the accumulator by writing it at the end of the function

console.log(total);