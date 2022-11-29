const citys = ["Mumbai","Pune","Gujrat","Ahemdabad","Nagpur"]
const citys2 = []; //empty array created to push all items of array 1 in this array

for(let city of citys){
    citys2.push(city.toUpperCase());
}

console.log(citys2);