// sort method 
// ASCII TABLE 
//char : ascii value


// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57


// ':' : 58
// ';' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64


// 'A' : 65
// 'B' : 66
// 'C' : 67
// 'D' : 68
// 'E' : 69
// 'F' : 70
// 'G' : 71
// 'H' : 72
// 'I' : 73
// 'J' : 74
// 'K' : 75
// 'L' : 76
// 'M' : 77
// 'N' : 78
// 'O' : 79
// 'P' : 80
// 'Q' : 81
// 'R' : 82
// 'S' : 83
// 'T' : 84
// 'U' : 85
// 'V' : 86
// 'W' : 87
// 'X' : 88
// 'Y' : 89
// 'Z' : 90



// '[' : 91
// '\' : 92
// ']' : 93
// '^' : 94
// '_' : 95
// '`' : 96



// 'a' : 97
// 'b' : 98
// 'c' : 99
// 'd' : 100
// 'e' : 101
// 'f' : 102
// 'g' : 103
// 'h' : 104
// 'i' : 105
// 'j' : 106
// 'k' : 107
// 'l' : 108
// 'm' : 109
// 'n' : 110
// 'o' : 111
// 'p' : 112
// 'q' : 113
// 'r' : 114
// 's' : 115
// 't' : 116
// 'u' : 117
// 'v' : 118
// 'w' : 119
// 'x' : 120
// 'y' : 121
// 'z' : 122
// '{' : 123
// '|' : 124
// '}' : 125

// ................................................

// sort

// sort method will mutate the original array 
// while sorting for ex any Number, sort will sort it as a string not as number 

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// const numbers = [202, 34 ,1,44,5000,2000]

// How js is looking it ["202","34","1","44","5000","2000"]

// console.log(numbers.sort());

// not an expected output
// out:  [1, 2000, 202, 34, 44, 5000] ---> [ 49, (50 48 48), (50 48 50), 51, 52, 53]



// const userNames = ['harshit', 'abhay', 'aachal', 'baban', 'zoya', 'Harshit', 'Aakash']

// const out = userNames.sort()
// console.log(out);

// out: ) ['Aakash', 'Harshit', 'aachal', 'abhay', 'baban', 'harshit', 'zoya']

// .............................................

// sorting in proper ascending and descending manner

// const numbers = [202, 34 ,1,44,5000,2000]

// numbers.sort((a,b)=>{
// return a-b;
// })

// console.log(numbers);

//  [1, 34, 44, 202, 2000, 5000]         ------> Ascending order


// process explaination 

// a-b ---> positive ---> (greater than 0)----> b, a
// 202 , 34 ---> 202 - 34 ---> 168 ----> positive value ---> 34 , 202

// a-b ---> negative ---> (less than 0)----> a, b
// 1 , 44 ---> 1 - 44 ---> -43 ----> negative value ---> 1 , 44
//...............................................................


// const numbers = [202, 34 ,1,44,5000,2000]

// numbers.sort((a,b)=>{
//     return b - a ;
// })

// console.log(numbers);

// [5000, 2000, 202, 44, 34, 1]            ------> Desscending order                    


// process explaination 

// b-a ---> positive ---> (greater than 0)----> b, a
// 202 , 34 ---> 202 - 34 ---> 168 ----> positive value ---> 202 , 34

// b-a ---> negative ---> (less than 0)----> a, b
// 1 , 44 ---> 1 - 44 ---> -43 ----> negative value ---> 44 , 1

//..............................................

// realistic example 

// Sorting from low to high price 

const products = [
    {productId: 01, productName: 'p1', price: 3000},
    {productId: 02, productName: 'p2', price: 300},
    {productId: 03, productName: 'p3', price: 500},
    {productId: 04, productName: 'p4', price: 1000},
    {productId: 05, productName: 'p5', price: 7000}
]

const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price;
})
 
// console.log(products)
console.log(lowToHigh);

//.............................................................
// Sorting from high to low price 

// const products = [
//     {productId: 01, productName: 'p1', price: 3000},
//     {productId: 02, productName: 'p2', price: 300},
//     {productId: 03, productName: 'p3', price: 500},
//     {productId: 04, productName: 'p4', price: 1000},
//     {productId: 05, productName: 'p5', price: 7000}
// ]

// const highToLow = products.slice(0).sort((a,b)=>{
//     return b.price - a.price;
// })
 
// // console.log(products);
// console.log(highToLow);

