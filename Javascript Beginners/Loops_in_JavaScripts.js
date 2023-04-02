// while loop
// untill the condition satisfies the while loop it gonna run 

var myArray = [];// defined array

var i = 0;

while (i < 5){//till the value of i meets the condition it will run i.e. here till i value becomes more than 5 it will run in loop

    myArray.push(i);// pushing elements in myArray with the help of push function

    i++;// incrementing i value by 1 every time
}

console.log(myArray);// This will return "[ 0, 1, 2, 3, 4 ]"

// for Loop

var forLoop = [];// declaring the variables 

 for (var i = 0; i < 5; i++){
    // syntax for loop 
/* frist declarations of the variable i,
then pass the condition , here its i should be greater than 5 
at last we should increment the i variable , here we did it by i++ */

    forLoop.push(i);

 }

 console.log(forLoop);// It will Print "[ 0, 1, 2, 3, 4 ]"

// Example 1:
// Iterate Odd Number with a For loop

var oddNum = [];

for (var i = 1; i < 10;i+=2){

    oddNum.push(i);

}

console.log(oddNum);// "[ 1, 3, 5, 7, 9 ]"

// Example 2:
// Iterate Even Number with For Loop

var evenNum = [];

for (var i = 0; i < 10;i+=2){

    evenNum.push(i);

}

console.log(evenNum);// "[ 0, 2, 4, 6, 8 ]"

// Count Backward with For Loop

var countBackward = [];

for (var i = 10; i > 0; i--){// in this we are decrementing the value of the i 

    countBackward.push(i);

}

console.log(countBackward); // "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]"

// Iterate through an Array with For Loop

var newArray = [1,2,3,4,5,6,7,8,9,10];// Declared the Array with some elements

var newTotal = 0;// Declared the newTotal variable

for (var i = 0; i < newArray.length; i++){// Declaring the variable i and giving condtion to it , i.e. the i should be greater than the length of the array

    newTotal += newArray[i];// here we are adding the i variable in the newTotal variable
    /* It works in this way :
    Frist the i variable store the all the elements of newArray in it self while iterating over the array with For Loop
    Then then the newTotal variable adds the i variable to itself */
}

console.log(newTotal); // "55"


// Do While loop
// The do...while statements comba defines a code block to be executed once, and repeated as long sd s condition is true 

var ourArray = [];

var i = 0

do {
    ourArray.push(i);
    i++; //

}while(i < 10)

console.log(ourArray);// "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]"