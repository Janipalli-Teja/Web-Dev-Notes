// loops in javascript 


// While loop

//The JS while loop is a control flow statement that allows code to be executed repeatedly based on a given Boolean condition. The while loop can be thought of as a repeating if statement.

//syntax 

while (condition) {
    // code
    // so-called "loop body"
}


//JavaScript do-while Loop
//The JS do-while loop is similar to the while loop with the only difference is that it checks for the condition after executing the statements, and therefore is an example of an Exit Control Loop. It executes loop content at least once event the condition is false.
//sytax

do {
    Statements...
}
while (condition);


// for loop
// The JS for loop provides a concise way of writing the loop structure. The for loop contains initialization, condition, and increment/decrement in one line thereby providing a shorter, easy-to-debug structure of looping. 
//syntax 

for (initialization; testing condition; increment/decrement) {
    statement(s)
}

// break in the loops
// Normally, a loop exits when its condition becomes falsy.
// But we can force the exit at any time using the special break directive.
if(false) break;

// continue
// The continue directive is a “lighter version” of break. It doesn’t stop the whole loop. Instead, it stops the current iteration and forces the loop to start a new one (if the condition allows).
// Labels for break/continue
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  
  alert('Done!');

//for-in Loop
//is used to iterate over the properties of an object. The for-in loop iterates only over those keys of an object which have their enumerable property set to “true”.
//syntax

for(let variable_name in object_name) {
    // Statement
}

// example 
const student={
    nam:'teja',
    roll:'22331a1243',
    group:'IT',
};

for(let info in student){  // " in " -- iterator...
    console.log(info,student[info]);
}


// for-of Loop
//used to iterate in strings and arrays 
// is used to iterate the iterable objects for example – array, object, set and map. It directly iterate the value of the given iterable object and has more concise syntax than for loop.
// syntax 
for(let variable_name of  object_name) {
    // Statement
}

// example
data="this is the best";
for(let i of data){  // " of " -- iterator..
     console.log("i = ",i);
}


// switch case 
// A switch statement can replace multiple if checks.

// It gives a more descriptive way to compare a value with multiple variants.
/*
switch(x) {
    case 'value1':  // if (x === 'value1')
    ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
    [break]
  
    default:
        ...
        [break]
    }
*/

// Grouping of “case”

/*
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
*/

