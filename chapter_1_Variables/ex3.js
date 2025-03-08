var x=function(){
   
    console.log(z); // ReferenceError: z is not defined
    console.log(y); //undefined
    console.log(x); // [Function: x]
    var y = 1;
    let z = 2;
    
}
x();

//-->NOTE: hoisting occurs only in "var" not on "let" and "const" variables.

//-->NOTE: "var" variables are hoisted to the top of the function or global scope.
//-->NOTE: "let" and "const" variables are not hoisted to the top of the function or global scope.
//-->NOTE: "let" and "const" variables are hoisted to the top of the block scope.

//-->NOTE: "let" and "const" variables are not initialized until the interpreter reaches the line where they are defined.
//-->NOTE: "var" variables are initialized with "undefined" when hoisted.
//-->NOTE: "let" and "const" variables are not initialized when hoisted.
//-->NOTE: "let" and "const" variables are not accessible before the line where they are defined.
//-->NOTE: "var" variables are accessible before the line where they are defined.
