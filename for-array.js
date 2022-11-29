let fruits = ["apple","grapes","mango","banana","pineapple"];
let array2 = [...fruits];
console.log(fruits);    
// console.log(fruits.length);
console.log(fruits.length-1);



for(let i = 0 ; i<=fruits.length-1; i++){

    console.log(fruits[i]);
    // console.log('All in uppercase from now')
   
}

 console.log('All in uppercase from now')

for(let j = 0 ; j<=fruits.length-1; j++){

    console.log(array2[j].toUpperCase());
}
