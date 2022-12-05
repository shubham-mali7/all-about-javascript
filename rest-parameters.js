// rest parameters


// const myFunc =(a,b,...c)=>{
// console.log(`value of a is${a}`)
// console.log(`value of b is${b}`)
// console.log('value of c is',c)
// }

// myFunc(1,2,3,4,5,6,7);

// value of a is1
// rest-parameters.js:6 value of b is2
// rest-parameters.js:7 value of c is (5) [3, 4, 5, 6, 7]


// addAll(1,2,3,4,5,6,7,8)

// function addAll(...a){
// console.log("a is ", a);
// var sum = 0;                                                //1,3,6,10,15,21,28,36,46,68
// for(i=0; i<a.length; i++){
//      sum += a[i]
// }
// console.log(`sum is ${sum}`)
// }

// addAll(1,2,3,4,5,6,7,8,10,22);


// harshits method 

function addAll(...numbers){
    let total = 0;
    for (let number of numbers){
        // console.log(number);
        total = total + number;
    }
    return total ;
}

const ans = addAll(2,3,4,5);
console.log(ans);