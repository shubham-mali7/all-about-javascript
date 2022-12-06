function myFunc(){
    function hello(){
        // console.log('hello bhau')
        return 'hello bhau';
    } 
    return hello;
}

const ans = myFunc();
// console.log(ans);
console.log(ans());

// this is called function returning function 