//Sum all numbers till the given one
/*Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:*/

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050


/*Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.

P.S. Which solution variant is the fastest? The slowest? Why?

P.P.S. Can we use recursion to count sumTo(100000)?*/


// Using a for loop.
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumTo(100));

// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
function sumTo(n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
}
console.log(sumTo(100));

// Using the arithmetic progression formula.
function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(100));


/*
P.S. Naturally, the formula is the fastest solution. 
It uses only 3 operations for any number n. The math helps!

The loop variant is the second in terms of speed. 
In both the recursive and the loop variant we sum the same numbers.
 But the recursion involves nested calls and execution stack management.
  That also takes resources, so it’s slower.

P.P.S. Some engines support the “tail call” optimization: if a recursive call is the very
 last one in the function, with no other calculations performed, 
 then the outer function will not need to resume the execution,
  so the engine doesn’t need to remember its execution context.
   That removes the burden on memory.
    But if the JavaScript engine does not support tail call optimization (most of them don’t), 
    there will be an error: maximum stack size exceeded, 
    because there’s usually a limitation on the total stack size. */