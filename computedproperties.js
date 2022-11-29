const key1 = "objKey1"
const key2 = "objKey2"

const value1 = "myvalue1";
const value2 = "myvalue2";

// const obj = {
//     objKey1 : "myvalue1" ,
//     objKey2 : "myvalue2"
// }

const obj = {
    [key1] : value1,
    [key2] : value2,

}

console.log(obj);

// out:
// {objKey1: Array(1), objKey2: Array(1)}objKey1: ['myvalue1']objKey2: ['myvalue2'][[Prototype]]: Object