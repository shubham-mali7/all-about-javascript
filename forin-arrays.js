const citys = ["Mumbai","Pune","Gujrat","Ahemdabad","Nagpur"]
const citys2 = []; //empty array created to push all items of array 1 in this array


// for in gives the index of the array items

for(let anything in citys){
    // console.log(anything);
    // console.log(citys[anything]);
    citys2.push(citys[anything].toUpperCase());

}

console.log(citys2);