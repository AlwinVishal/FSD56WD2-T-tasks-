let obj1={name:"person",age:5}
let obj2={age:5,name:"person"}

let sortedObj1 = Object.entries(obj1).sort();
let sortedObj2 = Object.entries(obj2).sort();

 function compare() {
    if(JSON.stringify(sortedObj1)===JSON.stringify(sortedObj2)){
        console.log("true")
    }
}

compare();