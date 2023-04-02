//Array 
var myArray = ["Pranav",19];// Declaration of an Array starts with "["and "]" types of brackets

console.log(myArray);// This will print [ 'Pranav', 19 ]

//Nested Array

var newArray = [["Name",'age'],["Pranav ",19],["Rohan",21]];

console.log(newArray);

//accessing elements in array

var myArray1 = ["Pranav",19];

console.log(myArray1[0]);// THIS will print Pranav which 1st element in the array having index 0

console.log(myArray1[1]);// THIS will print 19 which is 2nd element in the array having index 1

//accessing elements in multidimentional array

var newArray1 = [["Name",'age'],["Pranav",19],["Rohan",21]];

console.log(newArray1[0][0]);// THIS will print Name which 1st element in the multidimentional array having index 0

//Manipulate Array with push()
// with push we add new elements in the end of the array

var newArray2=["Pranav",19,"Rohan",21];

newArray2.push("Mohit",20);

console.log(newArray2);// this will print [ 'Pranav', 19, 'Rohan', 21, 'Mohit', 20 ] i.e "Mohit",20 has been added to the end of the array

//Manipulate Array with pop()
//pop() will pop/delete last element from array

var ourArray = [1,2,3,4,5,6];

var removedFromArray = ourArray.pop();

console.log(removedFromArray);//here removedFromArray has a value of 6 now

console.log(ourArray);// array after pop() function

//Manipulate Array with shift()
//shift() function will remove frist elements from the array

ourArray = ourArray.shift();

console.log(ourArray);// this will print 1 as we have removed frist elements from ourArray 

// Manipulate Array with unshift()
// unsift() wiill add new elements to the start of the array

ourArray.unshift("Hello, world!");

console.log(ourArray);//