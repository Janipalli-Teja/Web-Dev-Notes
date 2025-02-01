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

