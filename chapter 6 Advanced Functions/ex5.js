//Output a single-linked list in the reverse order

/*
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


Write a function printList(list) that outputs list items one-by-one.
*/
// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?

//answer:-
// Using a loop
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
function printList(list) {
    let tmp = list;
    while (tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}
printList(list);

// Using recursion
function printList(list) {
    console.log(list.value);
    if (list.next) {
        printList(list.next);
    }
}
printList(list);