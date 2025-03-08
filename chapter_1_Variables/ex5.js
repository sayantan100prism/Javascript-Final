const c = [1, 2, 3];
c.push(4);
console.log(c); //[ 1, 2, 3, 4 ]
c.pop();
console.log(c); //[ 1, 2, 3 ]
c = [4, 5, 6]; //TypeError: Assignment to constant variable.