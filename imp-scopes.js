// 2 important scopes

// Block scope and function scope

// let and const are block scope
// var is a function scope 


// {
//     scope between this to braces is a block scope
// }

// {
//     let firstName = 'Shubham';
//     console.log(firstName);
// }

// {
//     console.log(firstName);
// }
// console.log(firstName);
// .................................................................

let lastName = 'Mali'
{
    {
        var firstName= 'Shubham'
        console.log(firstName+"",lastName);
    }
    {
        console.log(firstName);
        console.log(lastName);
    }
    {
        console.log(lastName);
    }
}
