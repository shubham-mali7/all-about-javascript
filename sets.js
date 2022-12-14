// sets (It is iterable)
// it stores data
// sets also have its own methods
// No index-based access
// Order is not gaurenteed
// unique items only (No duplicated allowed)

// const numbers = new Set([1,2,3,4,])
// console.log(numbers)

// Generally sets are written empty and then elements are added to it
const arr = ["item1", "item2", "item3"];
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(8);
// numbers.add(3);
numbers.add(arr);
// numbers.add(arr);
// numbers.add(arr); // Sets are unique so only one of them will be printed
numbers.add(["item1", "item2", "item3"]);
numbers.add(["item1", "item2", "item3"]); // Javascript will see it as uniquely as both will be stored on different memory so both will be printed
const check = numbers.has(1);
console.log(check); // will return true because has() will check for 1 in sets

console.log(numbers);

for (let item of numbers) {
  console.log(item);
}

const myArray = [1, 2, 3, 2, 3, 4, 3, 2, 3, 4, 3, 2, 5, 5, 6, 6, 5, 6];

const unique = new Set(myArray);
console.log(unique);
// console.log(unique.length);  // we cant check length in a set
console.log(myArray);
const intoArr = Array.from(unique);
console.log(intoArr);
console.log(intoArr.length);

// 2nd way to check lenght of sets
let length = 0;
for (let element of unique) {
  length++;
}
console.log(length);

// ..............................................................
// const  ratingData =
// [
// {restaurant: 'KFC', rating:5},
// {restaurant: 'Burger King', rating:4},
// {restaurant: 'KFC', rating:3},
// {restaurant: 'Domino', rating:2},
// {restaurant: 'Subway', rating:3},
// {restaurant: 'Domino', rating:1},
// {restaurant: 'Subway', rating:4},
// {restaurant: 'Pizza Hut', rating:5}

// ]

// const uniqueRestaurants = new Set(ratingData.map((obj)=>{
//     return obj.restaurant
// }));
// console.log(uniqueRestaurants);
// console.log(uniqueRestaurants[3]) // we cant access sets using index no

// const out =  Array.from(uniqueRestaurants) ;
// console.log(out);
// console.log(out[2]); // we can access array using index no
// // so over here i converted sets into array and then access its element using index no

// .............................................................................................................
