

function sum(a, b) {
    return a - b;
}
console.log(sum(1, "2"));

// let arr = [1, 2, 3];
// function max(arr) {
//     return Math.max(...arr);
// }
// console.log(max(arr));

function sum(a) {
    return (b)=> {
        return a  ;
    };
}
var y=2;
var x=function(){
    var y;
    console.log(y); // output = undefined
    y = 1;
}
x();