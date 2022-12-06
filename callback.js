// function myFunc(a){
//     // console.log(a);
//     console.log('Hello world!')

    
// }

// function callback(){
//     console.log('inside callback');
// }
// let ans = callback()
// myFunc(ans);


// accepting a function as an input and calling it is called callback Function 


const myFunc2 = (name)=>{
    console.log('inside func2 ');
    console.log(`My name is ${name}` )
    
}

function myFunc(callback){
    console.log(1+2);
    callback('shubham');
    // console.log(a);
    // console.log('hello buddy!')
}

myFunc(myFunc2);

// accepting a function as an input ina function 