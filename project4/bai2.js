"use strict";
class Person {
    constructor(n) {
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + "" + this.name);
    }
}
let user1;
user1 = new Person('Lunas');
user1.greet('hi there - I am ');
console.log(user1);
