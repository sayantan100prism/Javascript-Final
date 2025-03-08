//Fibonacci numbers

/*
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, 
the next number is a sum of the two preceding ones.

First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

Write a function fib(n) that returns the n-th Fibonacci number.

An example of work:
*/

/*
function fib(n) {  your code  }

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757

P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second. */

// function fib(n) {
//     if (n <= 1) {
//         return n;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// console.log(fib(77)); // 5527939700884757
/* 
in the above process …But for big values of n it’s very slow.
 For instance, fib(77) may hang up the engine for some time eating 
 all CPU resources.

That’s because the function makes too many subcalls. 
The same values are re-evaluated again and again. 
*/




//The approach is called dynamic programming bottom-up.
function fib(n) {
    let a = 0, b = 1, temp;

    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }

    return n ? b : a;
}

console.log(fib(77)); // 5527939700884757