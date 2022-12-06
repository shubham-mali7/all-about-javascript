// filter method 

    // Call back function of filter should always return boolean value

    const numbers = [1,2,3,4,5,6,7,8,9,10,12]

    const isEven = (number) =>{
        return number % 2 == 0;                //returned value should always be boolean 
    }

    let final = numbers.filter(isEven);
    console.log(final);

    const isOdd = (number) =>{
        return number % 2 !== 0;                //returned value should always be boolean 
    }

    let finalOdd = numbers.filter(isOdd);
    console.log(finalOdd);