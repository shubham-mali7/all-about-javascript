// function expression 
// assigning function to a variable and using that variable as function name is called function expression !

// const singHappyBirthday = function(){
//     console.log('Happy Birthdayy Shubham!');
// }

// singHappyBirthday();
// singHappyBirthday();
// singHappyBirthday();

// arrow Function

// const singHappyBirthday = () =>{
//     console.log("Happy Birtday Shubham using arrow function !");
// }

// singHappyBirthday();

// we cannot use all 3 (function declaration, function expression and arraow function) together .

// make a array of cities and find target city index using arrow function 


// const cities = (myCities, targetCity)=>{
//     for (i=0; i<myCities.length; i++){
//         if(myCities[i]===targetCity){
//             return i;
//         }
//     }return 'City Not Present Dude!'
// }

// const indianCities = ['Mumbai','Delhi','Bangalore','Kolkata','Kerela','Gujrat','Rameshwaram','Nadaun'];


// console.log(cities(indianCities, 'Rameshwaram'));



// odd and even 

// const isEven = (number)=>{
// if(number % 2===0){
//     return `${number} is Even`
// }else{
//     return `${number} is Odd`
// }
// }

// console.log(isEven(99));


// another more simplified way to write arrow functions 
// parameter brackets are removed as only one parameter is used, else brackets are compulsory as per the syntax

// const isEven = number => number % 2 ===0;

// console.log(isEven(4));


