//Maps Object  (Map method for array is different and map object is different, dont get confused!)

// stores key value pair like object

// Map is iterable
// store data in ordered fashion
// store key-value pair (similar to object)
// duplicate keys are not allowed like in case of object

// DIFFERENCE BETWEEN MAPS AND OBJECTS

// Objects can only have strings and symbol as key

// In map we can use anything as key like array, number, string

// object literals
// key --> string
// key --> symbol

// const person = {
//     firstName : 'Shubham',
//     age : 23,
//     1 : 'one'
// }
// console.log(person.firstName);
// console.log(person['firstName']);
// console.log(person['age']);
// console.log(person['1']);
// console.log(typeof person[1]);

// Map stores key value pair

const person = new Map();

person.set("firstName", "Shubham");
person.set("age", 23);
person.set(1, "one");
person.set([1, 2, 3], ["one", "two", "three"]);
// person.set({firstName : 'Shubham'},{1: 'one'});

// console.log(person);

// console.log(person.get("firstName"));
// console.log(person.get(1));
// // console.log(person.keys())
// for (let key of person.keys()) {
//   console.log(key, typeof key);
// }
// console.log(person.firstName); not a correct way to access keys in Map
// In Map we can insert any type of key

// Objects where no iterable
// But Map is iterable

// For of loop implemented on Map

const sigmaMale = new Map();

sigmaMale.set("fName", "Narendra");
sigmaMale.set("mName", "DamodarDas");
sigmaMale.set("lName", "Modi");
sigmaMale.set("year", 2023);
sigmaMale.set("party", "BJP");
// console.log(sigmaMale);

// for(let [key, value] of sigmaMale){
//     // console.log(Array.isArray(key));
//     console.log(key , value)
// }

// 2nd way to use map

// const modi = new Map([
//   ["fName", "Narendra"],
//   ["MName", "Damodardas"],
//   ["lName", "Modi"],
// ]);

// console.log(modi);

const person1 = {
  id: 2023,
  fname: "Shubham",
  lName: "Mali",
};
const person2 = {
  id: 2022,
  fname: "Ravi",
  lName: "Mali",
};

const userInfo = new Map();

userInfo.set(person1, { age: 23, gender: "male" });
userInfo.set(person2, { age: 18, gender: "male" });

console.log(userInfo);
console.log(person1.id);
// console.log(person1.age)
// for(let info of userInfo){
//     console.log(info[1]);
// }

console.log(userInfo.get(person1).age);
console.log(userInfo.get(person2).age);
console.log(userInfo.get(person1).gender);
console.log(userInfo.get(person2).gender);
