// print statement in javascript
console.log("statement");
console.log('statement');

// there is deference in 
console.log("lenght",43); //gives space
console.log("lenght"+43); //doesnt give space..  // this is string concatenation 

// variables   this is ok but 
num=24;
num=35;    // this will be update value of num variable...
console.log(num);

// we use keywords like "let" "const" "var" before the variables
// var -- variable can be redeclared and updated , A global scope
// let -- variable cannot be redeclared but can be updated ,A block scoped variable
// const -- variable cannot be redeclared and cannot be updated , A block scoped variable 


// here a num1 declared more than one time . since it used var it is acceptable
var num1=25;
var num1=35;
var num1=45;

// here it give an error when declare it again 
let num2=65;
// let num2=65;
// let num2=65;

// Declaring multiple variable in single line
let num23=23,num24=24,num25=34


// here it give  
const num3=45;   // a constant cannot be declared without a value
// num3=55; // this gives an erro
console.log(num3);

//    Data Types
// primitive - 7
//   Number
//   string
//   Boolean
//   Undefined
//   Null
//   BigInt
//   Symbol


// NUMBER 
let num1223=45;
console.log(typeof(num1223));   //To put it clear: typeof is an operator, not a function. The parentheses here aren’t a part of typeof. It’s the kind of parentheses used for mathematical grouping.


// STRING

let word='teja';
console.log(typeof(word));


// BOOLEAN

let bool=true;
console.log(typeof(bool));

//UNDEFINED

let x;
console.log(typeof(x));

//NULL
let x1=null;
console.log(typeof(x1));

// BIGINT
let x2=BigInt("34");
console.log(typeof(x2));


//SYMBOL

let x4=Symbol("TATA");
console.log(typeof(x4));

// Non primitive Data Types
// OBJECTS

/* Syntax 


let/const obj={
    key1:value,
    key2:value,
    .
    .
    .
    .
    key_n:value,       // for the last key-value pair the travelling comma in optional , it does not effect the obj working 
};
*/

let obj = {
    nam:'teja',
    age:10,


};
console.log(obj);
console.log(typeof(obj));

// accesing the variable in the object
console.log(obj["nam"]);
//    or 
console.log(obj.nam);

// performing operations on keys inside the objects

obj["age"]=obj["age"]+1;
console.log(obj.age);

// changing the values of keys...
obj["nam"]="Janipalli";
console.log(obj.nam);


// example of object

const profile={
    username : "teja",
    follower : 500,
    following : 250,
    Isfollow : true,
};
console.log(profile);




alert("this creates a pop up in the website");  // alert function always return undefined 
alert(alert(true)) // here first the inner alert displays true and returns undefined  , the outer alert displays undefined .

// input in javascript
// using prompt 
// syntax- prompt("title",default value)
let peru=prompt("nee peru enti ..","teja"); // this creates a pop up and take input from the user

// confirm 
// shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.

let test= confirm("you are boy")   // returns true if we press ok , false if we press cancel

if (test){
    console.log("yes you are boy")
}
else{
    console.log(" you are a girl")
}



// Recap 
// Statements are delimited with a semicolon:
alert('Hello'); alert('World');

// Usually, a line-break is also treated as a delimiter, so that would also work:
alert('Hello')
alert('World')


function f() {
    // no semicolon needed after function declaration
  }
  
  for(;;) {
    // no semicolon needed after the loop
  }

//   typeof operator returns the type for a value

prompt(question, [default])
// Ask a question, and return either what the visitor entered or null if they clicked “cancel”.

confirm(question)
// Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false

alert(message)
// Output a message.

// We covered 3 types of loops:
// 1
while (condition) {
    // ...
}
  
  // 2
do {
    // ...
}while (condition);
  
  // 3
for(let i = 0; i < 10; i++) {
    // ...
}

// The “switch” construct/
let age = prompt('Your age?', 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}

// Function Declaration: the function in the main code flow

function sum(a, b) {
  let result = a + b;

  return result;
}

// Function Expression: the function in the context of an expression

let sum = function(a, b) {
  let result = a + b;

  return result;
};

// Arrow functions:

// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;


