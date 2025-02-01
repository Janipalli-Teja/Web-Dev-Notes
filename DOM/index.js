// console.log(" hello world");

// here console is key inside the window by default 
// so 
/*
let window={
    key1 : val1,
    . 
    . 
    .
    key_n : val_n,
};

*/ // is created by default

console.dir(window);  // opens window directory
console.dir(window.document); // opens document directory in window
console.dir(document.body); // opens body directory in document
console.log(document.body); // opens body tags in html

console.log(document.body.style.background ="beach");  // by linking this nodes we can edit any kind of 

//  getElementById()..
// The getElementById() method returns the elements that have given an ID which is passed to the function. This function is a widely used HTML DOM method in web designing to change the value of any particular element or get a particular element. If the passed ID to the function does not exist then it returns null.

// syntax  -   document.getElementById( element_ID )
let head=document.getElementById("innertext");
console.log(head)

// getElementByClassName()
// syntax  --document.getElementsByClassName(classnames);
// The getElementsByClassName() method in Javascript returns an object containing all the elements with the specified class names in the document as objects. Each element in the returned object can be accessed by its index. The index value will start with 0. This method can be called upon by any individual element to search for its descendant elements with the specified class names.

let heading=document.getElementsByClassName("innertext");  // returns a HTML collection..

console.log(heading);
console.dir(heading);

// getElementByTagName()
// syntax --document.getElementsByClassName(classnames);
// The getElementsByClassName() method in Javascript returns an object containing all the elements with the specified class names in the document as objects. Each element in the returned object can be accessed by its index. The index value will start with 0. This method can be called upon by any individual element to search for its descendant elements with the specified class names.

let tagged=document.getElementsByTagName("h3");
console.log(tagged);



// querySelector()
// The querySelector() method finds and returns the first HTML element that matches a specific CSS selector. If the selector is invalid, it throws an error.
// syntax - - element.querySelector(selectors);

let element= document.querySelector("p");
console.dir(element);

// querySelectorAll()

// The querySelectorAll() method in HTML is used to return a collection of an element’s child elements that match a specified CSS selector(s), as a static NodeList object.

//syntax - - element.querySelectorAll(selectors)
let element1= document.querySelectorAll(".h3");
console.dir(element1);

// exampless 
/*
let element= document.querySelector(".innertext");
console.dir(element);

let element1= document.querySelectorAll(".innertext");
console.dir(element1);

*/



// firstElementChild property

// The Element.firstElementChild read-only property returns an element's first child Element, or null if there are no child elements.
let list=document.getElementById("list");
console.log(list.firstElementChild.textContent);

//last child property

// The read-only lastChild property of the Node interface returns the last child of the node, or null if there are no child nodes.
let list1=document.getElementById("list");
console.log(list1.lastElementChild.textContent);




// DOM manipulation propeties...  

// tagName
// The tagName read-only property of the Element interface returns the tag name of the element on which it's called.
let elem=document.getElementById("list");
console.log(elem.tagName); 

// innerText
//returns text content of the element and all its children
let head_text=document.getElementById("innertext");
console.log(head_text.innerText); 


// innerHTML
//returns the plain text or HTML contents in the elements
let head1=document.getElementById("innertext")
console.log(head1.innerHTML);


// textcontent
//returns textual contenteven for hidden elements...
