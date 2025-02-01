
// ex1
function changematter(){
    para.textContent="this paragraph is changed";
};

// adding event listener 
let para=document.querySelector("#para");
para.addEventListener("click",changematter) // after a click function is executed 

// removing event listener
para.removeEventListener("click",changematter) // event listener is changed..

// ex2
function changematter(event){
    console.log(event)
    para.textContent="this paragraph is changed";
};

let para=document.querySelector("#para");
para.addEventListener("click",changematter) // after a click function is executed 


// preventing default event like anchor tags ...
let youtubelink=document.querySelector("#youtube");
function nochange(event){
    event.preventDefault();
    youtubelink.textContent="youtube endhuku ra unga";
};
youtubelink.addEventListener("click",nochange);

//mutliple event listeners at single time

let paras=document.querySelectorAll('p');
console.log(paras)
for(let i=0;i<paras.length;i++){
    let para=paras[i];
    para.addEventListener("click",function(){
        alert("the para is "+i);
    });
}


//mutliple event listeners at single time
// event.target 
function alertfunction(event) {
    alert("the para is " + event.target.textContent);
}
let paras = document.querySelectorAll('p');
console.log(paras)
for (let i = 0; i < paras.length; i++) {
    let para = paras[i];
    para.addEventListener("click", alertfunction)
}

// performance

// case1
let begintime=performance.now();
for(let i=0;i<100;i++){
    let test1=document.createElement("p");
    test1.textContent="this is para"+i;
    document.body.appendChild(test1);
}
let endtime=performance.now();

let totalexecutiontime=endtime-begintime;
console.log(totalexecutiontime)

// case2
begintime=performance.now()
let divtag=document.createElement("div")  

for(let i=0;i<100;i++){
    let test2=document.createElement("p");
    test2.textContent="the is para"+i;
    divtag.appendChild(test2);
}

endtime=performance.now();
totalexecutiontime=endtime-begintime;
console.log(totalexecutiontime)

// case3
begintime=performance.now()
let fragment=document.createDocumentFragment()  

for(let i=0;i<100;i++){
    let test2=document.createElement("p");
    test2.textContent="the is para"+i;
    fragment.appendChild(test2);
}
document.body.appendChild(fragment)
endtime=performance.now();
totalexecutiontime=endtime-begintime;
console.log(totalexecutiontime)



