// find method 

// find method only gives output on its first occurence and ignore rest of the others

// const animals = ['cat', 'dog','buffalo', 'tiger', 'lion']

// function isLength3(string){
// return string.length === 3; 
// }

// const out = animals.find(isLength3);
// console.log(out);


//...............................................

// const myArray = ['hello', 'meow', 'cat', 'doggy', 'rat' ,'hero', 'elephant'];

// const out = myArray.find((string)=>{
//  return string.length === 4; 
// })

// console.log(out);

//.................................................


const users = [
    {userId: 'u1', userName: 'Shubham'},
    {userId: 'u2', userName: 'Sam'},
    {userId: 'u3', userName: 'Sanjeev'},
    {userId: 'u4', userName: 'Shyam'},
    {userId: 'u5', userName: 'Sundar'},
    {userId: 'u6', userName: 'Shiva'},
]

const out = users.find((findUser)=>{
return findUser.userId === 'u3';
})

console.log(out);