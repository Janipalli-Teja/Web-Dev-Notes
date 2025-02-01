// run time error 
// reference error
// console.log(x);

// compile time error 
// syntax error
// console.log(x);

try {
    // let x=3;
    console.log(x);
} catch (error_name) {
    console.log("error occured");
}finally {   //-- this runs even error/no-error
    console.log("finally done");
}

// throw error
try {
    // let x=3;
    console.log(x);
} catch (error_name) {
    throw new Error("error vachindhi ra");
}finally {   //-- this runs even error/no-error
    console.log("finally done");
}


