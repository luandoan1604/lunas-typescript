"use strict";
function sum1() {
    return 1 + 1;
}
let sum2 = () => {
    return 3 + 4;
};
console.log(sum1());
console.log(sum2());
let sum3 = (x, y) => x + y;
let sum4 = (...rest) => rest[0] + rest[1];
console.log(sum3(4, 1));
console.log(sum4(4, 2));
const hobbies = ['sports', 'cooking'];
const activehobbies = ['hiking'];
// activehobbies.push(hobbies[1]);
// console.log(activehobbies);
activehobbies.push(hobbies[0], hobbies[1]);
console.log(activehobbies);
// activehobbies.push(...hobbies);
// console.log(activehobbies);
