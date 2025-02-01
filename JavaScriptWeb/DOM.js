// Document Object Model
// window object
window.open()

function sayHi() {
    alert("Hello");
}

// global functions are methods of the global object:
window.sayHi();

// ex
alert(window.innerHeight); 
alert(window.outerHeight); 

// ex
document.body.style.background = "red";
setTimeout(() => document.body.style.background = "blue", 1000);

// in console
// select anything in broweser and type "$0" in window console  -- this will return you the complete tag of the element..
// let us modify some tags by adding innerHTML to it
let element = document.querySelector("id or class or tag");
element.innertext 

// to access any element we can make it by
document.getElementById(); 
document.getElementsByTagName();
document.getElementsByClassName();
// or 
document.querySelector() // classname | idname|tagname| - returns firstone among choosen one

// Creation.. 
let item1=document.createElement("h1");   //create a new element of h1 tag

// insertion.. 
item1.textContent="this is new para";
let divtag=document.querySelector("div");

divtag.appendChild(item1)  // adds the created element to the last of the div tag
divtag.insertAdjacentElement("afterbegin",item1);//after the divtag starts
divtag.insertAdjacentElement("beforebegin",item1); // adds before the div tag starts
divtag.insertAdjacentElement("afterend",item1); //after div tag ends
divtag.insertAdjacentElement("beforeend",item1); //before div tag ends

// updation
let data=document.querySelector("#para");
data.textContent="this is updated para";


// deletion
// syn:-  parent.removeChid(child);
let child1=document.querySelector("#para");
let child2=document.querySelector(".para2");
divtag.removeChild(child1);
divtag.removeChild(child2);


// styling through js

let element1=document.querySelector("para");
// gives the css properties of the element...
element.style.cssText;

// setAttribute("property","propertyname");

// this sets the class with a name to a element
let data=document.querySelector("#para");
data.setAttribute("class","class1")  // now data has the class named class1...
// this sets the style property with color white 
data.setAttribute("style","color:white")


// get class
let dataclass=data.className;

// set the classname for existing class
data.className="class2";

// classlist
data.classList  // return the list of the classnames of the element 

data.classList.add("class3") // adds the class3 name as third class

data.classList.remove("class2") // removes the classname 

data.classList.toggle()



