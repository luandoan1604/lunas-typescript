interface Named{
    readonly name?:string;
    outputName?:string;
}

interface Greetable extends Named{
    greet(phrase: string):void;
}

let user1:Greetable;

user1 = new Person();
// user1.name = 'manu';
class Person implements Greetable{
    name:string;
    constructor(n:string){
        this.name = n;
    }
    greet(phrase:string){
        console.log(phrase+" "+this.name);
    }
}

user1.greet('hi there - I am');
console.log(user1);
