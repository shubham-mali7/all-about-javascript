const user ={
    fname : "Shubham",
    age : 23,
    city : "Mumbai",
    about :  function(){
        console.log(`My name is ${this.fname} and I live in ${this.city}`)
        console.log(this);
    }
}

// user.about()
// console.log(user.fname);

//..................................................................................

// For arrow Functions this take the value from its surrounding that is window 

const user2 ={
    fname : "Rohan",
    age : 23,
    city : "Chennai",
    about :  () => {
        console.log(`My name is ${this.fname} and I live in ${this.city}`)
        console.log(this);
    }
}

// user2.about();

// out : My name is undefined and I live in undefined


// Short syntax to write method -------------------------------------------


const user3 ={
    fname : "Bhaskar",
    age : 23,
    city : "Chembur",
    about(){
        console.log(`My name is ${this.fname} and I live in ${this.city}`)
        console.log(this);
    }
}

// user3.about();