console.log("start");

function intro(){
    console.log("hi teja");

}
setTimeout(intro,3000)  

console.log("end")

/*
Synchronous Code   
flow -- call stack-->execute
console.log("start"): Executes immediately as part of the synchronous execution.
function intro(): Declares a function. This is also synchronous as it is just defining the function, not executing it.
console.log("end"): Executes immediately as part of the synchronous execution.

Asynchronous Code
flow -- call stack --> browser --> callback queue --> call stack(if stack is empty) -->execution
setTimeout(intro, 3000): This is asynchronous because it schedules the intro function to execute after 3000 milliseconds. The actual execution of intro is deferred and handled by the event loop.
*/