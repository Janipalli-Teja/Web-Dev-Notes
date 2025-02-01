// objects
// objects are used to store keyed collections of various data and more complex entities.
 // directly defining the objects 

// "object literal" syntax
// We can immediately put some properties into {...} as “key: value” pairs:
let obj_name= {};


let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
};

// Trailing Commas:
// The last property in the list may end with a comma: or not is this true 

let user = {
  name: "John",
  age: 30,
}

// adding a property(key-pair) to obj
user.class="7";

// deleting a property 
delete user.age;

// We can also use multiword property names, but then they must be quoted:

let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
};


// using square brackets

// For multiword properties, the dot access doesn’t work:
user.likes birds = true    // this would give a syntax error

// There’s an alternative “square bracket notation” that works with any string:
let user = {};

// set
user["likes birds"] = true;

// get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];


let user = {
    name: "John",
    age: 30
};
  
let key = prompt("What do you want to know about the user?", "name");
  
// access by variable
alert( user[key] ); // John (if enter "name")
alert( user.key ); // undefined


// Computed properties

let key=prompt("enter the fruit name")
let obj={
    [key + "_id"]:1,
    [key + "_fruit"]:key,
};


// Property value shorthand
function makeUser(name, age) {
    return {
      name: name,
      age: age,    // partial arguments are key ,actual arguments are values 
    };
}
  
let user = makeUser("John", 30);
console.log(user); // age: 30 
                    //  name: "John"


const object1={
    nam:"teja",
    marks:43,
    printmarks: function (){
        console.log("marks =",this.marks)  // here this.marks represent the obj.marks
    },
};

// defining function in an object .. 

const stu={
    info1(){
        console.log("the name is teja1");
    },
    //we can use either of the two ways to create a function in object..
    info2 : function (){
        console.log("the name is teja2");
    },
};

// Property existence test, “in” operator
let user={
    key1:1,
    key2:2,
};

alert(user.key2===undefined);  // alerts false cause there exit a property key2
alert(user.key3===undefined);  // alerts true cause there is no property key3 , so undefined
alert("key2" in user);  // alerts true cause there exit a property key2
alert("key3" in user);  // alerts false cause there is no property key3.


// prototypes in javascript
// JavaScript is a prototype based language, so, whenever we create a function using JavaScript, JavaScript engine adds a prototype property inside a function, Prototype property is basically an object (also known as Prototype object), where we can attach methods and properties in a prototype object, which enables all the other objects to inherit these methods and properties.
// we can set prototype using __proto__ 

const obj={
    data(){
        console.log("the data is here");
    },
};

const obj1={

};

obj1.__proto__=obj;

// for in loops 
let user = {
    name: "John",
    age: 30,
    isAdmin: true
};

for (let key in user) {
    // keys
    alert( key );  // name, age, isAdmin
    // values for the keys
    alert( user[key] ); // John, 30, true
}


// Object references and copying
// 
// When an object variable is copied, the reference is copied, but the object itself is not duplicated.
// Two objects are equal only if they are the same object.

let user = { name: 'John' };
let admin = user;
admin.name = 'Pete'; // changed by the "admin" reference
alert(user.name); // 'Pete', changes are seen from the "user" reference


// Const objects can be modified
const user = {
    name: "John"
  };
  
  user.name = "Pete"; // (*)
  
  alert(user.name); // Pete


//   duplicate an object
// Cloning and merging, Object.assign
const obj={
    key1:"value",
    key2:"value",
};

const clone={
};

for(let i in obj){
    clone[i]=obj[i];
}

console.log(clone.key1)  //"value"
// we try to change the key1 values
clone.key1="value1"
console.log(clone.key1)  // "value1" , values changed here 
console.log(obj.key1)    // "value", but not here

// method2
let des={...obj}; // object is created

// We can also use the method 
// Object.assign.  -- assigned all the properties of source objects to destination object
// syntax 
// Object.assign(dest, ...sources)

let source1={
    name:"teja",
    roll:43,
};
let source2={
    name:"vamsi",
    clg:"MVGR",
    code:525003,
};

let info={
};

let info=Object.assign({},source1,source2);
// or 
Object.assign(info,source1,source2);
console.log(info);


let source12={
    name:"teja",
    roll:43,
};
let source21={
    name:"vamsi",
    clg:"MVGR",
    code:525003,
};

let info1={
};
// or 
let info1=Object.assign({},source1,source2);   //Here it copies all properties of user into the empty object and returns it. 
Object.assign(info1,source12,source21,{name:"vamsi"});  // this overides the value in name in info1 which is taken from source12 
console.log(info);



// nested clones 
let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = Object.assign({}, user);
  
  alert( user.sizes === clone.sizes ); // true, same object
  
  // user and clone share sizes
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width);  // 60

//   To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. There’s structuredClone method that implements deep cloning.

// structuredClone

let user = {
    name: "John",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
  let clone = structuredClone(user);
  
  alert( user.sizes === clone.sizes ); // false, different objects
  
  // user and clone are totally unrelated now
  user.sizes.width = 60;    // change a property from one place
  alert(clone.sizes.width); // 50, not related


//   Object methods
// A function that is a property of an object is called its method./
let user={
    name:"teja",
    age:43,
  };
  
  user.greet=function(){
    console.log("hell yaar" )
  }
  user.greet()
  
//   Method shorthand
// these objects do the same

user = {
    sayHi: function() {
      alert("Hello");
    }
  };
  
  // method shorthand looks better, right?
  user = {
    sayHi() { // same as "sayHi: function(){...}"
      alert("Hello");
    }
  };

// this keyword  -- used to access the current objects varibles and methods
// In JavaScript, keyword this behaves unlike most other programming languages. It can be used in any function, even if it’s not a method of an object.
let user={
    name:"teja",
    age:43,
  };
  
  function greet(){
    alert(this.name)
  }
  
  user.greet=greet;
  user.greet()
  
//   Arrow functions have no “this”
let user={
    name:"teja",
    age:43,
  };
  
  let greet=()=>{
    alert(this.name+"was")  // only alerts was.., no name
  }
  
  user.greet=greet
  user.greet()


  // tasks

  let calculator = {
    // ... your code ...
    read: function(){
      this.a=+prompt("enter a value "),
      this.b= +prompt("enter b value")
    },
    sum:function(){
      return (this.a + this.b);
    },
    mul:function(){
      return (this.a*this.b);
    }
  };
  
  calculator.read();
  alert( calculator.sum() );
  alert( calculator.mul() );


  