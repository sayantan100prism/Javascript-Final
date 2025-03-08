**Recursion**
->  a function pow(x, n) that raises x to a natural power of n. In other words, multiplies x by itself n times.

pow(2, 3) = 8
pow(2, 4) = 16

When pow(x, n) is called, the execution splits into two branches:

              if n==1  = x
             /
pow(x, n) =
             \
              else     = x * pow(x, n - 1)


**Linked List**
The linked list element is recursively defined as an object with:

value.
next property referencing the next linked list element or null if that’s the end.
For instance:

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Graphical representation of the list:


An alternative code for creation:

let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };
list.next.next.next.next = null;


Here we can even more clearly see that there are multiple objects, each one has the value and next pointing to the neighbour. The list variable is the first object in the chain, so following next pointers from it we can reach any element.

**Rest parameters and spread syntax**

->The rest of the parameters can be included in the function definition by using three dots ... followed by the name of the array that will contain them. The dots literally mean “gather the remaining parameters into an array

function sumAll(...args) { // args is the name for the array
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

alert( sumAll(1) ); // 1

**Spread syntax**

->We’ve just seen how to get an array from the list of parameters.
But sometimes we need to do exactly the reverse.
For instance, there’s a built-in function Math.max that returns the greatest number from a list:

-> alert( Math.max(3, 5, 1) ); // 5

->Now let’s say we have an array [3, 5, 1]. How do we call Math.max with it?
Passing it “as is” won’t work, because Math.max expects a list of numeric arguments, not a single array:

->let arr = [3, 5, 1];
alert( Math.max(arr) ); // NaN

->And surely we can’t manually list items in the code Math.max(arr[0], arr[1], arr[2]), because we may be unsure how many there are. As our script executes, there could be a lot, or there could be none. And that would get ugly.

Spread syntax to the rescue! It looks similar to rest parameters, also using ..., but does quite the opposite.

When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.

For Math.max:

->let arr = [3, 5, 1];
alert( Math.max(...arr) ); // 5 (spread turns array into a list of arguments)

->We also can pass multiple iterables this way:

->let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];
alert( Math.max(...arr1, ...arr2) ); // 8

->But there’s a subtle difference between Array.from(obj) and [...obj]:

->Array.from operates on both array-likes and iterables.
->The spread syntax works only with iterables.
So, for the task of turning something into an array, Array.from tends to be more universal.