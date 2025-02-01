// Events 
// Events are things that happen in the system you are programming, which the system tells you about so your code can react to them
//example
// The user selects, clicks, or hovers the cursor over a certain element.
// The user chooses a key on the keyboard.
// The user resizes or closes the browser window.
// A web page finishes loading.
// A form is submitted.
// A video is played, paused, or ends.
// An error occurs.

let bt3=document.querySelector("#btn3");
bt3.onclick=()=>{
    console.log("button 3 was clicked")
};

let bt4=document.querySelector("#btn4");
bt4.ondblclick=()=>{
    console.log("button 4 was double clicked")
};

let box=document.querySelector("#box");

box.onmouseover=()=>{
    console.log("the mouse is over the box");
};

// Event object..  -- it is a special object that has details about the event
// all event handlers have access to the Event Objects  properties and methods

let bt5=document.querySelector("#btn5");
bt5.ondblclick=(e)=>{  //--- > here e is the event object
    console.log("button 5 was double clicked")
    console.log(e);  //--> this gives the details of button 5 
    console.log(e.type)  // ===> give the type as double click
};

// event listeners
// In JavaScript, an event is an action or occurrence detected by the browser, such as a button click, key press, or mouse movement. Event listeners monitor these events and execute a specified function (callback) when the event occurs.

// syntax 
/*
const element = document.getElementById("myElement");
element.addEventListener("click", function() {
    // Your code here
});
*/
// for button 6 
//  node.addEventListener(event,callback)
//  node.removeEventListener(event,callback)


let bt6=document.querySelector("#btn6");

// 1st event listener
bt6.addEventListener("click",()=>{
    console.log("button 6 was clicked ");
});

// 2nd event listener
bt6.addEventListener("click",()=>{
    console.log("button 6 was clicked 2 ");
});

// trying removeEventlistener withour assinging to var
// here i am trying to remove 2nd event listener..
// note : it should consist the same callback function which the eventListener consists
bt6.removeEventListener("click",()=>{
    console.log("button 6 was clicked 2 ");
});

// we see no change but actually the eventlistener is deleted

// so we do 1 thing 

// we assign the function to a variable by arrow function

//  we try it for button 7

// 1st event listener
let bt7=document.querySelector("#btn7");
bt7.addEventListener("click",()=>{
    console.log("button 7 was clicked ");
});
//  arrow function 
const handler=()=>{
    console.log("button 7 was clicked 2 ");
}
// 2nd event listener
bt7.addEventListener("click",handler);

// trying removeEventlistener withour assinging to var
// here i am trying to remove 2nd event listener..
// note : it should consist the same callback function which the eventListener consists
bt7.removeEventListener("click",handler);
//  now it works :)...

// this is practice mini-project;

let mode=document.querySelector("#mode");

present_mode="light";
mode.addEventListener("click",()=>{
    if(present_mode==="light"){
        present_mode="dark"
        document.querySelector("body").style.backgroundColor=("black");
        document.querySelector("body").style.color=("white");
    }else{
        present_mode="light"
        document.querySelector("body").style.backgroundColor=("white");
        document.querySelector("body").style.color=("black");
    }
})


// done...