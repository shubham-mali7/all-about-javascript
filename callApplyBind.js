// call apply bind

// const user1 = {
//     fName : 'Shubham',
//     age : 22,
//     city : 'Mumbai',
//     about : function(hobby , favArtist){
//         console.log(this.fName, this.city, this.age, hobby, favArtist)
//     }
// }
// const user2 = {
//     fName : 'Rohan',
//     age : 21,
//     city : 'Chennai',
// }

// // how can user 2 have access for about in user1 ?

// // user1.about.call(user2);   //--------------------Call
// // user1.about();
// // user1.about.call(user1, "Coding","Rishabh Shetty")
// user1.about.call(user2, "Sleeping","Himesh Reshamiya")

function about(hobby, favArtist) {
  console.log(this.fName, this.city, this.age, hobby, favArtist);
  console.log(this);
}

const user1 = {
  fName: "Shubham",
  age: 22,
  city: "Mumbai",
  info: about,
};
const user2 = {
  fName: "Rohan",
  age: 21,
  city: "Chennai",
};

// user1.info('cricket','madhavan')
// user1.info.call(user2,  "Sleeping","Himesh Reshamiya")

// Apply --------------------------Simillar to call ,only the difference is to pass the arguments in array thats it

// user1.info.apply(user2,[ "Sleeping","Himesh Reshamiya"] )

//Bind ------------------------- Bind will just store itslef as a function so that we can call it anytime

// const func = about.bind(user2,  "Sleeping","Himesh Reshamiya")

// func();

//----------------------------------------- Call , apply, bind Completed

const myFunc = user1.info.bind(user1);
myFunc();
