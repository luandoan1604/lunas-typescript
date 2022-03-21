"use strict";
//Array, tuple, any, enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person1 = {
    name: 'typescript',
    age: 11,
    hobbies: ['sports', 'cooking'],
    role: Role.AUTHOR,
    roletuple: [2, 'author']
};
let favourriteActivites;
favourriteActivites = [5, 'sports', true];
console.log(favourriteActivites);
if (person1.role === Role.AUTHOR) {
    console.log('is author');
}
person1.roletuple.push('admin');
console.log(person1.roletuple);
person1.roletuple[1] = "holmes";
console.log(person1.roletuple);
// person1.roletuple = [0, 'admin', 'user'];
