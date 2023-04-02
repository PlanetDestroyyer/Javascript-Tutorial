// Normal Functions

function add(a,b){
    return a+b;
}

console.log(add(10,20));// "30"

//The above Function can be written in Arrow function as follows

newAdd = (a,b) => a+b;
console.log(newAdd(10,20));// "30"

//Example 1:

myConArr = (arr1,arr2) => arr1.concat(arr2);

console.log(myConArr([1,2],[3,4])) // "[ 1, 2, 3, 4 ]"