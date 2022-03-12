//bai 1
var number1 = 5;
var number2 = 2.8;
var phrase = 'Result is ';
var permit = true;
var result = number1 + number2;
if (permit) {
    console.log(phrase + result);
}
else {
    console.log('not show result');
}
//bai 2
function add(x) {
    if (x === void 0) { x = 5; }
    var phrase = 'Result is ';
    phrase = '10';
    x = 2.8;
    return phrase + x;
}
var result1 = add();
//bai 3
var person;
person = {
    name: "typescript",
    age: 11
};
console.log(person.name);
console.log(person.age);
//bai 4
//1 Array, tuple, any, enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person1 = {
    name: 'typescript',
    age: 11,
    hobbies: ['sports', 'cooking'],
    role: Role.ADMIN,
    roletuple: [2, 'author', 'user']
};
var favouriteActivites;
favouriteActivites = [5, 'sports', true];
console.log(favouriteActivites);
if (person1.role !== Role.AUTHOR) {
    console.log('is author');
}
person1.roletuple.push('admin');
console.log(person1.roletuple);
person1.roletuple[0] = 10;
console.log(person1.roletuple);
person1.roletuple = [0, 'admin', 'user'];
console.log(person1.roletuple);
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = parseFloat(input1) + parseFloat(input2);
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
// const combineNumber = combine(30, 26, 'as-number');
// console.log(combineNumber);
var combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);
var combineText = combine('typescript vs ', 'javascript', 'as-text');
console.log(combineText);
//4 Unknown & any
var userInput;
var userName;
userInput = 5;
userInput = 'typescript';
// userName = userInput;
userName = userInput;
if (typeof userInput === 'string') {
    userName = userInput;
}
