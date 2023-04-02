// Objects is an entity having state and behavior(properties and Methods).
/*
for example :
car:
Name: Agera
Color:White
Type:Supercars

Here car has properties like Name, Color, Type.
Now Agera is the Name so its value to Name Property
Object has Key:Value Pairs of Data Types
*/

var fristObj = {// here we create a new object with "{" and"}" types of brackets

    "Name": "Pranav",// Key:Value Pair of Data

    "Age": 19,// Key:Value Pair of Data

    "Gender":"Male"// Key:Value Pair of Data
};

console.log(fristObj);// It will Print "{ Name: 'Pranav', Age: 19, Gender: 'Male' }"

// Accessing Object Properties with Dot Notation

var newObject = {

    "Name": "Pranav",

    "Age": 19,

    "Gender": "Male"
}

var Name = newObject.Name;// Here we assigned the variable the value of property with Dot Notation 

var Age = newObject.Age;// Here we assigned the variable the value of property with Dot Notation 

var Gender = newObject.Gender;// Here we assigned the variable the value of property with Dot Notation 

console.log(Name);// This will Print "Pranav"

console.log(Age);// This will Print "19"

console.log(Gender);// This will Print "Male"

// Accessing Object Properties with Bracket Notation

var testObject = {

    "Name":"S",

    "Age": 21,

    "Frnd" : "Cool Friend"
}

var Name_1 = testObject["Name"]; // Here we assigned the variable the value of property with Bracket Notation 

var Age_1 = testObject["Age"]; // Here we assigned the variable the value of property with Bracket Notation 

var Frnd = testObject["Frnd"]; // Here we assigned the variable the value of property with Bracket Notation 

console.log(Name_1);// here it gonna print "S"

console.log(Age_1);// here it gonna print "21"

console.log(Frnd);// here it gonna print "Cool Friend"

// Updating Objects with Dot notation

var myDog ={

    "Name": "Wiskey",

    "Color": "Brown",

    "Age": 4 
}

myDog.Age = 5;// here we changed the Age of dog to 5

console.log(myDog);// This will Print "{ Name: 'Wiskey', Color: 'Brown', Age: 5 }"

// Adding new properties to the object

myDog.gender = "Female"// here we add one new property to the object i.e. we added gender property with value

console.log(myDog);// This will Print "{ Name: 'Wiskey', Color: 'Brown', Age: 5, gender: 'Female' }"

//Deleting properties

delete myDog.gender;

console.log(myDog);// This will Print "{ Name: 'Wiskey', Color: 'Brown', Age: 5 }"