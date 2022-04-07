"use strict";
//Type inference
function add(x = 5) {
    let phrase = "result is ";
    phrase = "show ";
    x = 2.8;
    return phrase + x;
}
let result1 = add();
console.log(result1);
