// Conditons 

function checkEqual(a, b) {
    if(a === b) {
        return true;
    }
    else{
        return false;
    }
}
console.log(newCheckEqual(10,10))// True
console.log(checkEqual(10,20))// "false"

// The above condition can be written without if else statements
// syntax
function newCheckEqual(a, b) {
    return a === b? true : false;
}

console.log(newCheckEqual(10,10))// True

console.log(checkEqual(10,20))// "false"

// Using Multiplr Conditional(Ternary) Operator

function checkSign(val){

    return val > 0? "Positive": val < 0? "Negative": "zero";

}

console.log(checkSign(10))// "Positive"

console.log(checkSign(-10))// "Negative"

console.log(checkSign(0))// "zero"
