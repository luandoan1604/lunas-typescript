//Bài 1: arrow function
//1. Viết hàm (function và arrow function) tính tổng có giá trị trả về không dùng tham số.

function sum1():number{
    return 1 + 1;
}

let sum2=():number=>{
    return 3 + 4;
}

console.log(sum1());
console.log(sum2());

//2. Viết hàm arrow function tính tổng 2 số (có sử dụng default value, optional parameter, rest parameter)

let sum3 = (x:number=0, y?:number) : number => x + <number>y;

let sum4 = (...rest: number[]) : number => rest[0] + rest[1];

console.log(sum3(4,7));
console.log(sum4(11,7));

//3. Thực hiện ví dụ merging array with spread operator

const hobbies = ['sports', 'cooking'];
const activehobbies = ['hiking'];
activehobbies.push(hobbies[0]);
activehobbies.push(hobbies[0], hobbies[1]);
activehobbies.push(...hobbies);
console.log(activehobbies);

//bai2
//1. Function & void

let sum = (x:number=5, y?:number)=>{return x + <number>y;}
let speech = (output:any):void=>{
    console.log("Result: " + output);
}
speech(sum(5,12));
console.log(speech(sum(8,5)));

//2. Never & void

let something:void = undefined;
// let nothing:never=null;
function throwError(errorMsg:string):never{
    throw new Error(errorMsg);
}

//3. Function & callback

function AddandHandle(x:number, y:number, cb:(num:number)=>void){
    const result = x + y;
    cb(result);
}
AddandHandle(10, 20, (result)=>{
    console.log(result);
})