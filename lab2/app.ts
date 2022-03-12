//bai 1
let number1:number = 5;
let number2:number = 2.8;
let phrase:string = 'Result is ';
let permit:boolean = true;

const result = number1 + number2;
if(permit){
    console.log(phrase + result);
}else{
    console.log('not show result');
}

//bai 2

function add (x=5){
    let phrase = 'Result is ';
    phrase = '10';
    x = 2.8;
    return phrase +x;
}
let result1: string = add();

//bai 3

var person : {
    name:string,
    age:number
}

person = {
    name:"typescript",
    age: 11
}

console.log(person.name);
console.log(person.age);

//bai 4
//1 Array, tuple, any, enum

enum Role {ADMIN, READ_ONLY, AUTHOR};
const person1:{
    name:string,
    age:number,
    hobbies:string[],
    role:number,
    roletuple:[number, string, string]
} = {
    name:'typescript',
    age:11,
    hobbies:['sports', 'cooking'],
    role:Role.ADMIN,
    roletuple:[2, 'author', 'user']
}

let favouriteActivites:any[];
favouriteActivites = [5, 'sports', true];
console.log(favouriteActivites);


if(person1.role!==Role.AUTHOR){
    console.log('is author');
}

person1.roletuple.push('admin');
console.log(person1.roletuple);
person1.roletuple[0] = 10;
console.log(person1.roletuple);
person1.roletuple = [0, 'admin', 'user'];
console.log(person1.roletuple);

//2 Literal type & custom type

type Combinable = number | string;
function combine(input1:string, input2:string, resultConversion:'as-number'|'as-text') {
    let result;
    if(typeof input1==='number' && typeof input2==='number' || resultConversion==='as-number'){
        result = parseFloat(input1) + parseFloat(input2);
    }else{
        result = input1.toString() + input2.toString();
    }
    return result;
}

// const combineNumber = combine(30, 26, 'as-number');
// console.log(combineNumber);
const combineStringNumber = combine('30', '26', 'as-number');
console.log(combineStringNumber);
const combineText = combine('typescript vs ', 'javascript', 'as-text');
console.log(combineText);

//4 Unknown & any
let userInput:unknown;
let userName:string;

userInput = 5;
userInput = 'typescript';
// userName = userInput;
userName = <string> userInput;
if(typeof userInput === 'string'){
    userName = userInput;
}
