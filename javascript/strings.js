// A sequence of characters enclosed in single (‘ ‘) or double (” “) quotes.

// syntax 
let str = 'String with single quote'; 
//   or
str = "Create String with Double Quote"; 
  
//  or 
let str1= new String("this is string ");



let str3 = 'Template Litral String';   //for dynamic string creation
let newStr =` ${str3}`;   // here newstr consists of data in str3...


// Create Empty Strign with Single Quotes
let str0 = '';

// Create Empty Strign with Double Quotes
let str2 = "";

// Multiline Strings

let str42 = ` 
    This is a 
    multiline 
    string
    `;
    
    
// accesing string elements 
// Syntax 
/*

str[index_number]

*/


// methods in strings //--------------------------------

let str24='this is string ';
let str23="i say ";
console.log(str24.length)
console.log(str24.toUpperCase);
console.log(str24.toLowerCase);  // these will return the type
console.log(str24.trim);
console.log(str24.slice(3,8));
console.log(str24.replace("s","p"));
let by=str23.concat(str24);
console.log(by);
console.log(by.charAt(6));

// meegathavi avasaram batti chaduvu ra ungama..



// Template Literals
// syntax 
// `This is Template`
/*
let t=`this 
can 
be 
a 
multiline 
string
`
*/

// String interpolation 
// To create a string by doing subtitution of placeholders

// `This is Template ${variable_name} `
// `This is Template ${Expressions} `

// In template the any datatype converts into the part of the string  
// example for the usage of template
let stu={
    nam:'teja',
    age:15,
    roll:43,
};

// for required output we do 
console.log("the student name is ",stu.nam,".His age is ",stu.age,".His roll number is ",stu.roll);
// by using template 
let output=`the student name is ${stu.nam}.His age is ${stu.age}.His roll number is ${stu.roll}`;



/*Escape Characters..
/n -- gives new line
\t -- give tab space
*/
// strings are immutable in javascript