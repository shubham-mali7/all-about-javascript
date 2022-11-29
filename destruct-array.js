const myArray =["value1","value2", "value3","value4","value5"];
// let var1 = myArray[0];
// let var2 = myArray[1];


let [myvar1 , myvar2] = myArray

myvar1 = 'valuechanged';

console,console.log(myvar1);
console,console.log(myvar2);


let newArray = myArray.slice(2);
console.log(newArray);
// console.log(myArray[2]);