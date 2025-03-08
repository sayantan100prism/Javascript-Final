if("1" == 1){
    console.log("1" == 1); //true //as here we are using "==" operator, it will convert the string to number and then compare.
}
if("1" === 1){
    console.log("1" === 1); //false //as here we are using "===" operator, it will not convert the string to number and then compare.
}