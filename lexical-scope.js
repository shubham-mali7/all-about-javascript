
const myVar = 'value1';

function myApp(){

function myFunc(){
    // const myVar = 'value39' 
    console.log('Inside myFunc', myVar);

    const inside = () =>{
        console.log('insider value', myVar);
    }    
    inside();
}
const myFunc2 = function(){
    // const myVar = 'value 99'
    console.log('Hello', myVar)
    
}
const myFunc3 = ()=>{}
console.log(myVar);
myFunc2();  
myFunc();

}

myApp();