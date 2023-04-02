//Syntax
//If statement

function tureOrfalse(isItTrue){// basic syntax of if statement

    if(isItTrue){//here its check the condition 

        return "Yes, its True";//return true n prints this statement if the condition satisfies

    }

    return "No, its False";// if above condition is not satisfied this statement will print with the statement
}

console.log(tureOrfalse(true));// here it will print "Yes, its True" as the argument we have passed is true

// Comparison with the Equality Operators
//note :
/*
 3 == 3 in this condition we have used two equality operators 
 3 === 3 will check both side of the equality operator if both side satisfy then only its true example here 3 === "3" this will return false as the both side of condition is not satified . here we are comparing interger with string so the we get false as return 
 */

 //examples

 function testEqual(val){

    if (val == 10){

        return true;

    }

    return false;

}

console.log(testEqual(10));// this will print true as the conditon is true

console.log(testEqual(12));// this will return false cause condition does not match

function testEqual_with_threeoperators(val){

    if (val === 10){

        return true;

    }

    return false;

}

console.log(testEqual_with_threeoperators(10));// this will print true as the conditon is true

console.log(testEqual_with_threeoperators("10"));//this will return false as we are comparing integer with string

 // Comparison with the Greater operator
 
 function testGreaterThan(val){

    if (val > 100){// checking the condition with the Greater operator

        return "Its Greater than 100";

    }

    return "Its not Greater than 100";

}

console.log(testGreaterThan(999));// will return "Its Greater than 100"


 // Comparison with the lessthan operator

 function testLessThan(val){

    if (val < 100){// checking the condition with the lessthan operator

        return "Its less than 100";

    }

    return "Its not less than 100";

}

console.log(testLessThan(999));//will return "Its not less than 100"

  // Comparison with the Greathan equal operator

function testGreaterThanEqualTo(val){

    if (val <= 100){// checking the condition with the "<=" operator

        return "Its greater than or equal to 100";

    }

    return "Its not greater than or equal to 100";

}

console.log(testGreaterThanEqualTo(100));// will print "Its greater than or equal to 100"

console.log(testGreaterThanEqualTo(101));// will print "Its not greater than or equal to 100"

  // Comparison with the less than equal to operator

function testLessThanEqualTo(val){

    if (val >= 100){// checking the condition with the ">=" operator

        return "Its less than or equal to 100";

    }

    return "Its not less than or equal to 100";

}

console.log(testLessThanEqualTo(100));// will print "Its not less than or equal to 100"

console.log(testLessThanEqualTo(99)); // will print "Its less than or equal to 100"

 //Comparion with logical and operators

 //with "&&" operator
function testLogicalAndOperator(val){

    if (val <=50 && val >=25){//with using "&&" we check the conditional expression here both condition should be true or else its wont be true

        return "Its between 25 to 50";

    }

    return "Its more than 50 or less than 25";

}

console.log(testLogicalAndOperator(30)); // this will print "Its between 25 and 50"

console.log(testLogicalAndOperator(80));// this will return "its more than 50 or less than  25"

 //Comparion with logical or operators
 //with "||" operator 

 function testLogicalAndOperator(val){

    if (val <10 || val >20){//with using "||" we check the conditional expression here if any one of the condition satisfied it returns true

        return "Outside";

    }

    return "Inside";

}

console.log(testLogicalAndOperator(15)); // this will print "Outside"

console.log(testLogicalAndOperator(30));// this will return "Inside"

 //Else Statement
// Generally else statement get into action when condition in "IF" dont satisfys.

function testElse(val){

    var result = "";// Declaring result

    if (val > 5){

        result = "Bigger than 5";

    }else{

        result = "Less than 5";

    }

    return result;// returns the result

}


console.log(testElse(4));// This will return "Less than 5" as the else condition gets into action

console.log(testElse(6));// This will return "Greater than 5" 

 //Else If Statements
// When we have many parameters we use "else if " between "if" and "else" statements

function testElseIf(val){

    if (val > 10){

        return "Greater than 10";

    }else if (val < 5){

        return "Less than 5";

    }else{

        return "Between 5 and 10";

    }

}

console.log(testElseIf(11));// will Print "Greater than 10"

console.log(testElseIf(4));// will Print "Less than 5"

console.log(testElseIf(7));// will Print "Between 5 and 10"