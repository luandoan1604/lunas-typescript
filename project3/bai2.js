"use strict";
let sum = (x = 5, y) => { return x + y; };
let speech = (output) => {
    console.log("Result: " + output);
};
speech(sum(5, 12));
console.log(speech(sum(8, 5)));
let something = undefined;
// let nothing:never=null;
function throwError(errorMsg) {
    throw new Error(errorMsg);
}
function addHandle(x, y, cb) {
    const result = x + y;
    cb(result);
}
addHandle(10, 20, (result) => {
    console.log(result);
});
