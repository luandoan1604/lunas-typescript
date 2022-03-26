"use strict";
let user1;
user1 = new Person();
// user1.name = 'manu';
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
user1.greet('hi there - I am');
console.log(user1);
