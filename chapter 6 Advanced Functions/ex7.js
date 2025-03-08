// Arrow functions do not have "arguments"

// If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

// Here’s an example:

function f() {
  let showArg = () => alert(arguments[0]);
  showArg();
}

f(1); // 1
// As we remember, arrow functions don’t have their own this. 
// Now we know they don’t have the special arguments object either.