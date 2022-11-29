const users = [
    {userId : 1, name : 'shubham', gender : 'male'},
    {userId : 2, name : 'rohan', gender : 'male'},
    {userId : 3, name : 'rahul', gender : 'male'}
]

// for (let info of users) {
// console.log(info);
// }

// const[user1 , user2 , user3]= users
// console.log(user1);
// console.log(user2);

// This is called nested destructuring 
const[{name: firstName , userId} , ,{gender}] = users
console.log(firstName);
console.log(userId);
console.log(gender);


// console.log(users);
