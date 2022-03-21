let sum = (x:number=5, y?:number)=>{return x + <number>y;}
let speech = (output:any):void=>{
    console.log("Result: " + output);
}
speech(sum(5,12));
console.log(speech(sum(8,5)));

let something:void = undefined;
// let nothing:never=null;
function throwError(errorMsg:string):never{
    throw new Error(errorMsg);
}

function addHandle(x:number, y:number, cb:(num:number)=>void){
    const result = x + y;
    cb(result);
}
addHandle(10, 20, (result)=>{
    console.log(result);
})