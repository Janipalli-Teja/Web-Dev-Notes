/* function _ _ _ _ function expression ->It allows us to create a new function in the middle of any expression.
      |     \
      |      \
    function  \
 declaration   \
               arrow function
*/
// function expression
// assigning a function to a variable is called function expression 
let sayHi = function() {
    alert( "Hello" );
};  //The semicolon ; is recommended at the end of the statement, it’s not a part of the function syntax.

// callback function 
// A callback function is a function passed as an argument to another function, which is then executed (or "called back") at a later time.
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  
  function showOk() {
    alert( "You agreed." );
  }
  
  function showCancel() {
    alert( "You canceled the execution." );
  }
  
  // usage: functions showOk, showCancel are passed as arguments to ask
  ask("Do you agree?", showOk, showCancel);


function sayHi() {
    alert( "Hello" );
  }
  
  alert( sayHi ); //shows the code od sayHi function
  alert( sayHi ); //shows Hello

// function copy
let copy_func=sayHi // copies the sayHi function
copy_func() //this calls the newly created copy function


// function declaration
// function is a set of statements that take inputs, do some specific computation, and produce output
// A JavaScript function is executed when “something” invokes it (calls it)

// syntax 
/*
    Definition 
function functionName(Parameter1, Parameter2, ...)
{
    // Function body
}

call
functionName();

*/
function sum(){
    let num=2;
    return;
}
alert(sum()===undefined)  // function with empty return and empty function is undefined

// If we want the returned expression to wrap across multiple lines, we should start it at the same line as return. Or at least put the opening parentheses there as follows:
return (
    some + long + expression
    + or +
    whatever * f(a) + f(b)
    )

    
    // example
    let count=0;
    function pro(str){
        let arr=['a','e','i','o','u'];
        for(let char of str){
            for(let j=0;j<arr.length;j++){
            if(char==arr[j]){
                count++;
            }
            }
        }
    }
    pro("abcdefghijklmnopqrstuvwxyz");
    console.log(count);


// Arrow function 
// Arrow functions are anonymous functions i.e. they are functions without a name and are not bound by an identifier. Arrow functions do not return any value and can be declared without the function keyword. They are also called Lambda Functions.

// syntax 
// let function_name = (argument1, argument2 , ...) => {expression};

// example

// with arguments

const mult=(a,b)=> a*b;
console.log(mult(2,5));

// Multiline arrow functions
// it means complex function, with multiple expressions and statements.

let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };
  
  alert( sum(1, 2) ); // 3



// without arguments
// If there are no arguments, parentheses are empty, but they must be present:
let dis=()=> alert("hello");
dis();



// foreach 

// The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array. 

// syntax 
/*
array.forEach(callback(element, index, arr), thisValue); 
                ^                               ^
                |                               |
                |                               |
            this is function                this is optional argument.

*/

// example with normal function 
arr=[23,54,56,87,23,65];
arr.forEach(function roll(val) {
    console.log(`22331a12${val}`);   //every number in arr is sent into the roll function...
});


// example with arrow function 
arr=[23,54,56,87,23,65];
arr.forEach(val=>{
    console.log(`22331a12${val}`);   //every number in arr is sent into the roll function...
});
 ///     or 
 // example with arrow function 
num=[23,54,56,87,23,65];
let roll=(n)=>{
    console.log(`22331a12${n}`);
};

num.forEach(roll);




// Map  - creates a new array , 
// example
let arr=[1,2,3,4];
let fc=arr.map(element => {
    let square =element*element;    
    return square;
});
console.log(fc);   // newly created array


//Filter - creates an array which is 

// JavaScript Array filter() Method is used to create a new array from a given array consisting of only those elements from the given array that satisfy a condition set by the argument method.

// syntax 
array.filter(callback(element, index, arr), thisValue)

// example 
let arr54=[1,2,3,4];
let fc54=arr54.filter(element => {
    return element%2==0;
});
console.log(fc54);

// Reduce 
// The Javascript arr.reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of the array (from left to right) and the return value of the function is stored in an accumulator. 

// syntax

// array.reduce( function(total, currentValue, currentIndex, arr),initialValue )

let arr24=[1,2,3,4]

let out=arr24.reduce((sum,curr)=>{
    return sum+curr;
});

console.log(out);
