//Functions
//function are reuseable code in javascript
// syntax
function nameOfFunction(){

    console.log("Hello world!");

    console.log("Hello world!");

    console.log("Hello world!");

}// this function will print "Hello world!" Three times

//calling the function
nameOfFunction();

//passing values to function with arguments

function ourFunctionWithArguments(a,b){// here a and b are two arguments of the function

    console.log(a+b);   

}
ourFunctionWithArguments(5,6);// giving arguments to function 

//Scope in function

var myGlobal = 10;// this variable has global scope 

function fun1(){

    var localvar = 20; // this variable has scope with this function only i.e. localvar has scope within fun1 function only

    console.log(myGlobal); //this will print 10 

    console.log(localvar); // this will print 20

}

fun1()

function fun2(){
  
    var output = "";
  
    console.log(myGlobal); //this will print 10 
  
    console.log(output); //this will print nothing
 //   console.log(localvar); //this throw error  
}

fun2()