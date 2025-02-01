
// operators in javascript

//Arithmetic operators--> + , - , * , / , % , ++ , -- , unary(+),negation(-)
let x = 1;

x = -x;
alert( x ); // -1, unary negation was applied

// unary + converts a string into a number 
let num1="23"
alert(typeof +num1)   // number

// Converts non-numbers
alert( +true ); // 1
alert( +"" );   // 0

// the unary plus converts it into a number.
let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

// if any of the operands is a string, then the other one is converted to a string too.
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
alert("1" + 2 + 2); //"14"

// only + operator works with string ,Other arithmetic operators work only with numbers and always convert their operands to numbers.
alert( 6 - '2' ); // 4, converts '2' to a number
alert( '6' / '2' ); // 3, converts both operands to numbers

let a1 = 0;
alert( Boolean(a) ); // false

let b = "0";
alert( Boolean(b) ); // true

alert(a1 == b); // true 

// Assignment operators --> = , += , -= , *= , /= , %/ , **/ .

// Comparison operators-->  == , === , != , !== , > , < , <= , >= ,
null == undefined  // true
null == null       // true
null == any_other_value  // false (including strings, numbers, or objects)
alert(undefined == undefined); // true!

alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
// The reason is that an equality check == and comparisons > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false

// The value undefined shouldn’t be compared to other values:
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)

// A strict equality operator === checks the equality without type conversion.
alert( 0 == false );  // True false will become 0
alert( 0 === false ); // false, because the types are different


// string comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
alert( 'a' > 'A' ); // true  A-ascii_value = 65 , a-ascii_value=97  (American Standard Code for Information Interchange)
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
alert("2" > "12"); // true!  --lexicographical order 2>1

// Logical operators--> && , || , ! .
// || (OR)
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

// Another feature of OR || operator is the so-called “short-circuit” evaluation.
true || alert("not printed");  //--> true
false || alert("printed");     //-->statement executed

// && (AND)
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


// ! (NOT)
// syntax->  result = !value;

// A double NOT !! is sometimes used for converting a value to boolean type
alert( !!"non-empty string" ); // true   (first ! return false , 2nd ! returns true , we get boolean value[true] from the given string)
alert( !!null ); // false

// comma operator 
// only the result of the last one is returned.
let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)

// Nullish coalescing operator '??'
// ?? returns the first argument if it’s not null/undefined. Otherwise, the second one (irrespective to null/undefined/true/false  values).
// ex1
// instead of this --
result = (a !== null && a !== undefined) ? a : b; 
 // we write like this --
result = a ?? b 

// ex2
let user = "John";
alert(user ?? "Anonymous"); // John (user is not null/undefined)

// -------defference btw || and ??
// || doesn’t distinguish between false, 0, an empty string "" and null/undefined. They are all the same – falsy values.
// ?? considers above as true values except null and undefined 

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

// bitwise XOR (^)
// The bitwise XOR (^) operator returns a number or BigInt whose binary representation has a 1 in each bit position for which the corresponding bits of either but not both operands are
alert(5^2);

// bitwise OR(|)
// 

// Conditional Statements...

// if-statement 
// sytax 
if ( condition ) {
    // If the condition is met, 
    //code  will get executed.
}

//if-else statement
//sytax
if (condition1) {
    // Executes when condition1 is true
}
else (condition2) {
        // Executes when condition2 is true
}

//else-if statement
//syntax

if (1st condition) {
    // Code for 1st condition
} else if (2nd condition) {
    // ode for 2nd condition
} else if (3rd condition) {
    // Code for 3rd condition
} else {
    //  ode that will execute if all 
    // above conditions are false
}

//  Terinary Operator  or conditional operator "?"
// The so-called “conditional” or “question mark” operator lets us do that in a shorter and simpler way.
// sytax 
condition ? value1 (if true): value2(if false);

// example
let a= 43;
var res=(a>40)?"you are eligible":"you are not eligible";

// multiple conditional operator "?"
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';


// Switch case 
// syntax
switch (expression) {
    case value1:
        statement1;
        break;
    case value2:
        statement2;
        break;
    . . .
    case valueN:
        statementN;
        break;
    default:
        statementDefault;
};


// example

const marks = 85;

let Branch;

switch (true) {
    case marks >= 90:
        Branch = "Computer science engineering";
        break;
    case marks >= 80:
        Branch = "Mechanical engineering";
        break;
    case marks >= 70:
        Branch = "Chemical engineering";
        break;
    case marks >= 60:
        Branch = "Electronics and communication";
        break;
    case marks >= 50:
        Branch = "Civil engineering";
        break;
    default:
        Branch = "Bio technology";
        break;
}
console.log(Branch);



// little problem solution
user=prompt("Who's there")
if(user=="Admin"){
    pass=prompt("enter password")
    if(pass==="" || pass==null){
        alert("cancelled")
    }else if(pass=="TheMaster"){
        alert("Welcome!")
    }else{
        alert("Wrong password")
    }
}else if(user=="" || user==null){
    alert("cancelled")
}else{
    alert("I dont Know you")
}