// now we are creating tags and elements in HTML using javascript

let newbtn=document.createElement("button");
newbtn.innerText="click here";
newbtn.style.color="white";
newbtn.style.backgroundColor="black";

document.querySelector("body").prepend(newbtn); 

let content=document.createElement("p");
content.innerText="this is content";
content.style.backgroundColor="grey";

document.querySelector("body").prepend(content);