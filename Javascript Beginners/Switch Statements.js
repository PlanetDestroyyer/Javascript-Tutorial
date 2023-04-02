/* The Switch Statement executes a block of code depending on different conditions/cases
*/

function caseInSwitch(val){

    var answer = "";// we defined the answer variable

    switch (val) {
        case 1:// check if val == 1 
            answer = "Monday";
            break;// if condition satisfies here then it will break and function will end here 
        case 2:// check if val == 2
            answer = "Tuesday";
            break;// if condition satisfies here then it will break and function will end here 
        case 3:// check if val == 3
            answer = "Wednesday";
            break;// if condition satisfies here then it will break and function will end here 
        case 4:// check if val == 4
            answer = "Thursday";
            break;// if condition satisfies here then it will break and function will end here 
        case 5:// check if val == 5
            answer = "Friday";
            break;// if condition satisfies here then it will break and function will end here 
        case 6:// check if val == 6
            answer = "Saturday";
            break;// if condition satisfies here then it will break and function will end here 
        case 7:// check if val == 7
            answer = "Sunday";
            break;// if condition satisfies here then it will break and function will end here 
    }

    return answer;// return the answer at the end of the function

}
console.log(caseInSwitch(1))// will Print "Monday"

console.log(caseInSwitch(2))// will Print "Tuesday"

console.log(caseInSwitch(3))// will Print "Wednesday"

console.log(caseInSwitch(4))// will Print "Thursday"

console.log(caseInSwitch(5))// will Print "Friday"

console.log(caseInSwitch(6))// will Print "Saturday"

console.log(caseInSwitch(7))// will Print "Sunday"

//Default Option in Switch Statements
// Default Option is like else statement 

function switchWithDefault(val){

    var answer = "";

    switch(val){
        case "a":
            answer = "Apple";
            break;
        case "b":
            answer = "Bananana";
            break;
        case "c":
            answer = "Cat";
            break;
        default:// here if the condition all are false i.e. not satisfied then default gonna become true and print default statement
            answer = "Something";
    }

    return answer; // returns answer

}

console.log(switchWithDefault("a"));// Will Print "Apple"

console.log(switchWithDefault("b"));// Will Print "Bananana"

console.log(switchWithDefault("c"));// Will Print "Cat"

console.log(switchWithDefault("d"));// Will Print "Something"

// Multiple Identical Options in Switch Statements

function multiSwitch(val){

    var answer = "";

    switch (val) {
        case 1:// here case1 has same output 
        case 2:// here case2 has same output 
        case 3:// here case3 has same output 
            answer = "Low"
            break;
        case 4:// here case4 has same output 
        case 5:// here case5 has same output 
        case 6:// here case6 has same output 
            answer = "Mid"
            break;
        case 7:// here case7 has same output 
        case 8:// here case8 has same output 
        case 9:// here case9 has same output 
            answer = "High"
            break;  

        }

        return answer;  // return the answer

    }

console.log(multiSwitch(1));// It will Print "Low"

console.log(multiSwitch(4));// It will Print "Mid"

console.log(multiSwitch(7));// It will Print "High"