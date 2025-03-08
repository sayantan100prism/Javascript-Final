**Methods of Primitives**

-->A primitive

Is a value of a primitive type.
There are 7 primitive types: string, number, bigint, boolean, symbol, null and undefined.

-->An object

Is capable of storing multiple values as properties.
Can be created with {}, for instance: {name: "John", age: 30}. There are other kinds of objects in JavaScript: functions, for example, are objects.


**Number**
->let billion = 1_000_000_000;
Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable. 

-> Hexadecimal numbers are widely used in JavaScript to represent colors, encode characters, a shorter way to write them: 0x and then the number.

-> Binary and octal numeral systems are rarely used, but also supported using the 0b and 0o prefixes.

->*toString(base)*
The method num.toString(base) returns a string representation of num in the numeral system with the given base.
        let num = 255;
        alert( num.toString(16) );  // ff

--> *Rounding*

-> Math.floor
Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

->Math.ceil
Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

->Math.round
Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4. In the middle cases 3.5 rounds up to 4, and -3.5 rounds up to -3.

-> toFixed(n)
The method toFixed(n) rounds the number to n digits after the point and returns a string representation of the result.
NOTE:- Please note that the result of toFixed is a string. If the decimal part is shorter than required, zeroes are appended to the end:

let num = 12.34;
alert( num.toFixed(5) ); // "12.34000", added zeroes to make exactly 5 digits

We can convert it to a number using the unary plus or a Number() call, e.g. write +num.toFixed(5).