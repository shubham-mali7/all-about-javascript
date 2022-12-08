// splice method

// CHANGES THE ORIGINAL ARRAY 
// start , delete , insert

// array ke bich mai jab kuch delete ya insert karna ho tab use hota hai splice method 


// delete
// delete item-3

// const myArray = ['item-1','item-2','item-3','item-4']

// myArray.splice(2,1)           //.splice(started at index 2, how many items to delete -1, nothing to insert )
// console.log(myArray);


// out: ['item-1', 'item-2', 'item-4']  // item-3 got deleted
//.....................................................................................
 //insert  

// const numbers = [1,2,3,6,7,8,9]

// // write down the missing numbers in above array using splice 

// numbers.splice(3,0,4,5);
// console.log(numbers)

// out: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//.............................................................

// insert

// const myArray = ['item-1','item-2','item-3','item-4']

// myArray.splice(2,0,'inserted item');
// console.log(myArray);

// out : ['item-1', 'item-2', 'inserted item', 'item-3', 'item-4']

//........................................................................

// const myArray = ['item-1','item-2','item-3','item-4']

// const deletedItems = myArray.splice(1, 2);
// console.log("deleteditems",deletedItems);
// console.log(myArray);


// out :   deleteditems (2) ['item-2', 'item-3']
//        ['item-1', 'item-4']


//.............................................................................


// insert and delete together 


const myArray = ['item-1','item-2','item-3','item-4']

const deletedItem = myArray.splice(1,1,'inserted-after');

console.log(myArray);
console.log("i am deleted", deletedItem);

// out : (4) ['item-1', 'inserted-after', 'item-3', 'item-4']
//           i am deleted ['item-2']